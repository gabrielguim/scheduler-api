const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const root = './';

var logDirectory = path.join(root, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});

var errorLogStream = rfs('error.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});

// Only when 4xx or 5xx resposes
const morganConfigError = (morgan('dev', {
    stream: errorLogStream,
    skip: function (_, res) { return res.statusCode < 400; }
}));

const morganConfig = morgan('combined', { stream: accessLogStream });

module.exports = {
    access: morganConfig,
    error: morganConfigError
};

