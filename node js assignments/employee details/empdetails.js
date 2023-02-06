let express = require("express");
let app = express();
let bodyParser = require("body-parser");



// middleware added 
app.use(bodyParser.json());     // this code enable json body part from request. 

let emp1 = {eid:100,ename:"ankitha",age:25}
let emp2 = {eid:101,ename:"akhil",age:26}
let emp3 = {eid:102,ename:"anu",age:25}
let emp4 = {eid:103,ename:"arshi",age:26}
let employees =[];
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);
// http://localhost:3000/  it will give in text format 

// http://localhost:3000/getCustomers 

app.get("/getCustomers",(request,response)=> {
    response.json(employees);
})



app.listen(3000,()=>console.log("Server running on port number 3000"))