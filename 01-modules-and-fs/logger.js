console.log("logger.js is loaded");

function log(message) {
    console.log("this is message from logger: " + message);
};

module.exports = { log : log };
exports = { log : log };

exports.add = (num1 , num2) =>{
    return num1 + num2;
}

function  log(message){
    console.log("this is message from logger: " + message);
}
function  log1(message){
    console.log("this is message from logger: " + message);
}

function  log2(message){
    console.log("this is message from logger: " + message);
}

function  log3(message){
    console.log("this is message from logger: " + message);
}

function  log4(message){
    console.log("this is message from logger: " + message);
}


module.exports = { log , log1 , log2 , log3 , log4 };