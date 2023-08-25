/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.14.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as lib_helpers from "../lib/helpers";
import type * as listTypes from "../listTypes";
import type * as oneTimeMutations from "../oneTimeMutations";
import type * as race_createRace from "../race/createRace";
import type * as race_decrementTimer from "../race/decrementTimer";
import type * as race_endRace from "../race/endRace";
import type * as race_endStanding from "../race/endStanding";
import type * as race_joinRace from "../race/joinRace";
import type * as race_readPractice from "../race/readPractice";
import type * as race_readRace from "../race/readRace";
import type * as race_readStanding from "../race/readStanding";
import type * as race_updatePosition from "../race/updatePosition";
import type * as storeUser from "../storeUser";
import type * as text_createText from "../text/createText";
import type * as text_listTexts from "../text/listTexts";
import type * as text_readText from "../text/readText";
import type * as tug_createTug from "../tug/createTug";
import type * as tug_decrementTimer from "../tug/decrementTimer";
import type * as tug_endTug from "../tug/endTug";
import type * as tug_enterOvertime from "../tug/enterOvertime";
import type * as tug_joinTug from "../tug/joinTug";
import type * as tug_readTug from "../tug/readTug";
import type * as tug_regenerateText from "../tug/regenerateText";
import type * as tug_updatePosition from "../tug/updatePosition";
import type * as tug_winTug from "../tug/winTug";
import type * as user_readPractices from "../user/readPractices";
import type * as user_readRaces from "../user/readRaces";
import type * as user_readTugs from "../user/readTugs";
import type * as user_readUser from "../user/readUser";
import type * as withUser from "../withUser";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  "lib/helpers": typeof lib_helpers;
  listTypes: typeof listTypes;
  oneTimeMutations: typeof oneTimeMutations;
  "race/createRace": typeof race_createRace;
  "race/decrementTimer": typeof race_decrementTimer;
  "race/endRace": typeof race_endRace;
  "race/endStanding": typeof race_endStanding;
  "race/joinRace": typeof race_joinRace;
  "race/readPractice": typeof race_readPractice;
  "race/readRace": typeof race_readRace;
  "race/readStanding": typeof race_readStanding;
  "race/updatePosition": typeof race_updatePosition;
  storeUser: typeof storeUser;
  "text/createText": typeof text_createText;
  "text/listTexts": typeof text_listTexts;
  "text/readText": typeof text_readText;
  "tug/createTug": typeof tug_createTug;
  "tug/decrementTimer": typeof tug_decrementTimer;
  "tug/endTug": typeof tug_endTug;
  "tug/enterOvertime": typeof tug_enterOvertime;
  "tug/joinTug": typeof tug_joinTug;
  "tug/readTug": typeof tug_readTug;
  "tug/regenerateText": typeof tug_regenerateText;
  "tug/updatePosition": typeof tug_updatePosition;
  "tug/winTug": typeof tug_winTug;
  "user/readPractices": typeof user_readPractices;
  "user/readRaces": typeof user_readRaces;
  "user/readTugs": typeof user_readTugs;
  "user/readUser": typeof user_readUser;
  withUser: typeof withUser;
}>;
