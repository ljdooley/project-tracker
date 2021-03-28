const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Project extends Sequelize.Model {}
  Project.init({
    name: { 
      type: Sequelize.STRING,
      allowNull: false
    },
    supplies: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, { sequelize });

  return Project;
};