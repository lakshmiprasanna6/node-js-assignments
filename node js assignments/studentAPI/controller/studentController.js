let stuCollection = require("../config/dbConfig");
//data of employeee
exports.getAllstudents = async (request,response)=> {
    try{
    let result =await stuCollection.getCollection().find().toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}

//data of age limit
exports.getAllstudents = async (request,response)=> {
    try{
    let result =await stuCollection.getCollection().find({age:{$gt:21}}).toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}
/*//data of salary limit
exports.getAllEmployees = async (request,response)=> {
    try{
    let result =await empCollection.getCollection().find({$and:[{salary:{$gt:20000}},{salary:{$lt:30000}}]}).toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}*/
exports.findStudentById = async (request,response)=> {
    let stuId = eval(request.params._id);
    try{
        let result =await stuCollection.getCollection().findOne({_id:stuId});
        if(result==null){
            response.json({"msg":"Record not present with id as "+stuId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}

exports.findStudentByClass = async (request,response)=> {
    let stuId = eval(request.params._id);
    try{
        let result =await stuCollection.getCollection().findOne({class:studentclass});
        if(result==null){
            response.json({"msg":"Record not present with id as "+stuId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}

exports.findStudentByAddress = async (request,response)=> {
    let stuId = eval(request.params._id);
    try{
        let result =await stuCollection.getCollection().findOne({address:studentaddress});
        if(result==null){
            response.json({"msg":"Record not present with id as "+stuId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}
/*
exports.storeEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await stuCollection.getCollection().insertOne(student);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}
*/
exports.deleteStudent = async (request,response)=> {
    let stuId = eval(request.params._id);
    try{
    let result  = await stuCollection.getCollection().deleteOne({_id:stuId});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+stuId);
    }
    }catch(ex){
        response.send(ex);
    }
}



exports.updateStudent= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await stuCollection.getCollection().updateOne({_id:student._id},{address:student.address});
    if(result.modifiedCount>0){
        response.send("address updated successfully")
    }else if(result.matchedCount>0){
        response.send("address didn't update becuase old and new address are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}