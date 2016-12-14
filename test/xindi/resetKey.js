var getRpcStr=require("./../../getRpcServe.js")

contract('reset xindi key', function(accounts) {
    
    var address=getRpcStr.get()
    var xindedata=address.XindiData

    var keys=[];
    it("xinde summary", function(){

        var xindi=Xindi.at(xindedata);
        return xindi.getKeys.call().then(function(res){
            console.log("keys:")
            keys=res;
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })

    });
    
    it ("set reset key ",function() {

        var xinde = Xindi.at(xindedata);

        for(var i=1;i<20;i++)
        if(parseInt(keys[i])==0)
            xinde.resetMe(i,accounts[i], {from: accounts[0], gas: 2000000}).then(function (tx) {
                console.log("reset key %d:%s",i,accounts[i]);
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
            console.log( "total operation :",res[0].toString(10),"waiting Confirm operation :",res[1].toString(10))
            amount=res[0];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,4 ,2).then(function (res) {
            console.log( "wait Confirm operations :",res.toString(10))
            console.log( "operation detail:")
            console.log("No","role","           new address               ","status")
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })

    it ("Confirm resetMe no 1",function() {
        var xinde = xindi.at(xindedata);
        return xinde.getOperation_resetMe(1).then(function (res) {
            console.log("try Confirm next operation :")
            console.log("No", "role", "           new address               ", "status")
            console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))
            return xinde.resetMeC(res[2], res[1], res[0], {from: accounts[0]}).then(function (tx) {
            })
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,5 ,2).then(function (res) {
            console.log( "wait Confirm operations :",res.toString(10))
            console.log( "operation detail:")
            console.log("No","role","           new address               ","status")
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })


    it ("Confirm resetMe",function() {
        var xinde = xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,8 ,2).then(function (res) {
            console.log( "wait Confirm operations :",res.toString(10))
            res.forEach(function(r){
                return xinde.getOperation_resetMe(r).then(function (res) {
                    //console.log( "operation detail:")
                    //console.log("No","role","           new address               ","status")
                    //console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))
                    console.log("try Confirm next operation :")

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
            console.log( "wait Confirm operations :",res.toString(10))
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

//then(function (tx) {console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16))})
//.then(function (res) {console.log(res.toString())})