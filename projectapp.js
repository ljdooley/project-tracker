const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use('/', router);


app.listen(3000, ()=> {
    console.log('project-tracker listening on port 3000')
}); 

const db = require('./db');
const { Project } = db.models;

(async () => {
  // Sync all tables
  await db.sequelize.sync();
  console.log("synchronized");
  try {
    const project = await Project.create({
      name: "Scarf",
      supplies: "200 yards wool yarn"
    });
    //console.log(project.toJSON());

    //const projectById = await Project.findByPk(1);
    //console.log(projectById.toJSON());
  
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
