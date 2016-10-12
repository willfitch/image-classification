'use strict';

var ImageProcessing = require('../models/image-processing');

/**
 * Manages status, queueing, and upload of images
 */
class ImageManager {

  /**
   * Gets image data by UUID
   *
   * @param {Object} req
   * @param {Object} res
   * @param {callback} next
   */
  getByUuid(req, res, next) {
    var searchObj = {
      processUuid: req.params.uuid
    };

    ImageProcessing.find(searchObj, function(err, rows) {
      if (!rows) {
        return;
      }

      res.send(rows[0]);
      next();
    });
  }
}

module.exports = ImageManager;