let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="studentinfo";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

        let db = client.db(dbName);    // it connect to database 

        db.collection("student").updateOne({_id:7},{$set:{marks:45}},(err1,result)=> {
            if(!err1){
                    if(result.modifiedCount>0){
                        console.log("REcord updated")
                    }else if(result.matchedCount>0){
                        console.log("record not updated")
                    }else {
                        console.log("record didnt update ")
                    }
            }else {
                console.log(err1)
            }
            client.close();
        })

        

    }else {
        console.log("Error generated "+err);
    }
})

