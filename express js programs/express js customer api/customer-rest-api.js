let express = require("express");
let app = express();
let bodyParser = require("body-parser");



// middleware added 
app.use(bodyParser.json());     // this code enable json body part from request. 

let cust1 = {cid:100,cname:"Ravi",age:21}
let cust2 = {cid:101,cname:"Ramesh",age:20}
let cust3 = {cid:102,cname:"Rajesh",age:24}
let cust4 = {cid:103,cname:"Lokesh",age:26}
let customers =[];
customers.push(cust1);
customers.push(cust2);
customers.push(cust3);
customers.push(cust4);
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

// update age 
//http://localhost:3000/updateCustomerAge
app.patch("/updateCustomerAge",(request,response)=> {
    let customer = request.body;
    let index = customers.findIndex(c=>c.cid==customer.cid);
    if(index<0){
            response.send("No customer present with id as "+customer.cid);
    }else {
            customers[index].age=customer.age;
            response.send(" Age updated ");
    }
});

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

// update age and name 
//http://localhost:3000/updateCustomer

app.put("/updateCustomer",(request,response)=> {
    let customer = request.body;
    let index = customers.findIndex(c=>c.cid==customer.cid);
    if(index<0){
            response.send("No customer present with id as "+customer.cid);
    }else {
            customers[index].cname=customer.cname;
            customers[index].age=customer.age;
            response.send(" customer details updated successfully");
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