module.exports = IsAlive;

/*
function IsAlive(ping){
    let pingOneSucess = ping()
    let pingTwoSucess = ping()
    let pingThreeSucess = ping()

    if(pingOneSucess && pingTwoSucess && pingThreeSucess)
        return true;
    return false;
}*/

//for error stub in sinon

function IsAlive(ping){
    try{
        let pingOneSucess = ping()
        let pingTwoSucess = ping()
        let pingThreeSucess = ping()
    }catch(e){
        return new Error('ping threw exception')
    }

    if(pingOneSucess && pingTwoSucess && pingThreeSucess)
        return true;
    return false;
}