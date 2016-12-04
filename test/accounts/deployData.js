contract('deploy xindi data', function(accounts) {

    var accountManagerporxy;
    var accountManager;
    it("set porxy", function(){
        return LogicPorxy.new().then(function(instance){
            accountManagerporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(accountManagerporxy).then(function(instance){
                accountManager=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it ("console",function(){
        console.log('accountManagerporxy:'+'"'+accountManagerporxy+'",')
        console.log('accountManager:'+'"'+accountManager+'",')
    });


})