var Contract=require("../../contract.js")
var c=new Contract("NullContract","NullContract")
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var str=[]
for(var i=0;i<20000;i++)
    str.push("0x1000000000000000000000000000000000000000000000000000000000000000")
c.x([str],privateKey,5000000).then(function(receipt,err){
    console.log(receipt)
    console.log(web3.eth.getCode("0x7d3862add87f9cb9f7b599ed7e25ec2b7e76f72b"))
})
