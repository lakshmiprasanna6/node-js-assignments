let http=require("http");//module node

//   http://localhost:3080/

let server=http.createServer((request,response)=>{
response.setHeader("content type","text/html");	
response.end("<html><body><h1><font color=blue>welcome to my http module</font></h1></body></html>");
})
//port 1 to 65535

server.listen(3080,()=>console.log
("server running on port number 3080"));
