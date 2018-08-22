// Get dependencies
const express = require('express');
const http = require('http');
const api = require('./routes/api.js')
const app = express();

app.use("/api", api)

app.set('port', 3000);

const server = http.createServer(app);

server.listen(3000, () => console.log("Simple Node + Express app running on port 3000"))