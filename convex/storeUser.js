import { mutation } from "./_generated/server";

/**
 * Insert or update the user in a Convex table then return the document's ID.
 *
 * The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
 * to look up identities.
 *
 * Keep in mind that `UserIdentity` has a number of optional fields, the
 * presence of which depends on the identity provider chosen. It's up to the
 * application developer to determine which ones are available and to decide
 * which of those need to be persisted.
 */
export default mutation(async ({ db, auth }) => {
    const identity = await auth.getUserIdentity();

    if (!identity) {
        throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this identity before.
    const user = await db
        .query("users")
        .withIndex("by_token", q =>
            q.eq("tokenIdentifier", identity.tokenIdentifier)
        )
        .unique();
    if (user !== null) {
        if (!(user.name === identity.name && user.pictureUrl === identity.pictureUrl && user.username === identity.nickname)) {
            await db.patch(user._id, { name: identity.name, pictureUrl: identity.pictureUrl, username: identity.nickname });
        }
        return user._id;
    }
    // If it's a new identity, create a new `User`.
    return db.insert("users", {
        name: identity.name,
        tokenIdentifier: identity.tokenIdentifier,
        bestScore: 0,
        pictureUrl: identity.pictureUrl,
        username: identity.nickname
    });
});
