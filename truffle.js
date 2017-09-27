module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    //host: "60.205.4.235",
    //host: "139.199.7.43",
    //host: "127.0.0.1",
    //host: "139.196.145.105",//public
    host :"120.92.138.162",//public test
    //host :"47.92.114.62",//tps test
    //host :"127.0.0.1",
    //host: "47.92.114.62",
    gas:4000000,
    port: 8545
  },
  strict:true,
  //chainId:1000 //test chain active test chain id =200
  chainId:314 //test chain active test chain id =200
  //chainId:318 //test chain active test chain id =200

};
