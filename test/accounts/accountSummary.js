var getRpcStr=require("./../../getRpcServe.js")
var Contract=require("../../contract.js")

var address=getRpcStr.get()

var transaction=require("./../../anduiWallet/utils/transation.js")
var Sleep=require("./../../sleep.js")
var web3=require("./../../getWeb3Instance.js")
var abis=require("./../abis.js")

var accountAbi=abis["Account"]


var Contract=require("../../contract.js")

var AccountCreator=new Contract ("AccountCreator","AccountCreatorData",10000)// arg0: contract name to get abi and function , arg1: to get contract address

AccountCreator.accountAmount().then(function (res) {
    console.log(res.toString())

    for(var i = 1; i <= res; i++) {
        AccountCreator.getAccountAddress([i]).then(function (res) {
            console.log('res: ' + res)
            var account = res[0];


            // var resCreateToken=transaction.transactionRaw(web3,accountAbi,account,"createToken",[tokenSymbol,10000000,2,initBalance,0,"测试BBB1",0x10000bbb,tokenmanager],accountOwnerPrivateKey,3000000)
            // var tokenAmounts=transaction.call(web3,tokeManagerAbi,tokenmanager,"getTokenAmounts",[])


            var summary = transaction.call(web3, accountAbi, account, "summary", [])
            console.log(summary)
            console.log('\n')

        })
    }

})


// var accountManager = address.AccountCreatorData
//
// var Account=new Contract ("Account","AccountLogic",6000)
//
//     var accountmanager=AccountCreator.at(accountManager)
//     accountmanager.accountAmount().then(function(res){
//         console.log("accountManager.accountAmount()",res.toString());
//         console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","                       CA               ","               _owner                   ","weight");
//         //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :
//
//         for(var i=1;i<=res;i++) {
//
//             accountmanager.getAccountAddress(i).then(function (res1) {
//                 var account = Account.at(res1);
//                 account.summary().then(function (res) {
//
//                     console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(10),res[7].toString(16),res[8].toString(16),res[9].toString(10));
//
//                 });
//
//             });
//         }
//     });




// contract("account summary ",function(accounts){
//     var address=getRpcStr.get()
//
//     var accountManager = address.AccountCreatorData
//
//     it("get account summary ", function(){
//         var accountmanager=AccountCreator.at(accountManager)
//         accountmanager.accountAmount().then(function(res){
//             console.log("accountManager.accountAmount()",res.toString());
//             console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","                       CA               ","               _owner                   ","weight");
//             //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :
//
//             for(var i=1;i<=res;i++) {
//
//                 accountmanager.getAccountAddress(i).then(function (res1) {
//                     var account = Account.at(res1);
//                     account.summary().then(function (res) {
//
//                         console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(10),res[7].toString(16),res[8].toString(16),res[9].toString(10));
//
//                     });
//
//                 });
//             }
//         });
//     })
// });