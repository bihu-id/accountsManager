contract('check function', function(accounts) {
    
    var xindeporxy="0x5cd7a42d42e72bed3ebd5f0c543685b028967544"
    var xindelogic="0x2286e5ef0fe359254bd45443507e23ff8e4ca8e6"
    var xindedata="0x39744ab62df7e4316fb1cbf8767e6d66c099e002"
    var accountManager="0x5ca1d14c46fda0dabe7dd265e4c7426f2ee7a7a3"
    var accountlogic="0x10dad07c1eeb410a2795a81d69e09fc417f2a015"
    var accountporxy="0xa821851fe3e9ec84e15764d77cf176ad98fc408c"



    var t_accounts=web3.eth.accounts;


   it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log(res)
        })
    });

    /*it ("set reset key ",function(){

        var xinde=Xinde.at(xindedata);
        //console.log(xinde);
        for(var i=0;i<14;i++)
            xinde.resetMe(i,i,{from:accounts[0],gas:1000000}).then(function(tx){
            //console.log(web3.eth.getTransactionReceipt(tx));
        })
    });*/

    /*it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log(res)
        })
      
    });*/
})