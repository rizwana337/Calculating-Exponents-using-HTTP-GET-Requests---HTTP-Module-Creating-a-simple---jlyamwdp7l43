const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';

    req.on('data', chunk => {
      data += chunk.toString();
    });

    req.on('end', () => {
      const { num1, num2 } = JSON.parse(data);
      
      if (!Number.isInteger(num1) || num1 <= 0) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'num1 must be a positive integer' }));
      } else if (!Number.isInteger(num2) || num2 < 0) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'num2 must be a non-negative integer' }));
      } else {
        const result = Math.pow(num1, num2);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`The result is ${result}`);
      }
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${req.method} method not allowed`);
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
      
