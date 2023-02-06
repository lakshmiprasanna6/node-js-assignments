let express = require("express");
let fs = require("fs");
let bodyParser  = require("body-parser");

let app = express();

// middleware 
app.use(bodyParser.urlencoded({extended:true})); // to enable request body data from form with post method
//http://localhost:3000
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"//index.html");
})
http://localhost:3000/storeEmp
app.get("/storeEmp",(request,response)=> {
    response.sendFile(__dirname+"//add.html");
})
app.get("/add",(request,response)=> {
    let eidValue = request.query.eid;
    let enameValue = request.query.ename;
    let salary = request.query.sal;
    let qualification = request.query.qual;

    let employee = {eid:eidValue,ename:enameValue,sal:salary,qual:qualification}
    let employees = JSON.parse(fs.readFileSync("employees.json"));
    employees.push(employee);
    fs.writeFileSync("employees.json",JSON.stringify(employees));
    response.send("employee Data stored");
})


app.post("/add",(request,response)=> {
    let employee = request.body;
    let employees = JSON.parse(fs.readFileSync("employees.json"));
    employees.push(employee);
    fs.writeFileSync("employees.json",JSON.stringify(employees));
    
    response.send("Data Added...")
})


/*
//http://localhost:3000/searchEmp
app.get("/searchEmp",(request,response)=> {
  let eid = request.query.eid;
  let employees = JSON.parse(fs.readFileSync("employees.json"));
    let result = employees.find(e=>e.eid>0);
    if(result!=undefined){
        response.json(result);
    }else {
    response.json({"msg":"Record not present"})
    }
})*/

//http://localhost:3000/viewEmp
app.get("/viewEmp",(request,response)=> {
    let employees = JSON.parse(fs.readFileSync("employees.json"));
    response.send("Total number of product are "+employees.length)
})
app.listen(3000,()=>console.log("server running on port number 3000"));