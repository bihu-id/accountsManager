function sleep(statTime) {
    this.__sleepAbsTime=statTime
    this.__sleepStep=0
};

sleep.prototype.go=function(fun,time){

    //console.log(fun)
    this.__sleepAbsTime+=time
    setTimeout(fun,this.__sleepAbsTime)
};
module.exports = sleep