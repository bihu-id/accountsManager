contract('check function', function(accounts) {
    var xindeporxy="0xde1a081906618a928b19930a367b363fc9118e1f"
    var xindelogic="0xb4a31fe45dd67849fce3d202b940d9850227f95e"
    var xindedata="0x6cd575e9f42ec0f339f3cd9efb359a69f1862d7a"
    var accountManager="0x7a0164e5edc20573eb795f7bbebae80b5fa588d9"
    var accountlogic="0x714780f8502dc0157861cbfdcabdb151130c0583"
    var accountporxy="0xc07bc890fa11334174eb169470674cf2c820f2a2"


    var t_accounts=web3.eth.accounts;

    it ("get accounts",function(){
        var xinde=Xinde.at(xindedata);
        console.log(t_accounts)
        /*xinde.contract._eth.Eth.getAccounts().then(function(_accounts){
            console.log(_accounts)
        })*/
    })
   /*it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log(res)
        })
    });*/

    it ("set reset key ",function(){

        var xinde=Xinde.at(xindedata);
        //console.log(xinde);
        return xinde.test(t_accounts[1],0,{from:accounts[0],gas:1000000}).then(function(tx){
            console.log(tx)
        })
    });

    it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log(res)
        })
      
    });
})