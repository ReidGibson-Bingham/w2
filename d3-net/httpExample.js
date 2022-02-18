const net = require('net'); // the net module makes a request to any http server. 


//HTTP is not an alternative to TCP, it's a text-based "language" that is used to communicate over a TCP connection. every time our browser accesses a website, it makes an HTTP request by opening a TCP connection on port 80 (or 443 for https) to a given HTTP server's IP address. 

//It then sends text-based commands such as GET /path-to-page HTTP/1.1\r\n along with many other request headers (such as the user agent string, etc.) and waits for a response from the server. The response could be any type of document, which typically is either HTML, CSS, or JS.

const conn = net.createConnection({ 
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');

conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});

conn.on('data', (data) => {
  console.log(data);
  conn.end();
});