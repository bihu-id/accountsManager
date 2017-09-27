var getRpcStr=require("./../../getRpcServe.js")

contract('reset token Manager key', function(accounts) {

    var address = getRpcStr.get()
    var tokenManagerdata = address.TokenManagerData

    var keys = [];
    it("tokenManager summary", function () {

        var tokenManager = TokenManager.at(tokenManagerdata);
        return tokenManager.getKeys.call().then(function (res) {
            console.log("keys:")
            keys = res;
            for (var i = 0; i < res.length; i++)
                console.log("%s :%s ", "key" + i, res[i].toString(16))

        })

    });

    it("set reset key ", function () {

        var tokenManager = TokenManager.at(tokenManagerdata);

        for (var i = 1; i < 12; i++)
            if (parseInt(keys[i]) == 0)
                tokenManager.resetKey(i, accounts[i], {from: accounts[0], gas: 2000000}).then(function (tx) {
                    console.log("reset key %d:%s", i, accounts[i]);
                    //console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16));
                    console.log(tx);

                })
    })
})