var transaction=require("../../anduiWallet/utils/transation.js")
var codes=require("../byteCodes.js")
var Web3=require("../../getWeb3Instance.js")
var getRpcStr=require("../../getRpcServe.js")

var privateKey=new Buffer("4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",'hex');
var contract="Account"
var addresskey="AccountLogic"

var ethUtil = require('ethereumjs-util');

console.log('0x' + ethUtil.privateToAddress(privateKey).toString('hex'));

console.log(web3.eth.getTransactionCount('0x' + ethUtil.privateToAddress(privateKey).toString('hex')));

transaction.createContract(web3,"0x"+codes[contract],privateKey,3000000,function(err,hash){
    console.log(err)
    if (!err)
        console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

    setTimeout(function(){
        var receipt=web3.eth.getTransactionReceipt(hash)
        console.log(receipt)
        var rpcAddress=getRpcStr.get()
        rpcAddress[addresskey]='"'+receipt.contractAddress+'"';
        getRpcStr.save(rpcAddress)
    },5000)
})


// transaction.

//
// Available Accounts
// ==================
// (0) 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
// (1) 0xffcf8fdee72ac11b5c542428b35eef5769c409f0
// (2) 0x22d491bde2303f2f43325b2108d26f1eaba1e32b
// (3) 0xe11ba2b4d45eaed5996cd0823791e0c93114882d
// (4) 0xd03ea8624c8c5987235048901fb614fdca89b117
// (5) 0x95ced938f7991cd0dfcb48f0a06a40fa1af46ebc
// (6) 0x3e5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9
// (7) 0x28a8746e75304c0780e011bed21c72cd78cd535e
// (8) 0xaca94ef8bd5ffee41947b4585a84bda5a3d3da6e
// (9) 0x1df62f291b2e969fb0849d99d9ce41e2f137006e
// (10) 0x610bb1573d1046fcb8a70bbbd395754cd57c2b60
// (11) 0x855fa758c77d68a04990e992aa4dcdef899f654a
// (12) 0xfa2435eacf10ca62ae6787ba2fb044f8733ee843
// (13) 0x64e078a8aa15a41b85890265648e965de686bae6
// (14) 0x2f560290fef1b3ada194b6aa9c40aa71f8e95598
// (15) 0xf408f04f9b7691f7174fa2bb73ad6d45fd5d3cbe
// (16) 0x66fc63c2572bf3add0fe5d44b97c2e614e35e9a3
// (17) 0xf0d5bc18421fa04d0a2a2ef540ba5a9f04014be3
// (18) 0x325a621dea613bcfb5b1a69a7aced0ea4afbd73a
// (19) 0x3fd652c93dfa333979ad762cf581df89baba6795
// (20) 0x73eb6d82cfb20ba669e9c178b718d770c49bb52f
// (21) 0x9d8e5fac117b15daced7c326ae009dfe857621f1
// (22) 0x982a8cbe734cb8c29a6a7e02a3b0e4512148f6f9
// (23) 0xcdc1e53bdc74bbf5b5f715d6327dca5785e228b4
// (24) 0xf5d1eaf516ef3b0582609622a221656872b82f78
// (25) 0xf8ea26c3800d074a11bf814db9a0735886c90197
// (26) 0x2647116f9304abb9f0b7ac29abc0d9ad540506c8
// (27) 0x80a32a0e5ca81b5a236168c21532b32e3cbc95e2
// (28) 0x47f55a2ace3b84b0f03717224dbb7d0df4351658
// (29) 0xc817898296b27589230b891f144dd71a892b0c18
//
// Private Keys
// ==================
// (0) 4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
// (1) 6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1
// (2) 6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c
// (3) 646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913
// (4) add53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743
// (5) 395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd
// (6) e485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52
// (7) a453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3
// (8) 829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4
// (9) b0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773
// (10) 77c5495fbb039eed474fc940f29955ed0531693cc9212911efd35dff0373153f
// (11) d99b5b29e6da2528bf458b26237a6cf8655a3e3276c1cdc0de1f98cefee81c01
// (12) 9b9c613a36396172eab2d34d72331c8ca83a358781883a535d2941f66db07b24
// (13) 0874049f95d55fb76916262dc70571701b5c4cc5900c0691af75f1a8a52c8268
// (14) 21d7212f3b4e5332fd465877b64926e3532653e2798a11255a46f533852dfe46
// (15) 47b65307d0d654fd4f786b908c04af8fface7710fc998b37d219de19c39ee58c
// (16) 66109972a14d82dbdb6894e61f74708f26128814b3359b64f8b66565679f7299
// (17) 2eac15546def97adc6d69ca6e28eec831189baa2533e7910755d15403a0749e8
// (18) 2e114163041d2fb8d45f9251db259a68ee6bdbfd6d10fe1ae87c5c4bcd6ba491
// (19) ae9a2e131e9b359b198fa280de53ddbe2247730b881faae7af08e567e58915bd
// (20) d09ba371c359f10f22ccda12fd26c598c7921bda3220c9942174562bc6a36fe8
// (21) 2d2719c6a828911ed0c50d5a6c637b63353e77cf57ea80b8e90e630c4687e9c5
// (22) d353907ab062133759f149a3afcb951f0f746a65a60f351ba05a3ebf26b67f5c
// (23) 971c58af72fd8a158d4e654cfbe98f5de024d28547005909684f58c9c46a25c4
// (24) 85d168288e7fcf84b1841e447fc7945b1e27bfe9a3776367079a6427405eac66
// (25) f3da3ac70552606ed09d16dd2808c924826094f0c5cbfcb4f2e0e1cfc70ff8dd
// (26) bf20e9c05d70ce59a6b125eab3b4122eb75044a33749c4c5a77e3b0b86fa091e
// (27) 647442126fdb80c6aec75a0d75a6fe1b31a4e204d29a2c446f550c4115cac139
// (28) ef78746d079c9d72d2e9a3c10447d1d4aaae6a51541d0296da4fc9ec7e060aff
// (29) c95286117cd74213417aeca52118ccd03ec240582f0a9a3e4ef7b434523179f3