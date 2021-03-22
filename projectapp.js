const express = require('express');
const router = require('./routes');

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'projects.db'
});

const app = express();

app.use('/', router);

app.listen(3000, ()=> {
    console.log('project-tracker listening on port 3000')
}); 

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database successful!');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();

class Project extends Sequelize.Model {}

Project.init({
  name: Sequelize.STRING,
}, { sequelize });

(async () => {
  // Sync all tables
  await sequelize.sync();

  try {
    const project = await Project.create({
      name: "Kitchen Counter"
    });
    console.log(project.toJSON());

    const projectById = await Project.findByPk(1);
    console.log(projectById.toJSON());
  
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();


/*(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // ... all model instances

    const projectById = await Project.findByPk(1);
    console.log(projectById.toJSON());

  } catch(error) {
    console.error('Error connecting to the database: ', error);
  }
})();*/