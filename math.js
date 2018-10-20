module.exports = Divide;

/*
function Divide(num1 , num2){
    return num1/num2;
}*/

function Divide(num1 , num2 , log){
    var result = num1/num2;
    log(result); //can be either console.log or logging into a file
    return result;
}