var env       = process.env.NODE_ENV || 'development';
var Sequelize = require('sequelize');
var config    = require('./config.js')[env];

var sequelize = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = sequelize;
