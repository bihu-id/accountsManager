var fs=require('fs');
var path = require('path');
var solc = require('solc');
var oldAllFuns=require('./test/funs.js');
var oldabis1=require('./anduiWallet/config/abls.js');


var contracts_directory=path.join(process.cwd(),"./contracts");
var base_directory=path.join(process.cwd(),"./contracts/contractBase");
var interface_directory=path.join(process.cwd(),"./contracts/contractInterface");

console.log(contracts_directory);
var input = {};

var allFuns={};

var allEvents={};

function getSub(obj,keys) {
    var subObj = obj
    for (var i = 0; i < keys.length; i++)
        if (subObj[keys[i]] != undefined) {
            subObj = subObj[keys[i]]
        }
        else
            return
    return subObj
}

var funContract=
    [
        'Data',
        'AccountCreator',
        'Token',
        'TokenManager',
        'TxManager',
        'Xindi',
        'Account',
        'LogicProxy',
        'KeepManager',
        'ParkingLock',
        'DividendToken',
        'Bean',
        'Test',
        'NullContract',
        'Erc20Token',
        'ParkingCreator',
        'Parking'
        // 'CrawdSale'
    ]

var files=fs.readdirSync("./contracts")

//console.log(files)
var i;

// files=["Error.sol"]
for (i in files) {
    var file = files[i];
    if(file.indexOf(".sol")>=0)
        input[file] = fs.readFileSync(path.join(contracts_directory ,file), 'utf8');
}

var filesBase=fs.readdirSync("./contracts/contractBase")
for (i in filesBase) {
    var file = filesBase[i];
    if(file.indexOf(".sol")>=0)
        input["contractBase/"+file] = fs.readFileSync(path.join(base_directory ,file), 'utf8');
}

var filesInterface=fs.readdirSync("./contracts/contractInterface")
for (i in filesInterface) {
    var file = filesInterface[i];
    if(file.indexOf(".sol")>=0)
        input["contractInterface/"+file] = fs.readFileSync(path.join(interface_directory ,file), 'utf8');
}

console.log(Object.keys(input))
var outputs = solc.compile({sources: input}, 1);


var contracts=outputs.contracts;
console.log(outputs)

var abis={}
var abis1={}
var byteCodes={}
console.log(outputs)
Object.keys(contracts).forEach(function(contractKey){

    if(funContract.indexOf(contractKey)>=0){

        //funs
        //console.log(contractKey)
        var funs={}
        var funhash=contracts[contractKey].functionHashes

        Object.keys(funhash).forEach(function(k){

            //console.log("fun:",k)
            var purek=k.substring(0,k.indexOf("("))
            var fun={}
            fun["name"]="'"+k+"'";
            fun["sig"]="0x"+funhash[k];
            fun["resSize"] = 32;
            if(oldAllFuns[contractKey]!=undefined)
                if(oldAllFuns[contractKey][purek]!=undefined)
                    if(oldAllFuns[contractKey][purek]["resSize"]!=undefined &&oldAllFuns[contractKey][purek]["resSize"]!=0)
                        fun["resSize"] = oldAllFuns[contractKey][purek].resSize;
            fun["register"] = false;
            if(oldAllFuns[contractKey]!=undefined)
                if(oldAllFuns[contractKey][purek]!=undefined)
                    if(oldAllFuns[contractKey][purek]["register"]!=undefined )
                        fun["register"] = oldAllFuns[contractKey][purek].register;
            //console.log("contract :\n",contractKey,"fun external:\n",contracts[contractKey]["gasEstimates"].external)
            //console.log(k)

            funs[purek]=fun
            //console.log(contractKey,funs)
        })
        allFuns[contractKey]=funs;

        t_abi=JSON.parse(contracts[contractKey].interface)
        var abisContract={}
        abisContract["label"]=contractKey
        var sub=[contractKey,"label"]
        if(getSub(oldabis1,sub)!=undefined)
            abisContract["label"]= getSub(oldabis1,sub);

        abisContract["address"]=""
        sub=[contractKey,"address"]
        if(getSub(oldabis1,sub)!=undefined)
            abisContract["address"]= getSub(oldabis1,sub);

        var abiFuns={}
        for(var i=0;i<t_abi.length;i++)
        {
            if(t_abi[i].type!="event") {
                var abiFun = {}
                var funName = t_abi[i].name
                if (funName != undefined) {
                    abiFun["label"] = funName
                    var sub = [contractKey, "funs", funName, "label"]
                    if (getSub(oldabis1, sub) != undefined)
                        abiFun["label"] = getSub(oldabis1, sub)

                    var inputs = t_abi[i]["inputs"]
                    var funInputs = {}
                    if (inputs != undefined) {
                        for (var j = 0; j < inputs.length; j++) {

                            var paraName = inputs[j].name
                            var input = {
                                "label": paraName,
                                "type": inputs[j].type,
                                "select": {}
                            }
                            funInputs[paraName] = input
                            var sub = [contractKey, "funs", funName, "inputs", paraName, "label"]
                            if (getSub(oldabis1, sub) != undefined)
                                funInputs[paraName]["label"] = getSub(oldabis1, sub)

                            sub = [contractKey, "funs", funName, "inputs", paraName, "select"]
                            if (getSub(oldabis1, sub) != undefined)
                                funInputs[paraName]["select"] = getSub(oldabis1, sub)

                        }
                        abiFun["inputs"] = funInputs
                    }
                    var outputs = t_abi[i]["outputs"]
                    if (outputs != undefined) {
                        var funOutputs = {}
                        for (var j = 0; j < outputs.length; j++) {

                            var paraName = outputs[j].name
                            var output = {
                                "label": paraName,
                                "type": outputs[j].type,
                                "select": {}
                            }
                            funOutputs[paraName] = output
                            var sub = [contractKey, "funs", funName, "outputs", paraName, "label"]
                            if (getSub(oldabis1, sub) != undefined)
                                funOutputs[paraName]["label"] = getSub(oldabis1, sub)

                            sub = [contractKey, "funs", funName, "outputs", paraName, "select"]
                            if (getSub(oldabis1, sub) != undefined)
                                funOutputs[paraName]["select"] = getSub(oldabis1, sub)

                            sub = [contractKey, "funs", funName, "outputs", paraName, "format"]
                            if (getSub(oldabis1, sub) != undefined)
                                funOutputs[paraName]["format"] = getSub(oldabis1, sub)
                        }
                        abiFun["outputs"] = funOutputs
                    }

                    abiFun["constant"] = t_abi[i]["constant"]
                    sub = [contractKey, "funs", funName, "constant"]
                    if (getSub(oldabis1, sub) != undefined)
                        abiFun["constant"] = getSub(oldabis1, sub)
                    abiFun["type"] = t_abi[i]["type"]
                    abiFun["showLevel"] = 0
                    var sub = [contractKey, "funs", funName, "showLevel"]
                    if (getSub(oldabis1, sub) != undefined)
                        abiFun["showLevel"] = getSub(oldabis1, sub)

                    abiFuns[funName] = abiFun
                }
            }
        }

        //events

        var pathPre="./build/contracts/"
        var soljs=require(pathPre+contractKey+".sol.js")
        var events=soljs["events"]

        Object.keys(events).forEach(function(k){
            events[k]["label"]=events[k]["name"]
            sub=[contractKey,"events",k,"label"]
            if(getSub(oldabis1,sub)!=undefined)
                events[k]["label"]= getSub(oldabis1,sub);
            for(var ei=0;ei<events[k]["inputs"].length;ei++){
                events[k]["inputs"][ei]["lable"]=events[k]["inputs"][ei]["name"]
                sub=[contractKey,"events",k,"inputs",ei,"label"]
                if(getSub(oldabis1,sub)!=undefined)
                    events[k]["inputs"][ei]["lable"]= getSub(oldabis1,sub);
            }
        })
        abisContract["events"]=events
        allEvents[contractKey]=events
        abisContract["funs"]=abiFuns
        abis[contractKey]=JSON.parse(contracts[contractKey].interface)
        abis1[contractKey]=abisContract

        //bytes code
        if(contracts[contractKey].bytecode!=undefined&&contracts[contractKey].bytecode!="")
            byteCodes[contractKey]=contracts[contractKey].bytecode
    }



})
var raw=JSON.stringify(allFuns,null,4).replace(/\"/g, "")
var str="var funs=\n"+raw+"\nmodule.exports=funs;";
fs.writeFile("./test/funs.js",str,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;

var raw=JSON.stringify(abis,null,4);
var str="var abis=\n"+raw+"\nmodule.exports=abis;";

var raw1=JSON.stringify(abis1,null,4);
var str1="var abis1=\n"+raw1+"\nmodule.exports=abis1;";


fs.writeFile("./anduiWallet/config/abls.js",str1,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;
fs.writeFile("./anduiWallet/config/abis.js",str,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;

fs.writeFile("./test/abis.js",str,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;

// //store abis to abis repo
// fs.writeFile("/Users/Roy/github/abis/abis.js",str,function (err) {
//     if (err) throw err ;
//     console.log("update abis !"); //文件被保存
// }) ;

// //store events to abis repo
// var allEventsStr="var events=\n"+JSON.stringify(allEvents,null,4)+"\nmodule.exports=events;";
// fs.writeFile("/Users/Roy/github/abis/events.js",allEventsStr,function (err) {
//     if (err) throw err ;
//     console.log("update events to abis !"); //文件被保存
// }) ;
var raw=JSON.stringify(byteCodes,null,4)
//.replace(/\"/g, "")
var str="var byteCodes=\n"+raw+"\nmodule.exports=byteCodes;";
fs.writeFile("./test/byteCodes.js",str,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;



