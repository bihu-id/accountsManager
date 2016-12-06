contract('deploy xindi data', function(accounts) {

    var accountManagerporxy;
    var accountManager;
    var accountPorxy;
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
    it("account logic porxy", function(){
        return LogicPorxy.new().then(function(instance){
            accountPorxy=instance.address;
        });
    });

    it ("console",function(){
        console.log('accountManagerporxy:'+'"'+accountManagerporxy+'",')
        console.log('accountManager:'+'"'+accountManager+'",')
        console.log('accountPorxy:'+'"'+accountPorxy+'",')
    });


})