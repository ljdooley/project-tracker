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

describe('code and test are linked correctly', function() {

    it('should return 2', function(){
       expect(handler.testMocha()).to.equal(2);     
    });
});

describe('get all projects', function(){});


describe('get specific ID', function(){
    it('should return specific project matching ID provided', async function() {
        testProject = await handler.projectById(2);
        expect(testProject.id).to.be.equal(2);
        expect(testProject.name).to.be.equal("Embroidery");
        expect(testProject.supplies).to.be.equal("Embroidery Floss");
    })
});


describe('create', function(){});

describe('get a list of all supplies', function(){});