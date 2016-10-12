'use strict';

class Queue {

  getByUuid(req, res, next) {
    var obj = { name: "Will", here: req.params.uuid };
    res.send(obj);
    next();
  }
}

module.exports = Queue;