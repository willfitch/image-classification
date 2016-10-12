var mongo = require('../mongo'),
    log = require('../log').logger,
    ipAddressPlugin = require("mongoose-ip-address");

var imageProcessSchema = mongo.Schema({
  processUuid: { type: String, index: true},
  imagePath: String,
  queueName: String,
  exchangeName: String,
  topicName: String,
  dateSubmitted: {
    type: Date,
    default: Date.now
  },
  processMeta: {
    dateProcessed: Date,
    datePublished: Date,
    totalProcessTime: Number
  },
  results: {
    isProcessed: false,
    categories: []
  }
});

imageProcessSchema.plugin(ipAddressPlugin, {fields: ["remoteAddr"]});

log.silly('Creating ImageProcessing model and registering schema');
var ImageProcessing = mongo.model('ImageProcessing', imageProcessSchema);

module.exports = ImageProcessing;