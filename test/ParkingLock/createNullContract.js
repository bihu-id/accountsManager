//todo cannot use
var Contract=require("../../contract.js")
var c=new Contract("NullContract","NullContract")
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

c.deploy(privateKey,null,300000,"0x60606040523415600b57fefe").then(function(dividend,err){
    c.save()

})
