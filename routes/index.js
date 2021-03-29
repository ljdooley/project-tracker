const { response } = require('express');
const router = require('express').Router();
const handler = require('../handlers/index');

router.get('/api', (req, res)=> {
    res.send('You started your project! Good job!')
});

//GET a list of all projects -> /projects
router.get('/projects', async (req, res)=> { 
  const allProjects = await handler.getAllProjects();
  res.json(allProjects);
});

//GET a specific project -> /projects/:id
router.get('/projects/:id', async (req, res)=> {
    const id = req.params.id;
    const projectById = await handler.projectById(id);
    res.json(projectById);
});

//POST (create) a project -> /projects
router.post('/projects', async (req, res) => {
    console.log(req.body);
    const newProject = await handler.createProject(req.body);
    res.json(newProject);
});

//Get supply list for all projects -> /supplies
router.get('/supplies', async (req, res)=> {
  const supplyList = await handler.getSupplies();
  //console.log(JSON.parse(supplyList));
  //console.log(Object.getOwnPropertyNames(supplyList.dataValues));
  //console.log(Object.keys(supplyList[0]));
  console.log(Object.getOwnPropertyNames(supplyList[0]))
  res.json(supplyList);
});



//PUT (update) a project: /projects/:id

//DELETE a project: /projects/:id
  
module.exports = router;