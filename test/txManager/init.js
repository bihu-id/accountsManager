// var getRpcStr=require("./../../getRpcServe.js")
// contract('init', function(accounts) {
//
//     var address=getRpcStr.get()
//     var TxManagerProxy=address.TxManagerProxy;
//     var TxManagerData=address.TxManagerData;
//
//     it ("init",function(){
//         var instance=TxManager.at(TxManagerData)
//         return instance.init(accounts[0],accounts[0],accounts[0],accounts[0],{from:accounts[0]}).then(function(tx){
//             console.log(web3.eth.getTransactionReceipt(tx));
//         })
//     });
//
// })



var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var TxManager=new Contract ("TxManager","TxManagerData",10000, 500000)// arg0: contract name to get abi and function , arg1: to get contract address
console.log(TxManager.address)

TxManager.init(["0xF601B7Ee67E3169eC09Cb5f77b6Fc5Bea7177C18", "0xF601B7Ee67E3169eC09Cb5f77b6Fc5Bea7177C18",
"0xF601B7Ee67E3169eC09Cb5f77b6Fc5Bea7177C18", "0xF601B7Ee67E3169eC09Cb5f77b6Fc5Bea7177C18"], privateKey, 500000);