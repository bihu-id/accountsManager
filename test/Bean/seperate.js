//seperate a standard token as a bean.
//1.chage the logicProxy to BeanLogicProxy , call TokenManager contract use subkey
//2.set the related token of this bean token
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var beanLogicProxy=Contract.getAddress("BeanProxy")
var toBeanTokenAddress="0x329b9e0f5ffbf10989c35cb50db6c33e9cf8c29c"
var relatedToken="0x87b80a7b0cf1523f33e3c7b08e0bc51ffef0f885"
tokenManager.changeTokenProxy([toBeanTokenAddress,beanLogicProxy],privateKey).then(function(receipt,err){
    console.log(receipt)
    //set related token
    tokenManager.setDouRelatedToken([toBeanTokenAddress,relatedToken],privateKey).then(function(receipt,err) {
        console.log(receipt)
    })
})