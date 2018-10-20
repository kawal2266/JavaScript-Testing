const chai = require('chai');
const should = require('chai').should();
const expect =  chai.expect;
const assert = chai.assert;
const Divide =  require('../math');
//creating a test suite

describe('Division Test', () => {
    it(' should return 5 when passed 10 and 2 '  , function(){
        let num1 = 10;
        let num2 = 2;

        let expectedResult = 5;
        let actualResult = Divide(num1,num2);
        // Should Assertion Style in Chai
        actualResult.should.equal(expectedResult);

        // Expect Assertion Style in Chai
        expect(actualResult).to.equal(expectedResult);

        // Assert Assertion Style in Chai
        assert.equal(actualResult , expectedResult , "Test failed : Incorrect Answer")

    });
    it('should not return 1 when passed 10 and 9 ' , () => {
        let num1 = 10;
        let num2 = 9;

        let notExpectedResult = 1;
        let actualResult = Divide(num1,num2);
        // Should Assertion Style in Chai
        actualResult.should.not.equal(notExpectedResult);
       
        // Expect Assertion Style in Chai
        expect(actualResult).to.not.equal(notExpectedResult);

        // Assert Assertion Style in Chai
        assert.notEqual(actualResult , notExpectedResult)

    });
})