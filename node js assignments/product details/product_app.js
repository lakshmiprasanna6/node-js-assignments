let express = require("express");
let fs = require("fs");
let bodyParser  = require("body-parser");

let app = express();

// middleware 
app.use(bodyParser.urlencoded({extended:true})); // to enable request body data from form with post method

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"//index.html");
})

app.get("/storeProduct",(request,response)=> {
    response.sendFile(__dirname+"//addProduct.html");
})
app.get("/addProduct",(request,response)=> {
    let pidValue = request.query.pid;
    let pnameValue = request.query.pname;
    let priceValue = request.query.price;
    let urlValue = request.query.url;
    let product = {pid:pidValue,pname:pnameValue,price:priceValue,url:urlValue}
    let products = JSON.parse(fs.readFileSync("products.json"));
    products.push(product);
    fs.writeFileSync("products.json",JSON.stringify(products));
    response.send("Product Data stored");
})


app.post("/addProduct",(request,response)=> {
    let product = request.body;
    let products = JSON.parse(fs.readFileSync("products.json"));
    products.push(product);
    fs.writeFileSync("products.json",JSON.stringify(products));
    
    response.send("Data Added...")
})

app.get("/viewProduct",(request,response)=> {
    let products = JSON.parse(fs.readFileSync("products.json"));
    response.send("Total number of product are "+products.length)
})
app.listen(3000,()=>console.log("server running on port number 3000"));