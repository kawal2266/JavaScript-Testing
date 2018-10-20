const chai = require('chai');
const should = require('chai').should();
const expect =  chai.expect;
const assert = chai.assert;
const Divide =  require('../math');
const sinon = require('sinon');

//const IsAlive = require('../functions');
//creating a test suite
/*
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
*/

//SINON Spies
/*
describe('Spy tests',()=> {
    it('should log the result of Divide',()=>{
        let num1 = 10;
        let num2 = 2;

        let logSpy = sinon.spy();
        Divide(num1,num2,logSpy);

        logSpy.called.should.be.true; //checks if the log is called or not
    }) 
    it('should log the correct result of Divide',()=>{
        let num1 = 10;
        let num2 = 2;

        let logSpy = sinon.spy();
        Divide(num1,num2,logSpy);

        logSpy.calledWith(5).should.be.true; //checks that correct result was logged
    }) 
})
*/

// SINON Stubs

//the main difference b/w spies and stubs is that u can force them to behave in a particular way
//for ex u can make them return a specific value based on some argumnets or on
//the time that the function been called

/*
describe('isAlive Tests',() =>{

    it('should return true when ping callback returns true',()=>{
        
        var pinger = sinon.stub();
        pinger.returns(true); //setting the behaviour
        //this shows that 'pinger' returns true whenever its called

        var websiteIsAlive = IsAlive(pinger);
        websiteIsAlive.should.be.true;

    })
    it('should return true when ping returns true three times in a row',()=>{
        
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;

    })
    it('should return an error when ping throws an error', ()=>{
        
        var pinger = sinon.stub();
        
        pinger.throws(()=>{ return new Error();})

        var error = IsAlive(pinger);

        error.message.should.equal('ping threw exception');

    })
})
*/
//SINON Mocks

//The advantage of using mock is that you can have pre-programmed expectations as well.
//It will fail ur test if it isn't used as u expect it ot be.
//This makes it really useful for mocking out a particular function within an object.

var API = {
    IsAlive : function(){
        //this.KillServer();
        try{
            var pingOneSucess = this.Ping()
            var pingTwoSucess = this.Ping()
            var pingThreeSucess = this.Ping()
        }catch(e){
            return new Error('ping threw exception')
        }
    
        if(pingOneSucess && pingTwoSucess && pingThreeSucess)
            return true;
        return false;
    },
    Ping : function(){
        return true;
    },
    KillServer : function(){

    }
}
var APItwo = {
    IsAlive : function(address){
        try{
            var pingOneSucess = this.Ping(address)
            var pingTwoSucess = this.Ping(address)
            var pingThreeSucess = this.Ping(address)
        }catch(e){
            return new Error('ping threw exception')
        }
    
        if(pingOneSucess && pingTwoSucess && pingThreeSucess)
            return true;
        return false;
    },
    Ping : function(address){
        return true;
    }
}
describe('IsAlive Tests (Mocks,Sinon)',() => {
    it('should call ping 3 times',() => {
        
        var mockApi = sinon.mock(API);  //we r mocking the entire API object
        
        //mockApi.expects('Ping').atMost(3).atLeast(1); //to be more specific

        mockApi.expects('Ping').exactly(3);
        // inside expects() u pass name of the function of mock object that u would like to set expectations for.
        //exactly checks the accurate no. of times the 'Ping' method of the mock API object is called

        API.IsAlive();

        mockApi.verify();
        //checks if all our expectations have met

        mockApi.restore();
        //this will set Ping function to the real function rather than the mocked function


    });
    it('should not call KillServer while it IsAlive',() => {
        
        var mockApi = sinon.mock(API);
        mockApi.expects('KillServer').never();
        API.IsAlive();
        mockApi.verify();
     });

     it('should ping the server it is passed',() => {
        
        var address = '1.1.1.1';
        var mockApi = sinon.mock(APItwo);
        mockApi.expects('Ping').withExactArgs(address);
        APItwo.IsAlive(address);
        mockApi.restore();
    });
})