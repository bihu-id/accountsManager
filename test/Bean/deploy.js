var Contract=require("../../contract.js")

/*var Bean=new Contract("Bean","BeanLogic",6000)
console.log(Bean.addressKey)
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');
Bean.deploy(privateKey).then(function(address,err){
    console.log(address)
    var TokenManager=new Contract("TokenManager","TokenManagerData");
    TokenManager.getKeys().then(function(res,err){console.log(res[0][0])})
})*/

var TokenManager=new Contract("TokenManager","TokenManagerData");
TokenManager.getKeys().then(function(res,err){console.log(res[0])})