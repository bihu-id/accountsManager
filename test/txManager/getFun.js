Funs=require("./../funs.js")
address=require("./../address.js")

contract('get function', function(accounts) {

    var TxManagerporxy=address.TxManagerporxy;
    var TxManagerData=address.TxManagerData;
    var funs=Funs.TxManager

    it ("get function",function(){
        var porxy=LogicPorxy.at(TxManagerporxy)
        return funs.forEach(function(fun){
            return porxy.get(fun.sig).then(function(res){
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,res[2].toString(10),fun.name)
            })
        })
    });

})