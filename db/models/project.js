const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Sequelize.Model {}
  Project.init({
    name: Sequelize.STRING,
  }, { sequelize });

  return Project;
};