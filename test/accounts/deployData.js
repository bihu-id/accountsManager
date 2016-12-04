contract('deploy xindi data', function(accounts) {

    var accountporxy;
    var accountManager;
    it("set porxy", function(){
        return LogicPorxy.new().then(function(instance){
            accountporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(accountporxy).then(function(instance){
                accountManager=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it ("console",function(){
        console.log('accountporxy:'+'"'+accountporxy+'",')
        console.log('accountManager:'+'"'+accountManager+'",')
    });


})