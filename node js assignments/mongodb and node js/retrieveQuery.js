let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 
var dbName  ="studentinfo";
let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(dbName);    // it connect to database 

       // let cursor = db.collection("student").find({});
       let cursor = db.collection("student").find({age:{$gt:25}});
        cursor.forEach(doc=>{
                //console.log(doc)  
                console.log("Id is  "+doc._id+"  Name  "+doc.name)
                
        }).finally(()=> {           // close the resource properly
            client.close();
        })
        //console.log(cursor)

        
    }else {
        console.log("Error generated "+err);
    }
})

