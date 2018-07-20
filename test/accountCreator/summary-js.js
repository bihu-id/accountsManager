var Contract=require("../../contract.js")

var AccountCreator=new Contract ("AccountCreator","AccountCreatorData",10000)// arg0: contract name to get abi and function , arg1: to get contract address


// AccountCreator.getKeys().then(function(res){
//     console.log("keys:")
//     console.log(res)
//     // for(var i=0;i<res[0].length;i++){
//     //     str=setw(i.toString(),3)+setw(keys[i],20)+":"+setw(roles[keys[i]],30)+res[0][i].toString(16)
//     //     str=str.replace(/\'/g, "")
//     //     if(i%2==0)
//     //         console.log("\n")
//     //     console.log(str)
//     // }
//
//
// })
// AccountCreator.getOptions().then(function(res){
//     console.log("options:")
//
//     // console.log("key amounts:%s \n option amounts: %s ",parseInt(res[0],16) ,parseInt(res[1],16))
//     console.log("key amounts:%s \n option amounts: %s ",parseInt(res[0],16) ,parseInt(res[1],16))
//
// })


AccountCreator.accountAmount().then(function (res) {
    console.log(res.toString())

})


// var instance=AccountCreator.at(AccountCreatorData);
AccountCreator.getKeys().then(function(res){
    res = res[0]
    console.log("core:",res[0]);
    console.log("owner:",res[1]);
    console.log("account owner:",res[2]);
    console.log("Tx core:",res[3]);
    // console.log("account proxy :",res[4]);

})

AccountCreator.getKey([3]).then(function (res) {
    console.log(res)
})

AccountCreator.getOptions().then(function(res){
    console.log("options:")

    res = res[0]

    // console.log("key amounts:%s \n option amounts: %s ",parseInt(res[0],16) ,parseInt(res[1],16))
    console.log("key amounts:%s \n option amounts: %s , %s, %s, %s",
        parseInt(res[0],16),
        parseInt(res[1],16),
        parseInt(res[2],16),
        parseInt(res[3],16),
        parseInt(res[4],16)
        )

})