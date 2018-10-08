// Get dependencies
const express = require('express');
const app = express();
const swaggerOptions = require('./utils/swagger.js');
const morganConfig = require('./utils/log.js');
const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const middleware = require('./firebase/middleware.js');

// Router
const userRouter = require('./api/user/user.router.js');
const serviceRouter = require('./api/service/service.router.js');
const employeesRouter = require('./api/employee/employee.router.js');
const calendarRouter = require('./api/calendar/calendar.router.js');

const port = 3001;

// Configs
app.use(cors());
app.use(bodyParser.json({
    limit: '30mb'
}));

// Connect morgan ~logman~
app.use(morganConfig.error);
app.use(morganConfig.access);

// Define Firebase Middleware
app.use(middleware);

// Define REST API
app.use('/api/user', userRouter);
app.use('/api/service', serviceRouter);
app.use('/api/employee', employeesRouter);
app.use('/api/calendar', calendarRouter);

// Swagger Docs Options
expressSwagger(swaggerOptions);

app.listen(port, () => console.log('Simple Node + Express app running on port ', port));

module.exports = app;