let express=require("express");//load the module
let app=express();//creating reference of express module
//http://localhost:3080
app.get("/",(request,response)=>{
	response.send("welcome to express module");
})
//http://localhost:3080/aboutus
app.get("/aboutus",(request,response)=>{
	response.send("welcome to aboutus express module");
})
//http://localhost:3080/contactus
app.get("/contactus",(request,response)=>{
	response.send("welcome to contact express module");
})
//http://localhost:3080/feedback
app.get("/feedback",(request,response)=>{
	response.send("welcome to feedback express module");
})



//server running
app.listen(3080,()=>console.log("server running 3000"));