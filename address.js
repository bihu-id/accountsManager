var address=require("./test/address.js")
var rpc=require("./getRpcServe.js")
module.exports ={
    get:function(){
        return address[rpc.getstr()]
    }
}