// Get dependencies
const express = require('express');
const app = express();
const swaggerOptions = require('./utils/swagger.js');
const morganConfig = require('./utils/log.js');
const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');

// Router
const rootRouter = require('./routes/api.router.js');
const userRouter = require('./routes/user.router.js');

const port = 3001;

// Connect morgan ~logman~
app.use(morganConfig.error);
app.use(morganConfig.access);

// Define REST API
app.use('/api', rootRouter);
app.use('/api/user', userRouter);

// Swagger Docs Options
expressSwagger(swaggerOptions);

app.listen(port, () => console.log('Simple Node + Express app running on port ', port));

module.exports = app;