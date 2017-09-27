var Contract=require("../../contract.js")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex');
var contract=new Contract ("TokenManager","TokenManagerData",6000)
contract.txVersion([],privateKey).then(function(receipt,err){
    console.log(receipt)
    console.log(web3.eth.getTransaction(receipt.transactionHash))
})
