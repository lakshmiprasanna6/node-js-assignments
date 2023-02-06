let url = require("url");
    let urlDetails ="http://www.google.com:80/about?name=Raj&age=21";
let urlref = url.parse(urlDetails,true);
    console.log(urlDetails)
//console.log(urlref)// will give each partition name
console.log(urlref.protocol)
console.log(urlref.port)
    console.log(urlref.pathname)
console.log(urlref.query.name)
console.log(urlref.query.age)