var config=require("./truffle.js")
var fs=require('fs');
var path = require('path');
var address=require("./test/address.js")

module.exports ={

    get:function(){
        var id=this.getstr()
        if(address[id]!=undefined)
            return address[id]
        else
            return {}
    },
    getstr:function(){

        return "id"+config.chainId

    },
    hex:function(str){

        if(str.substring(0,2)=="0x")
            return str
        else
            return "0x"+str.toString(16)
    },
    save:function(rpcAddress){
        address[this.getstr()]=rpcAddress

        /*Object.keys(address).forEach(function(rpc){
            var rpcAddresses=address[rpc]
            Object.keys(rpcAddresses).forEach(function(k){
                console.log(rpcAddresses[k].toString(16))
                //rpcAddresses[k]="0x"+rpcAddresses[k].toString(16)
            })
        })*/

        var raw = JSON.stringify(address, null, 4).replace(/\\\"/g, "")
        var str = "var Address=\n" + raw + "\nmodule.exports=Address;";
        fs.writeFile("./test/address.js", str, function (err) {
            if (err) throw err;
            console.log("File Saved !"); //文件被保存
        })

    }
};
