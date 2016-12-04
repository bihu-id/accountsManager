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
    

})