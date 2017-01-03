var getRpcStr=require("./../../getRpcServe.js")

contract('init accountManager', function(accounts) {

    var address=getRpcStr.get()

    var AccountProxy=address.AccountProxy
    var AccountManagerData=address.AccountManagerData
    var XindiData=address.XindiData
    var TxManagerData=address.TxManagerData

    it("init AccountCreator data", function () {

        var instance=AccountCreator.at(AccountManagerData);
        console.log("init")
        console.log("owner:",accounts[20]);
        console.log("account owner:",XindiData);
        console.log("Tx core:",TxManagerData);
        console.log("account porxy:",AccountProxy);
        return instance.init(XindiData,accounts[20],accounts[21],accounts[22],TxManagerData,AccountProxy,{from:accounts[0]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));

        })
    })

    it("get option", function () {

        var instance=AccountCreator.at(AccountManagerData);
        return instance.getOptions.call().then(function(res){
            
            console.log("core:",res[0]);
            console.log("owner::",res[1]);
            console.log("account owner::",res[2]);
            console.log("Tx core::",res[3]);
            console.log("account porxy :",res[4]);

        })
    })
})