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

            console.log("core:",res[0]);
            console.log("owner::",res[1]);
            console.log("account owner::",res[2]);
            assert(res[2]==xindi,"xindi contract error")
            console.log("Tx core::",res[3]);
            console.log("account porxy :",res[4]);

            assert(res[4]==accountPorxy,"xindi contract error")

        })
    })
})