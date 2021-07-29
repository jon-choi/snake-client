let connection; // Stores the active TCP connection object.

// establishes a connection with the game server
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    // console.log('up')
    connection.write('Move: up');
  }

  if (key === 'a') {
    // console.log('left')
    connection.write('Move: left');
  }

  if (key === 's') {
    // console.log('down')
    connection.write('Move: down');
  }
  
  if (key === 'd') {
    // console.log('right')
    connection.write('Move: right');
  }

  if (key === 'z') {
    connection.write('Say: What Up!');
  }

  if (key === 'x') {
    connection.write('Say: Sheeeesh!');
  }

  if (key === 'c') {
    connection.write('Say: No Cap')
  }

};

module.exports = {setupInput};