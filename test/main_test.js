const expect = require('chai').expect;
const handler = require('../handlers/index');

describe('test code and test are linked correctly', function() {

    it('should return 2', function(){
       expect(handler.testMocha()).to.equal(2);     
    });
})