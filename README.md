# JavaScript Testing

1. Write unit tests using   
   * [Mocha](https://mochajs.org/)
     >Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
   * [Chai](https://www.chaijs.com/) 
     >Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript   testing framework.
     >* Should
     >* Expect 
     >* Assert
   * [Sinon](https://sinonjs.org/)
     >Standalone test spies, stubs and mocks for JavaScript. 
     >If u made a API call to server u can't be 100% sure what the server is going to return 
Mocha is the testing framework and chai is the assertion library.
   
2. Programs following the TDD (Test Driven Development) patterns
   ![Test Driven Development Image](https://github.com/kawal2266/JavaScript-Testing/blob/master/Images/TDD.png)
3. Expand test suites with mocks, stubs and spies

### Set up

* Installation  
    \> npm install mocha --save-dev  
    \> npm install sinon  
    \> npm install chai  

This will it as dev dependency so that it will only be installed when we install dev dependencies.  We did this because we don't want to install it as real dependency when we're just running the project.
* Add 'npm run test' command to package.json  
By adding this we can use 'npm run test' command to run all of the tests in the project.  
Go to package.json file and add new key called "scripts" and in the value create an object with key-value pair of "test" and "mocha".  
```javascript
    "scripts" : {  
        "test" : "mocha"  
    }
```




