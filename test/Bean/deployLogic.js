var Contract=require("../../contract.js")


var Bean=new Contract("Bean","BeanLogic",6000)

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

Bean.deploy(privateKey).then(function(beanLogic,err) {
    //console.log(Bean)
    Bean.save()
    
})
