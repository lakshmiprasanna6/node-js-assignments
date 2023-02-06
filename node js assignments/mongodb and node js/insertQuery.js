let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="studentinfo";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

        let db = client.db(dbName);    // it connect to database 

      
        let student1 = {_id:6,name:"preety",age:28,marks:42};
        let student2 = {_id:7,name:"priya",age:26,marks:43}
        let student3 = {_id:8,name:"prathyu",age:26,marks:43}
        let student4 = {_id:9,name:"pranu",age:25,marks:44}
        let student5 = {_id:10,name:"prachi",age:24,marks:45}
        db.collection("student").insertMany([student1,student2,student3,student4,student5],(err1,result)=> {
            if(!err1){
                    console.log(result)
            }else {
                    console.log(err1)
            }
            client.close();
        })
    }else {
        console.log("Error generated "+err);
    }
})

