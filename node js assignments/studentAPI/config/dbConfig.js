let mongoClient = require("mongodb").MongoClient;
let url ="mongodb://127.0.0.1:27017";

let dbClient;

exports.dbConnect = ()=> {
    mongoClient.connect(url).then(res=>{
        dbClient=res;
        console.log("Db conneceted....");
    }).catch(err=>console.log(err));
}

exports.getCollection = ()=> {
    return dbClient.db("mydb").collection("student");
}