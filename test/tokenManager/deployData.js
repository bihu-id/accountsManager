var _deploy=require("./../../deploy.js")

contract('deploy TokenManager data', function(accounts) {

    it("set TokenManager porxy and data", function(){

        return _deploy.deployData("TokenManager",LogicProxy,Data)

    });
})


/*    var tokonManagerporxy;
    var tokonManagerdata;
    var tokenporxy;

    it("set token manager porxy", function(){
        return LogicProxy.new().then(function(instance){
            tokonManagerporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(tokonManagerporxy).then(function(instance){
                tokonManagerdata=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it("set token porxy", function(){
        return LogicProxy.new().then(function(instance){
            tokenporxy=instance.address;
            //console.log(xindeporxy)
        });
    });

    it ("console and set",function(){
        console.log('tokonManagerporxy:'+'"'+tokonManagerporxy+'",')
        console.log('tokonManagerdata:'+'"'+tokonManagerdata+'",')

        console.log('tokenporxy:'+'"'+tokenporxy+'",')


        address["tokonManagerporxy"]=tokonManagerporxy;
        address["tokonManagerdata"]=tokonManagerdata;

        /*        var raw=JSON.stringify(address,null,4).replace(/\"/g, "")
         var str="var Address=\n"+raw+"\nmodule.exports=Address;";
         fs.writeFile("./test/address.js",str,function (err) {
         if (err) throw err ;
         console.log("File Saved !"); //文件被保存
         }) ;
         
    });
*/
