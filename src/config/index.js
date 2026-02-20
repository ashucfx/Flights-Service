const { config } = require('dotenv');
const logger = require('./logger-config');

module.exports = {
    serverConfig: require('./server-config'),
    Logger: require('./logger-config'),
    dbConfig: require('./config.json')
}