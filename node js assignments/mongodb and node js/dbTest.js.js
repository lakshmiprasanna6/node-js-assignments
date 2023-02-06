let mongodb = require("mongodb");       // load the module 
let mongoClient = mongodb.MongoClient;  // creating the reference of mongodb module 
//let url ="mongodb://localhost:27017";   // default port number for mongo db is 27017
let url ="mongodb://127.0.0.1:27017";       // default id address of our machine  
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
    }else {
        console.log("Error generated "+err);
    }
})

