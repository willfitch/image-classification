var uuid = require('uuid'),
    restify = require('restify'),
    server = restify.createServer(),
    log = require('./lib/log').logger,
    routes = require('./routes'),
    Queue = require('./lib/controllers/queue');

var controllerMap = {
  queue: new Queue()
};

/*
server.get('/hi', function(req, res, next) {
  var obj = {
    name: "Will",
    email: "wfitch@meetme.com",
    uuid: uuid.v4()
  };
  log.info('Ok...');

  var img = new ImageProcessing();
  img.topicName = "test.me";
  img.processUuid = uuid.v4();
  img.remoteAddr = req.connection.remoteAddress
  img.save();

  console.log(img.remoteAddr);

  res.send(obj);
  next();
});*/

// Log the request
server.use(function (req, res, next) {
  log.info('[client ' + req.connection.remoteAddress + ']' + ' "' + req.method + ' ' + req.url + '"');
  next();
});

routes(server, controllerMap);

server.listen(8080, function() {
  console.log('Starting on 8080');
});