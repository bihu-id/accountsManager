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
    //host: "139.196.234.239",
    host :"120.92.138.162",//public test 
    //host :"127.0.0.1",
    //host: "192.168.1.12",
    gas:4000000,
    port: 8545
  },
  strict:true,
  chainId:314 //test chain active test chain id =200

};
