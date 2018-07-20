var Web3=require("web3")
var config=require("./truffle.js")
//var Wallet=require('ethereumjs-wallet');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    console.log("start web instance")
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://" + config.rpc.host + ":" + config.rpc.port));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/nRUCOskjng2tooOxkAlU"));



}
module.exports = web3;