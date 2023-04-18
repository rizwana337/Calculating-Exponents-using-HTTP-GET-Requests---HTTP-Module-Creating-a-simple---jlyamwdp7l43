const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      if (value1 <= 0) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'num1 must be a positive integer' }));
        return;
      }

      if (value2 < 0) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'num2 must be a non-negative integer' }));
        return;
      }

      const result = Math.pow(value1, value2);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`The result is ${result}`);
    });
  }
});

module.exports = server;



// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     const chunks = [];

//     req.on('data', chunk => {
//       const buf = Buffer.from(chunk);
//       const str = buf.toString();
//       chunks.push(str);
//       const obj = JSON.parse(chunks)
//       const value1 = obj.num1;
//       const value2 = obj.num2;

//       // Write code here to calculate power of a number
      
//     });
//     }
// });

// module.exports = server;
      
