module.exports = function(app, controllers) {
  app.get('/queue/:uuid', controllers.queue.getByUuid);
};