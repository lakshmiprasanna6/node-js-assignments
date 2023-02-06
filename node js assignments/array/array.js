let express = require("express");
let app = express();
let bodyParser = require("body-parser");



// middleware added 
app.use(bodyParser.json());     // this code enable json body part from request. 

const array1 = [{name:"balu"},{name:"banu"},{name:"barathi"},{name:"bubbly"},{name:"bindu"},{name:"beeshma"},{name:"barbi"}];

array1.splice(2,0,"name:baby");
array1.pop();
//console.log("array values:${array1}");

/*let a1 = {cid:100,cname:"Ravi",age:21}
let a2 = {cid:101,cname:"Ramesh",age:20}
let cust3 = {cid:102,cname:"Rajesh",age:24}
let cust4 = {cid:103,cname:"Lokesh",age:26}
let customers =[];
customers.push(cust1);
customers.push(cust2);
customers.push(cust3);
customers.push(cust4);*/
 
array1.push("name:bheema");

// http://localhost:3000/  it will give in text format 

app.get("/",(request,response)=> {
    response.send("welcome to rest api with get method")
})

// http://localhost:3000/getCustomers 

app.get("/getCustomers",(request,response)=> {
   // response.json(array1);
   var i=0;
   while(array1[i]<9){
       alert(array1[i++]);
   }
   response.json(array1);
})


// search cusomer using query param 
// http://localhost:3000/searchCustomerByQueryParam?name=balu
app.get("/searchCustomerByQueryParam",(request,response)=> {
  let name = request.query.name;
    let result = array1.find(n=>n.name==name);
    if(result!=undefined){
        response.json(result);
    }else {
    response.json({"msg":"Record not present"})
    }
})

// search cusomer using query param 
// http://localhost:3000/searchCustomerByPathParam/101
app.get("/searchCustomerByPathParam/:cid",(request,response)=> {
    let name = request.params.name;
      let result = array1.find(n=>n.name==name);
      if(result!=undefined){
          response.json(result);
      }else {
      response.json({"msg":"Record not present"})
      }
  })

// http://localhost:3000/deleteCustomer

app.delete("/deleteCustomer",(request,response)=> {
    while(array.length)
    {
         array1.pop();
    }
  
    //console.log("removed element:"+popped);
});




app.listen(3000,()=>console.log("Server running on port number 3000"))