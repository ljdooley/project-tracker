const { response } = require('express');

const router = require('express').Router();

router.get('/api', (req, res)=> {
    res.send('You started your project! Good job!')
});

//GET a list of all projects: /projects
router.get('/projects', (req, res)=> { 
  res.json(data);
});

//GET a specific project: /projects/:id
router.get('/projects/:id', (req, res)=> {
    const project = data.projects.find(project => project.id == req.params.id);
    res.json(project);
});

//Get supply list for all projects
router.get('/supplies', (req, res)=> {
  let supplylist = [];
 
  for(x in data.projects){
    supplylist.push(data.projects[x].supplies);
  }
  res.send(supplylist);
});


//POST (create) a project: /projects
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