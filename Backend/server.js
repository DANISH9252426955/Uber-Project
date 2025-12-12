const http = require('http');
const app = require('./app');
const PORT = process.env.port;


const server = http.createServer(app);






server.listen(PORT);