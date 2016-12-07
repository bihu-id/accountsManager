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
    host: "139.199.7.43",
    //host: "localhost",
    port: 8545
  },
  strict:true
};
//host: "localhost",
//host: "139.196.234.239",
//host: "139.199.7.43",