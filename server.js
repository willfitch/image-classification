var uuid = require('uuid'),
    restify = require('restify'),
    server = restify.createServer(),
    log = require('./lib/log').logger,
    routes = require('./routes'),
    config = require('./etc/config'),
    ImageManager = require('./lib/controllers/image-manager');

var serverPort = config.server.port || 8080;

var controllerMap = {
  imageManager: new ImageManager()
};

// Log the request
server.use(function (req, res, next) {
  log.info('[client ' + req.connection.remoteAddress + ']' + ' "' + req.method + ' ' + req.url + '"');
  next();
});

routes(server, controllerMap);

server.listen(serverPort, function() {
  console.log('Starting server on port ' + serverPort);
  log.warn('Starting server on port ' + serverPort);
});