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
    host: "139.199.7.43",
    //host: "127.0.0.1",
    //host: "139.196.234.239",
    
    port: 8545
  },
  strict:true
};
