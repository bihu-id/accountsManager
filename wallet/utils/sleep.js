function sleep(statTime) {
    this.__sleepAbsTime=statTime
    this.cycStart=false
};

sleep.prototype.go=function(fun,time){

    //console.log(fun)
    this.__sleepAbsTime+=time
    setTimeout(fun,this.__sleepAbsTime)
};
sleep.loop=function(cyc,fun){

    var self=this

    setTimeout(function(){
        if(!self.cycStart)
            self.cycStart=true
        fun()
        if(cyc>0)
            self.loop(cyc,fun)
        else
            console.log("cyc <0")
    },this.cycStart?cyc:1)
}
module.exports = sleep