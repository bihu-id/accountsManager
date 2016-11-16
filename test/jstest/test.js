var truffle=require("./../../node_modules/truffle/index.js");
require("./../../truffle.js")
//console.log(truffle)
var option;

truffle.test.run("./../xinde/resetKey.js",function(err){console.log(err)})