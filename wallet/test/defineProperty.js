var Promise = require('bluebird')


var div =function(a,b){

    var p= new Promise(function(accept, reject) {
        if(b!=0)
            setTimeout(function(){
                accept(a/b)
            },1000)
        else
            setTimeout(function(){
                reject("b=0")
            },1000)
    });
    return p
}

var Test=function() {
    this.name="test"
}

Test.prototype.addFunction=function(funName,fun){

    Object.defineProperty(this, funName, {
        value: fun,
        configurable: false,
        writable: false,
        enumerable: true
    });
}

var test = new Test
test.addFunction("div",div)
console.log(test)
console.log("start")
test.div(10,1).then(function(res,err){
    if(err)
        console.log(err)
    else
        console.log(res)
})
