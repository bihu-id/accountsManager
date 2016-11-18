address=require("./address.js")
contract('check function', function(accounts) {

    /*var xindeporxy="0xd3d0ba368c5cdeba40302ac3576d02a67a9d73e5"
    var xindelogic="0xfc7a9bf56a73a47fc6b3bc4276c67b92269ba2cd"
    var xindedata="0xadad94ba7073b245cf5e6df985889af5cdd5bb36"
    var accountManager="0xb4ae67f0c948ce1b65e85583a8f71c7c3a73b152"
    var accountlogic="0x1579ae66a887ad8417103b457cd0446bbec8432e"
    var accountporxy="0xcd0bcaa76ec79ba7f27a2a1aef1271f009c996ed"*/

    var xindeporxy=address.xindeporxy
    var xindelogic=address.xindelogic
    var xindedata=address.xindedata
    var accountManager=address.accountManager
    var accountlogic=address.accountlogic
    var accountporxy=address.accountporxy


    var t_accounts=web3.eth.accounts;
    var amount;

    var waiting;
    
    it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log("keys")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
    });
    
    it ("set reset key ",function() {

        var xinde = Xinde.at(xindedata);
        /*var keys=[]
        for (var i=0;i<14;i++)
            keys[i]={
                key:i*0x100+1,
                no:i
            }
        return keys.forEach(function(key){
            //console.log(key.key.toString(16),key.no.toString(10))
            return xinde.resetMe(key.key, key.no, {from: accounts[0], gas: 2000000}).then(function (tx) {
                //console.log(web3.eth.getTransactionReceipt(tx));
            })
        });*/
        return xinde.resetMe(accounts[1], 0, {from: accounts[0], gas: 2000000}).then(function (tx) {
            //console.log(web3.eth.getTransactionReceipt(tx));
            console.log("reset key 0 :",accounts[1]);
        })
    })
    it ("set reset key ",function() {

        var xinde = Xinde.at(xindedata);

        return xinde.resetMe(accounts[2], 2, {from: accounts[0], gas: 2000000}).then(function (tx) {
            console.log("reset key 2 :",accounts[2]);
        })
    })

    it("get resetMe operation ", function(){

        var xinde=Xinde.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log( "total operation :",res[0].toString(10),"waiting comfirm operation :",res[1].toString(10))
            amount=res[0];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = Xinde.at(xindedata);

        return xinde.getWaitOperationNos(1,5 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log( "operation detail:")
                    console.log("No","role","           new address               ","status")
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })

    /*it ("get reset me operation detail ",function() {
        var xinde = Xinde.at(xindedata);
        waiting.forEach(function(w){
            return xinde.getOperation_resetMe(w).then(function (res) {
                console.log( "operation detail:")
                console.log("No:",res[0].toString(10),"set which key :key"+res[1].toString(10),"new address:",res[2].toString(16) ,"status:" ,res[3].toString(10))

            })
        })

    })*/

    it ("comfirm resetMe",function() {
        var xinde = Xinde.at(xindedata);

        return xinde.getOperation_resetMe(2).then(function (res) {
            console.log("try comfirm next operation :")
            console.log("No:",res[0].toString(10),"set which key :key"+res[1].toString(10),"new address:",res[2].toString(16) ,"status:" ,res[3].toString(10))
            return xinde.resetMeC(res[2],res[1],res[0],{from:accounts[0]}).then(function (tx) {

            })

        })

    })

    it("get resetMe operation ", function(){

        var xinde=Xinde.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log("wait resetMe amounts :",res.toString(10))
            amount=res[1];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = Xinde.at(xindedata);

        return xinde.getWaitOperationNos(1,5 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log( "operation detail:")
                    console.log("No","role","           new address               ","status")
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })

    it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log("keys")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
    });
})