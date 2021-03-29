const { response } = require('express');
const router = require('express').Router();
const handler = require('../handlers/index');

router.get('/api', (req, res)=> {
    res.send('You started your project! Good job!')
});

//GET a list of all projects: /projects
router.get('/projects', async (req, res)=> { 
  const allProjects = await handler.getAllProjects();
  res.json(allProjects);
});

//GET a specific project: /projects/:id
router.get('/projects/:id', async (req, res)=> {
    const id = req.params.id;
    const projectById = await handler.projectById(id);
    res.json(projectById);
});

//POST (create) a project: /projects
router.post('/projects', async (req, res) => {
    console.log(req.body);
    const newProject = await handler.createProject(req.body);
    res.json(newProject);
    //res.sendStatus(200);
});

//Get supply list for all projects
router.get('/supplies', async (req, res)=> {
  const supplyList = await handler.getSupplies();
  res.send(supplyList);
});



//PUT (update) a project: /projects/:id

//DELETE a project: /projects/:id

/*Temporary Data for working on route creation, prior to incorporating SQL*/
const data = {
    projects: [
      {
        id: 8721,
        name: "Cabled Sweater",
        supplies: "yarn"
      },
      {
        id: 5779,
        name: "Kitchen Remodel",
        supplies: "counter tops"
      },
      {
        id: 3406,
        name: "Butterfly Garden",
        supplies: "flower seeds"
      }
    ]
  }
  
module.exports = router;