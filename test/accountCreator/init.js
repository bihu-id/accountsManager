// var getRpcStr=require("./../../getRpcServe.js")
//
// contract('init accountManager', function(accounts) {
//
//     var address=getRpcStr.get()
//
//     var AccountProxy=address.AccountProxy
//     var AccountCreatorData=address.AccountCreatorData
//     var XindiData=address.XindiData
//     var TxManagerData=address.TxManagerData
//
//     //function init(uint _core,uint _resetKey,uint _resetKeyC, uint _owner,uint _TxCore,uint _accountProxy)
//     it("init AccountCreator data", function () {
//
//         var instance=AccountCreator.at(AccountCreatorData);
//         console.log("init")
//         console.log("owner:",accounts[20]);
//         console.log("account owner:",XindiData);
//         console.log("Tx core:",TxManagerData);
//         console.log("account porxy:",AccountProxy);
//         return instance.init(XindiData,accounts[0],accounts[0],"0xa8308c1d843b87af9ace2980fcccc4a1349e5789",TxManagerData,AccountProxy,{from:accounts[0]}).then(function(tx){
//             console.log(web3.eth.getTransactionReceipt(tx));
//
//         })
//     })
//
//     it("get option", function () {
//
//         var instance=AccountCreator.at(AccountCreatorData);
//         return instance.getOptions.call().then(function(res){
//
//             console.log("core:",res[0]);
//             console.log("owner::",res[1]);
//             console.log("account owner::",res[2]);
//             console.log("Tx core::",res[3]);
//             console.log("account porxy :",res[4]);
//
//         })
//     })
// })



var getRpcStr=require("./../../getRpcServe.js")

var address=getRpcStr.get()

var AccountProxy=address.AccountProxy
var AccountCreatorData=address.AccountCreatorData
var XindiData=address.XindiData
var TxManagerData=address.TxManagerData
console.log(typeof(XindiData))

var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var AccountCreator=new Contract ("AccountCreator","AccountCreatorData",10000)// arg0: contract name to get abi and function , arg1: to get contract address
console.log(AccountCreator.address)


var owner_account = "0xF601B7Ee67E3169eC09Cb5f77b6Fc5Bea7177C18"
// var owner_account = 0xf601b7ee67e317476cc31f8dcdac655f00000000
AccountCreator.init([XindiData, owner_account, owner_account, owner_account, TxManagerData, AccountProxy], privateKey,2000000);

