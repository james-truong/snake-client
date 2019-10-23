const net = require("net");
//const { IP, PORT } = require('./constants');

// establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
 
  // notifies to console when connection is made to server and sends name
  conn.on('connect', () => {
    console.log("Connection established, name sent");
    conn.write("Name: JT");
  });
  
  // handle messages incoming from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

module.exports = { connect };

