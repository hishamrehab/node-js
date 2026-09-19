// ESM version of the require() experiments in index.js.
// Uses .mjs so it runs as an ES module despite "type": "commonjs".

import logger from "./logger.mjs";
import { log } from "./logger.mjs";

// named export: a function, so it is called directly
log("hello world");

// default export: an object, so the function is a property on it
logger.log("hello world");

// __dirname / __filename do not exist in ESM; import.meta.url replaces them
console.log(import.meta.url);
