const expect = require('chai').expect;
const handler = require('../handlers/index');
const db = require('../db/index');
const { Project } = db.models;

beforeEach(async function() {
    console.log('starting database');
    await db.sequelize.sync({ force: true });
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
});

describe('get all projects', function(){
    it('should return 3 projects', async function () {
        allProjects = await handler.getAllProjects()
        expect(allProjects).to.be.lengthOf(3);
    });
});


describe('get specific ID', function(){
    it('should return specific project matching ID provided', async function() {
        testProject = await handler.projectById(2);
        expect(testProject.id).to.be.equal(2);
        expect(testProject.name).to.be.equal("Embroidery");
        expect(testProject.supplies).to.be.equal("Embroidery Floss");
    })
});


describe('create', function(){
    it('should create a new project in the database', async function(){
        let newProject = {
            name: "Jam",
            supplies: "Fruit"
        }
        newProject = await handler.createProject(newProject);
        expect(newProject.id).to.be.equal(4);
        expect(newProject.name).to.be.equal("Jam");
        expect(newProject.supplies).to.be.equal("Fruit");
    })
    
});

describe('get a list of all supplies', function(){});