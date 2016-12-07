var fs=require('fs');
var path = require('path');
var address=require('./../address.js')

contract('deploy Token manager data', function(accounts) {

    var tokonManagerporxy;
    var tokonManagerdata;
    var tokenporxy;
    var token;
    it("set token manager porxy", function(){
        return LogicPorxy.new().then(function(instance){
            tokonManagerporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(tokonManagerporxy).then(function(instance){
                tokonManagerdata=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it("set token porxy", function(){
        return LogicPorxy.new().then(function(instance){
            tokenporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(tokonporxy).then(function(instance){
                tokendata=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it ("console and set",function(){
        console.log('tokonManagerporxy:'+'"'+tokonManagerporxy+'",')
        console.log('tokonManagerdata:'+'"'+tokonManagerdata+'",')

        console.log('tokenporxy:'+'"'+tokenporxy+'",')
        console.log('tokendata:'+'"'+token+'",')

        address["tokonManagerporxy"]=tokonManagerporxy;
        address["tokonManagerdata"]=tokonManagerdata;

        /*        var raw=JSON.stringify(address,null,4).replace(/\"/g, "")
         var str="var Address=\n"+raw+"\nmodule.exports=Address;";
         fs.writeFile("./test/address.js",str,function (err) {
         if (err) throw err ;
         console.log("File Saved !"); //文件被保存
         }) ;
         */
    });

})