var fs = require("fs");

console.log("1 File Start");
var data = fs.readFile("hello.txt", function(err,data)
{
	if(!err)
	{
	console.log("2" + data);
}
});
console.log("3 File Read");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});