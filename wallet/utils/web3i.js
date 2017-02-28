var Web3=require("web3")
//var Wallet=require('ethereumjs-wallet');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    console.log("start web instance")
    web3 = new Web3(new Web3.providers.HttpProvider("http://120.92.138.162:8545")); //test rpc

}
module.exports = web3;