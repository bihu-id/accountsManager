var getRpcStr=require("./../../getRpcServe.js")

contract('summary of token Manager', function(accounts) {

    var address=getRpcStr.get()

    var tokenManager=address.TokenManagerData

    it("summary of token Manager", function () {

        var instance=TokenManager.at(tokenManager);

        return instance.summary().then(function(res){
            console.log(res.toString());

        })
    })

})