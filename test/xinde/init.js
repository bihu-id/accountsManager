address=require("./address.js")
contract('init xindi', function(accounts) {

    var xindedata=address.xindedata

    it("xinde init", function(){

        var xinde=Xindi.at(xindedata);
        return xinde.init({from:accounts[0],gas:10000000}).then(function(tx){
            //console.log(xinde.getTransactionReceipt(tx));
        })
    });

})