const net = require("net");
const {connect} = require('./client');

// establishes a connection with the game server
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
setupInput();
connect();

module.exports = {setupInput};