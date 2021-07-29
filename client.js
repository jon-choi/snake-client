const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542// PORT number here,
  });

  conn.on("connect", () => {
    console.log('congratulations, you are now connected.')
    conn.write("Name: JJC")
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};