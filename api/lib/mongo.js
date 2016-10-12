var mongo = require('mongoose'),
    config = require('../etc/config'),
    log = require('./log').logger,
    connection = 'mongodb://' + config.mongo.host + '/' + config.mongo.database;

log.info('Starting Mongo connection');
mongo.connect(connection);
module.exports = mongo;