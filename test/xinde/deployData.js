var fs=require('fs');
var path = require('path');
var address=require('./../address.js')

contract('deploy xindi data', function(accounts) {

    var xindeporxy;
    var xindedata;
    it("set porxy", function(){
        return LogicPorxy.new().then(function(instance){
            xindeporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(xindeporxy).then(function(instance){
                xindedata=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it ("console and set",function(){
        console.log('xindeporxy:'+'"'+xindeporxy+'",')
        console.log('xindedata:'+'"'+xindedata+'",')
        address["xindeporxy"]=xindeporxy;
        address["xindedata"]=xindedata;

/*        var raw=JSON.stringify(address,null,4).replace(/\"/g, "")
        var str="var Address=\n"+raw+"\nmodule.exports=Address;";
        fs.writeFile("./test/address.js",str,function (err) {
            if (err) throw err ;
            console.log("File Saved !"); //文件被保存
        }) ;
        */
    });

})