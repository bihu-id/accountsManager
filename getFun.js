var fs=require('fs');
var path = require('path');
var solc = require('solc');
var oldAllFuns=require('./test/funs.js');


var contracts_directory=path.join(process.cwd(),"./contracts");

console.log(contracts_directory);
var input = {};

var allFuns={};

var funContract=
    ['AccountManager',
        'Token',
        'TokenManager',
        'TxManager',
        'Xindi',
        'Account',
        'LogicProxy'
    ]

fs.readdir("./contracts",function(err,files){
    if (err){
        console.log(err)
        return ;
    }
    //console.log(files)
    var i;

    //files=["Error.sol"]
    for (i in files) {
        var file = files[i];
        if(file.indexOf(".sol")>=0)
            input[file] = fs.readFileSync(path.join(contracts_directory ,file), 'utf8');
    }

    var outputs = solc.compile({sources: input}, 1);
    

    Object.keys(outputs)
    var contracts=outputs.contracts;

    var abis={}
    //console.log(Object.keys(contracts))
    Object.keys(contracts).forEach(function(contractKey){

        //console.log(contractKey)
        if(funContract.indexOf(contractKey)>=0){
            
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

            abis[contractKey]=JSON.parse(contracts[contractKey].interface)
        }

    })
    var raw=JSON.stringify(allFuns,null,4).replace(/\"/g, "")
    var str="var funs=\n"+raw+"\nmodule.exports=funs;";
    fs.writeFile("./test/funs.js",str,function (err) {
        if (err) throw err ;
        console.log("File Saved !"); //文件被保存
    }) ;

    var raw1=JSON.stringify(abis,null,4);
    var str1="var abis=\n"+raw1+"\nmodule.exports=abis;";


    fs.writeFile("./test/abis.js",str1,function (err) {
        if (err) throw err ;
        console.log("File Saved !"); //文件被保存
    }) ;
    
});

