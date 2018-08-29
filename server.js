// Get dependencies
const express = require('express');
const app = express();
const swaggerOptions = require('./utils/swagger.js')
const morganConfig = require('./utils/log.js')
const api = require('./routes/api.js')
const expressSwagger = require('express-swagger-generator')(app);

const port = 3001;

// Connect morgan ~logman~
app.use(morganConfig.error)
app.use(morganConfig.access)

// Define REST API
app.use("/api", api)

// Swagger Docs Options
expressSwagger(swaggerOptions)

app.listen(port, () => console.log("Simple Node + Express app running on port ", port))

module.exports = app