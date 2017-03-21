
var Contract=require("../../contract.js")
var dividendToken=new Contract("DividendToken","DividendTokenData")
var tokenissuer="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"
var privateKey_account=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex');
dividendToken.addAccountCall(tokenissuer,"setDividend")
dividendToken.at()
console.log(dividendToken.address)
var douAddress_=Contract.getAddress("BeanData")
console.log("dou:",douAddress_)
var start=Date.parse(new Date())/1000
//"0xea8d6135722727ff5e5ff7d7116cd765b6b1e826": "0x8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')
var executor_address="0xea8d6135722727ff5e5ff7d7116cd765b6b1e826"
dividendToken.call_setDividend([douAddress_,start,30,200000000,executor_address],privateKey_account).then(function(receipt,err){

    console.log(receipt)
})