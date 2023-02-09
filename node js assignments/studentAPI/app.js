let express = require("express");
let dbInfo = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");
let app = express();

dbInfo.dbConnect();

//middleware 
app.use(express.json());    // extract json data from request body;


// app.get("/",(request,response)=>{
//     response.send("Test")
// })

// http://localhost:3000/api/employees/*
// http://localhost:3000/api/customer/*
app.use("/api/student",studentRouter);

app.listen(3000,()=>console.log("Server running on port number 3000"))