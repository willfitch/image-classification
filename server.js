var uuid = require('uuid'),
    restify = require('restify'),
    server = restify.createServer(),
    log = require('./lib/log').logger,
    routes = require('./routes'),
    Queue = require('./lib/controllers/queue');

var controllerMap = {
  queue: new Queue()
};

// Log the request
server.use(function (req, res, next) {
  log.info('[client ' + req.connection.remoteAddress + ']' + ' "' + req.method + ' ' + req.url + '"');
  next();
});

routes(server, controllerMap);

server.listen(8080, function() {
  console.log('Starting on 8080');
});