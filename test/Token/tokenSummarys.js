var address=require('./../address.js')
contract('all tokens summary', function(accounts) {

    var tokenmanager=address.tokonManagerdata
    var accountManager=address.accountManager

    it("get  token", function() {
        var token = Token.at("0x0fd4e3915f510475f2c69aecf3724a8fea41f5fd");
        token.summary().then(function (res) {
            console.log(res)
            /*token.balanceOf(res[1]).then(function (res) {
                console.log(res.toString())
            })*/
            //console.log( String.fromCgarCode(res[1]))
            //console.log(Buffer(res[1],"ASCII"))
        })
    })

    /*it("get  token", function() {
        var tokenManager = TokenManager.at(tokenmanager);

        return tokenManager.getTokenAmounts().then(function (res) {
            console.log("token amount:", res.toString())

            tokenManager.getTokenSummary(res).then(function (res) {
                console.log("token summary:", res.toString())
                var token = Token.at("0x0fd4e3915f510475f2c69aecf3724a8fea41f5fd");
                token.summary().then(function (res) {
                    console.log(res.toString())
                    token.balanceOf(res[1]).then(function (res) {
                        console.log(res.toString())
                    })
                    //console.log( String.fromCgarCode(res[1]))
                    //console.log(Buffer(res[1],"ASCII"))
                })

            })

        });
    })*/
})