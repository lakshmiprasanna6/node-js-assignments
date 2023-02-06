let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="studentinfo";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

    
        let db = client.db(dbName);    // it connect to database 
        db.collection("student").deleteMany({$or:[{_id:5},{_id:7}]},(err1,result)=> {
            if(!err1){
                if(result.deletedCount>0){
                    console.log("Record deleted successfully")
                }else {
                    console.log("Record not present")
                }
            }else {
                console.log(err1);
            }
            client.close();
        })
       
    }else {
        console.log("Error generated "+err);
    }
})

