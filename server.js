const http = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const IP_ADDRESS = 'kkclubpwa-build-25-sept.vercel.app'; // Listen on all available network interfaces
const PORT = 3000; // Change port to the port your Node.js application is running on
const DOMAIN = 'testclub.kerakoll.com';

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(PORT, IP_ADDRESS, (err) => {
    if (err) throw err;
    console.log(`Server running at http://${IP_ADDRESS}:${PORT}/`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
