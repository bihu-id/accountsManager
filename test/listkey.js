contract('list key', function(accounts) {
    it("list key",function(){
        var accountManager=AccountManager.deployed();
        
            for (var key in accountManager.contract._eth)
                console.log(key);
            //console.log("accountManager",accountManager._eth)
        

    })
})