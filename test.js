var fs=require('fs');
var path = require('path');
var solc = require('solc');
var oldAllFuns=require('./test/funs.js');
var oldabis1=require('./anduiWallet/config/abls.js');


var contracts_directory=path.join(process.cwd(),"./contracts");

console.log(contracts_directory);
var input = {};

var allFuns={};

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
    ['AccountCreator',
        'Token',
        'TokenManager',
        'TxManager',
        'Xindi',
        'Account'
    ]

fs.readdir("./contracts",function(err,files){
    if (err){
        console.log(err)
        return ;
    }
    //console.log(files)
    var i;

    files=["test.sol"]
    for (i in files) {
        var file = files[i];
        if(file.indexOf(".sol")>=0)
            input[file] = fs.readFileSync(path.join(contracts_directory ,file), 'utf8');
    }

    var outputs = solc.compile({sources: input},1);

    var pathPre="./build/contracts/"
    var soljs=require(pathPre+files[0]+".js")
    console.log(Object.keys(soljs))
    console.log(soljs["events"])
    //console.log(outputs)
    //console.log(outputs.metadata)


    var raw="var out=\n"+JSON.stringify(outputs,null,2).replace(/\"/g, "")
    fs.writeFile("./test.sol.js",raw,function (err) {
        if (err) throw err ;
        console.log("File Saved !"); //文件被保存
    }) ;



})

