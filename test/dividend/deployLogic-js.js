var Contract=require("../../contract.js")

var privateKey=new Buffer("4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",'hex');

var dividendToken=new Contract("DividendToken","DividendTokenLogic")
dividendToken.deploy(privateKey).then(function(dividendToken,err){
    dividendToken.save()
})