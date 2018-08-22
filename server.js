// Get dependencies
const express = require('express');
const http = require('http');
const api = require('./routes/api.js')
const app = express();

const port = 3001;

app.use("/api", api)

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log("Simple Node + Express app running on port ", port))