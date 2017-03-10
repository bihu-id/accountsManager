var Promise = require('bluebird')

function div(a,b){

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


console.log("start")
div (10,0).then(function(res,err){
    if(err)
        console.log(err)
    else
        console.log(res)
})