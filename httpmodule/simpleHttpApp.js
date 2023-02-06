let http = require("http");  // module load 

// http://localhost:3000 

let server = http.createServer((request,response)=> {

response.end("<html><head></head><body<h1><font color=red>Welcome to My Http Module</font></h1></body></html>");

})

//port 1 to 65535

server.listen(3000,()=>console.log("server running on port number 3000"));

