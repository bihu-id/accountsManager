address=require("./address.js")
contract('reset xindi key', function(accounts) {

    /*var xindeporxy="0xd3d0ba368c5cdeba40302ac3576d02a67a9d73e5"
    var xindelogic="0xfc7a9bf56a73a47fc6b3bc4276c67b92269ba2cd"
    var xindedata="0xadad94ba7073b245cf5e6df985889af5cdd5bb36"
    var accountManager="0xb4ae67f0c948ce1b65e85583a8f71c7c3a73b152"
    var accountlogic="0x1579ae66a887ad8417103b457cd0446bbec8432e"
    var accountporxy="0xcd0bcaa76ec79ba7f27a2a1aef1271f009c996ed"*/

    var xindeporxy=address.xindeporxy
    var xindedata=address.xindedata
    
    var waiting;
    
    /*it("xinde summary", function(){

        var xinde=Xindi.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log("keys")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
    });*/
    
    it ("set reset key ",function() {

        console.log("balance :",web3.fromWei(web3.eth.getBalance(accounts[0]),'ether').toString())

        var xinde = Xindi.at(xindedata);
        /*var Err = xinde.Err({fromBlock: "latest"});
        Err.watch(function(error, result) {
            // This will catch all Transfer events, regardless of how they originated.
            if (error == null) {
                console.log(result.args);
            }
        })*/
        //var self=this

        for(var i=0;i<14;i++)
            console.log("reset key %d:%s",i,accounts[i]);
            xinde.resetMe(accounts[i], i, {from: accounts[0], gas: 2000000}).then(function (tx) {

                //console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16));
                console.log(tx);

            })
    })
    /*it ("set reset key ",function() {

        var xinde = xindi.at(xindedata);

        return xinde.resetMe(accounts[2], 1, {from: accounts[0], gas: 2000000}).then(function (tx) {
            console.log("reset key 1 :",accounts[2]);
        })
    })
    it ("set reset key ",function() {

        var xinde = xindi.at(xindedata);

        return xinde.resetMe(accounts[3], 2, {from: accounts[0], gas: 2000000}).then(function (tx) {
            console.log("reset key 2 :",accounts[3]);
        })
    })
    it ("set reset key ",function() {

        var xinde = xindi.at(xindedata);

        return xinde.resetMe(accounts[4], 3, {from: accounts[0], gas: 2000000}).then(function (tx) {
            console.log("reset key 3 :",accounts[4]);
        })
    })*/

    /*it("get resetMe operation amounts", function(){

        var xinde=xindi.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log( "total operation :",res[0].toString(10),"waiting comfirm operation :",res[1].toString(10))
            amount=res[0];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,4 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            console.log( "operation detail:")
            console.log("No","role","           new address               ","status")
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })

    it ("comfirm resetMe no 1",function() {
        var xinde = xindi.at(xindedata);
        return xinde.getOperation_resetMe(1).then(function (res) {
            console.log("try comfirm next operation :")
            console.log("No", "role", "           new address               ", "status")
            console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))
            return xinde.resetMeC(res[2], res[1], res[0], {from: accounts[0]}).then(function (tx) {
            })
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,5 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            console.log( "operation detail:")
            console.log("No","role","           new address               ","status")
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })


    it ("comfirm resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,8 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            res.forEach(function(r){
                return xinde.getOperation_resetMe(r).then(function (res) {
                    //console.log( "operation detail:")
                    //console.log("No","role","           new address               ","status")
                    //console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))
                    console.log("try comfirm next operation :")

                    if(res[3]==0) {
                        console.log("No", "role", "           new address               ", "status")
                        console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))
                        return xinde.resetMeC(res[2], res[1], res[0], {from: accounts[0]}).then(function (tx) {

                        })
                    }


                })
            })
        })
    })

    it("get resetMe operation ", function(){

        var xinde=xindi.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log("wait resetMe amounts :",res.toString(10))
            amount=res[1];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = xindi.at(xindedata);

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

        var xinde=xindi.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log("keys")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
    });*/
})