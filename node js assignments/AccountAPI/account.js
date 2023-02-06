let express = require("express");
let app = express();
let bodyParser = require("body-parser");



// middleware added 
app.use(bodyParser.json());     // this code enable json body part from request. 

let cust1 = {cid:100,cname:"Ravi",age:21,bal:200000,bank:"sbi"}
let cust2 = {cid:101,cname:"Ramesh",age:20,bal:900000,bank:"icici"}
let cust3 = {cid:102,cname:"Rajesh",age:24,bal:2000000,bank:"ubi"}
let cust4 = {cid:103,cname:"Lokesh",age:26,bal:500000,bank:"hdfc"}
let cust5 = {cid:104,cname:"Rani",age:29,bal:1200000,bank:"kotak"}
let cust6 = {cid:105,cname:"Ramu",age:28,bal:1900000,bank:"axis"}
let cust7 = {cid:106,cname:"Raji",age:25,bal:2000000,bank:"sbi"}
let cust8 = {cid:107,cname:"Loki",age:26,bal:500000,bank:"sbi"}
let customers =[];
customers.push(cust1);
customers.push(cust2);
customers.push(cust3);
customers.push(cust4);
customers.push(cust5);
customers.push(cust6);
customers.push(cust7);
customers.push(cust8);
// http://localhost:3000/  it will give in text format 

app.get("/",(request,response)=> {
    response.send("welcome to rest api with get method")
})

// http://localhost:3000/getCustomer 

app.get("/getCustomer",(request,response)=> {
    response.json(cust1);
})

// http://localhost:3000/getCustomers 

app.get("/getCustomers",(request,response)=> {
    response.json(customers);
})


// search cusomer using query param 
// http://localhost:3000/searchCustomerByQueryParam?cid=101
app.get("/searchCustomerByQueryParam",(request,response)=> {
  let cid = request.query.cid;
    let result = customers.find(c=>c.cid==cid);
    if(result!=undefined){
        response.json(result);
    }else {
    response.json({"msg":"Record not present"})
    }
})

// search cusomer using query param 
// http://localhost:3000/searchCustomerByPathParam/100
app.get("/searchCustomerByPathParam/:cid",(request,response)=> {
    let cid = request.params.cid;
      let result = customers.find(c=>c.cid==cid);
      if(result!=undefined){
          response.json(result);
      }else {
      response.json({"msg":"Record not present"})
      }
  })

  // create or store customer details in array 
// http://localhost:3000/storeCustomer 

  app.post("/storeCustomer",(request,response)=> {
        let customer = request.body;
        //console.log(customer);
        let result = customers.find(c=>c.cid==customer.cid);
        //console.log(result)
        if(result == undefined){
                customers.push(customer);       // added in array 
                response.send("Customer details stored successfully");
        }else {
            response.send("Record didn't store, Customer id must be unique")
        }
  })


// update name 
//http://localhost:3000/updateCustomerName
app.patch("/updateCustomerName",(request,response)=> {
    let customer = request.body;
    let index = customers.findIndex(c=>c.cid==customer.cid);
    if(index<0){
            response.send("No customer present with id as "+customer.cid);
    }else {
            customers[index].cname=customer.cname;
            response.send(" Name updated ");
    }
});

//http://localhost:3000/deleteCustomer/:cid
app.delete("/deleteCustomer/:cid",(request,response)=> {
    let cid = request.params.cid;
    let index = customers.findIndex(c=>c.cid==cid);
    if(index<0){
            response.send("No customer present with id as "+cid);
    }else {
            customers.splice(index,1);
            response.send(" customer details deleted successfully");
    }
});




app.listen(3000,()=>console.log("Server running on port number 3000"))
