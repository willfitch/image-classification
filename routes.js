module.exports = function(app, controllers) {
  app.get('/status/:uuid', controllers.imageManager.getByUuid);
};