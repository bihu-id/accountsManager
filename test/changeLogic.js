contract('change logic address', function(accounts) {
    var add=0x4f2be91f;
    var set=0x1ab06ee5;
    var addkey=0x1712fc32;
    var logicPorxyA="0xa6f68cee34a1b6a3625b3e25b299ed8ffccd6ec2";
    var dataA="0x179baa7db0b83c83963cf1f5df89b06d9ce218f4";
    //var logicA="0x17102f7efdfb08a100a4eded6ebbaf794ba2c6a9";
    
    //var dataA="0xbb661e11772f719263058c030ac47678a1e2f463"
    it("set logic address", function() {

        //var logicPorxy=LogicPorxy.deployed();
        //console.log(logicPorxy.address)
        var logicPorxy=LogicPorxy.at(logicPorxyA);
        var logic = Logic.deployed();
        console.log("logic:",logic.address)
        //console.log("address:",meta.address);

        return logicPorxy.setAddress(logic.address,{from:accounts[0]}).then(function(tx){
            console.log(tx);
        });

    });
    it("set function addkey ",function(){
        //var logicPorxy=LogicPorxy.deployed();
        var logicPorxy=LogicPorxy.at(logicPorxyA);

        return logicPorxy.setfun(addkey,32,100000,{from:accounts[0]}).then(function(tx){
            console.log(tx);
        });

    })

    it('set c',function() {
        //var dataA=Data.deployed(logicPorxyA).address;
        var data=Logic.at(dataA);
        console.log(data.address);
        return data.addkey(314,{from:accounts[0],gas:3000000}).then(function(tx){
            console.log(tx);
        });
    });
    
    it ("add ",function(){
        //var dataA=Data.deployed(logicPorxyA).address;
        var data=Logic.at(dataA);
        return data.add.call().then(function(res){
            console.log("add:",res.toString());
        });
    })
})