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
  /*Sync all tables, creates database
  force: true -> overwrites database if it already exisits. 
  This would not be approriate in production, but is done for easy testing/management during writing.*/
  await db.sequelize.sync({ force: true });
  console.log("Database created");
  /*puts some initial data in the database to work with*/
  try {
    await Project.bulkCreate([{
        name: "Scarf",
        supplies: "200 yards wool yarn"
    }, {
        name: "Embroidery",
        supplies: "Embroidery Floss"
    }, {
        name: "Birthday card",
        supplies: "cardstock"
    }]);
    console.log("database populated with test data")
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
