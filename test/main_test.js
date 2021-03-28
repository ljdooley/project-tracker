const expect = require('chai').expect;
const handler = require('../handlers/index');

describe('code and test are linked correctly', function() {

    it('should return 2', function(){
       expect(handler.testMocha()).to.equal(2);     
    });
})

describe('get all projects', function(){});


describe('get specific ID', function(){});


describe('create', function(){});

describe('get a list of all supplies', function(){});