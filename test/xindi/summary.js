var Contract=require("../../contract.js")

var xindi=new Contract ("Xindi","XindiData",10000)// arg0: contract name to get abi and function , arg1: to get contract address


    var roles={
        core:		    "核心key重置所有keys",
        coreC:		    "批准 core的操作",

        setSubKey: 	    "设置子管理合约key",
        setSubKeyC:	    "批准setSubKey的操作",

        setOption:	    "设置合约参数",
        resetOptionC:	"批准setOption的操作",

        reSet:          "重置用户",
        reSetC:         "批准reSet的操作",

        realName:       "实名认证",
        realNameC:      "批准realName的操作",

        CA:             "设置CA",
        CAC:            "批准CA的操作",

        revoke:         "撤销CA",
        revokeC:        "批准revoke的操作",

        freeze:         "冻结账户",
        freezeC:        "批准freeze的操作",

        unfreeze:       "解冻账户",
        unfreezeC:      "批准unfreeze的操作",


        forceTransfer:  "强制转移",
        forceTransferC: "批准forceTransfer的操作"
}


    var keys=Object.keys(roles)

    function setw(str, len){
        var oldLen=str.length
        if(str.length<len){
            for(var i=0;i<(len-oldLen);i++){
                str+=" ";
            }
        }
        return str
    }
/*
    it("get resetKey operation ", function(){
        console.log(xindidata)
        var xindi=Xindi.at(xindidata);
        xindi.getOperationAmounts_resetKey.call().then(function(res){
            console.log("wait resetKey amounts :",res.toString(10))
            amount=res[1];
        })
    })
    it ("get all waiting operation resetKey",function() {
        var xindi = Xindi.at(xindidata);


        return xindi.getWaitOperationNos(1,16 ,2).then(function (res) {
            console.log( "wait Confirm operations :",res.toString(10))
            res.forEach(function(w){
                return xindi.getOperation_resetKey(w).then(function (res) {
                    console.log( "operation detail:")
                    console.log("No","role","           new address               ","status")

                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })*/
   // it("xindi summary", function()

        xindi.getKeys().then(function(res){
            console.log("keys:")
            for(var i=0;i<res.length;i++){
                str=setw(i.toString(),3)+setw(keys[i],20)+":"+setw(roles[keys[i]],30)+res[i].toString(16)
                str=str.replace(/\'/g, "")
                if(i%2==0)
                    console.log("\n")
                console.log(str)
            }

        })
        xindi.getOptions().then(function(res){
            console.log("options:")

            console.log("key amounts:%s \n option amounts: %s ",parseInt(res[0],16) ,parseInt(res[1],16))

        })

