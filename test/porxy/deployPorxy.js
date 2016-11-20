contract('deployproxy', function(accounts) {

    var xindeporxy;
    var accountporxy;
    it("deploy xinde porxy", function(){
        return LogicPorxy.new().then(function(instance){
            xindeporxy=instance.address;
            console.log("xindeporxy:",xindeporxy)
        });
    });
    it("deploy account porxy", function(){
        return LogicPorxy.new().then(function(instance){
            accountporxy=instance.address;
            console.log("accountporxy:",accountporxy)
        });
    });

    it("deploy account manager", function(){
        return AccountManager.new().then(function(instance){
            accountporxy=instance.address;
            console.log("accountporxy:",accountporxy)
        });
    });
    it ("console",function(){
        console.log('xindeporxy:'+'"'+xindeporxy+'",')
        console.log('xindelogic:'+'"'+xindelogic+'",')
        console.log('xindedata:'+'"'+xindedata+'",')
        
        console.log('accountManager:'+'"'+accountManager+'",')

        console.log('accountlogic:'+'"'+accountlogic+'",')
        console.log('accountporxy:'+'"'+accountporxy+'"')
    });

})