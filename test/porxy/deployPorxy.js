contract('deployproxy', function(accounts) {

    var xindeporxy;
    it("deploy xinde porxy", function(){
        return LogicPorxy.new().then(function(instance){
            instance.setfun(0x100,0x200,0x30).then(function(tx){
                instance.get(0x100)
            })
            console.log("xindeporxy:",xindeporxy)
        });
    });

})