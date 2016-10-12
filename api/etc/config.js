
var config = {
  server: {
    port: 8080
  },
  logging: {
    logLevel: "silly" // { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
  },
  mongo: {
    host: "localhost",
    database: "test"
  }
};

module.exports = config;