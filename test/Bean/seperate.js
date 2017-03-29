//seperate a standard token as a bean.
//1.chage the logicProxy to BeanLogicProxy , call TokenManager contract use subkey
//2.set the related token of this bean token
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var beanLogicProxy=Contract.getAddress("BeanProxy")
var toBeanTokenAddress="0x945719274984de07c3a750271441ca0ffcb831ed"
var relatedToken="0xac8c4fdbd781151f76786cfc962278b0703452ed"
tokenManager.changeTokenProxy([toBeanTokenAddress,beanLogicProxy],privateKey).then(function(receipt,err){
    console.log(receipt)
    //set related token
    tokenManager.setDouRelatedToken([toBeanTokenAddress,relatedToken],privateKey).then(function(receipt,err) {
        console.log(receipt)
    })
})