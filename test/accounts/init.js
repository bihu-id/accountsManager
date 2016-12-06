address=require("./../address.js")
funs=require("./../funs.js")
contract('init accountManager', function(accounts) {

    var accountManagerporxy=address.accountManagerporxy;
    var accountManager=address.accountManager;
    var xindi=address.xindedata;
    var TxManagerData=address.TxManagerData;
    var accountPorxy=address.accountPorxy


    it("init AccountManager data", function () {

        var accountmanager=AccountManager.at(accountManager);
        return accountmanager.init(accounts[20],xindi,TxManagerData,accountPorxy,{from:accounts[0]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));

        })
    })

    it("get option", function () {

        var accountmanager=AccountManager.at(accountManager);
        return accountmanager.summary().then(function(res){
            console.log(res);

        })
    })
})