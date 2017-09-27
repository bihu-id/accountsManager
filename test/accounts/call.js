var Contract=require("../../contract.js")
var privateKey=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex');
var tokenManager =new Contract("TokenManager","TokenManagerData")

var accountAddress="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"
tokenManager.addAccountCall(accountAddress,"createToken")

tokenManager.at()
//console.log(tokenManager)

tokenManager.call_createToken(["DDD1DD1d",10000000,2,500000,0,"测试BBB1call2",0x10000bbb,tokenManager.address],privateKey).then(function(receipt,err){

    console.log(receipt);
    //console.log(getTransactionReceipt(tx));
    //console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16));
});

