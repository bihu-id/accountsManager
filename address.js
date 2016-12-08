var address=require("./test/address1.js")
var rpc=require("./getRpcServe.js")
module.exports ={
    get:function(){
        return address[rpc.getstr()]
    }
}