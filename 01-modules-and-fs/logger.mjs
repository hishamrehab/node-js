console.log("logger.mjs is loaded");

export function log(message) {
    console.log("this is message from logger.mjs: " + message);
}

export default { log };
