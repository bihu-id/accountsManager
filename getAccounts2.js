var config=require("./truffle.js")
var fs=require('fs');
var path = require('path');
var Web3=require("web3")

web3 = new Web3(new Web3.providers.HttpProvider("http://"+config.rpc.host+":"+config.rpc.port))

var accounts=web3.eth.accounts

console.log(accounts)
var raw = JSON.stringify(accounts, null, 4).replace(/\\\"/g, "")
var str = "var accounts=\n" + raw + "\nmodule.exports=accounts;";
fs.writeFile("./accounts.js", str, function (err) {
    if (err) throw err;
    console.log("File Saved !"); //文件被保存
})