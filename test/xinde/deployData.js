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

    it ("console",function(){
        console.log('xindeporxy:'+'"'+xindeporxy+'",')
        console.log('xindedata:'+'"'+xindedata+'",')
    });

    it("xinde init", function(){

        var xinde=Xindi.at(xindedata);
        return xinde.init({from:accounts[0],gas:10000000}).then(function(tx){
            //console.log(xinde.getTransactionReceipt(tx));
        })
    });

})