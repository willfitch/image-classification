var winston = require('winston'),
    config = require('../etc/config');

winston.emitErrs = true;

var date = {},
    hour = '',
    min = '',
    sec = '',
    year = '',
    month = '',
    day = '';


function timestamp() {
  date = new Date();

  hour = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;

  min  = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;

  sec  = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;

  year = date.getFullYear();

  month = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;

  day  = date.getDate();
  day = (day < 10 ? '0' : '') + day;

  return '[' + year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec + ']';
}

var logLevel = 'info';

if ('logLevel' in config.logging) {
  logLevel = config.logging.logLevel;
}

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: logLevel,
      handleExceptions: false,
      humanReadableUnhandledException: true,
      json: false,
      timestamp: timestamp,
      colorize: true
    })
  ],
  exitOnError: false
});

exports.logger = logger;
exports.stream = {
  write: function (message, encoding){
    logger.info(message);
  }
};

