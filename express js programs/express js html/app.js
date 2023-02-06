// JavaScript source code

let express = require("express");
let fs = require("fs");
let app = express();
// http://localhost:3000
app.get("/",(request,response)=> {
    //response.send("Welcome to Express JS");
    //response.sendFile("index.html");
   // response.sendFile("C:\\Users\\LENOVO\\OneDrive\\Desktop\\Node JS Training\\Node JS Program\\UI Technologies\\backend\\Express JS App With View as HTML\\index.html");
    //response.send(__dirname);   // this property help use to get the current path of the application. 
    response.sendFile(__dirname+"\\index.html");
})


app.get("/aboutus",(request,response)=> {
    response.sendFile(__dirname+"\\aboutus.html");
})

app.get("/contactus",(request,response)=> {
    response.sendFile(__dirname+"\\contactus.html");
})

app.get("/login",(request,response)=> {
    response.sendFile(__dirname+"\\login.html");
})

app.get("/signIn",(request,response)=> {
    let email = request.query.email;            // receive email field from form 
    let password = request.query.password;         // recevie password field from form 
    console.log(email+" "+password);
     if(email=="raj@gmail.com" && password=="123"){
       response.send("successfully login");
    }else {
        response.send("Failure try once again");
    }
 let data = fs.readFileSync(__dirname+"\\logins.json");   // read data from file data in the buffer 
    let logins = JSON.parse(data.toString());    // convert that data into string and that string convert into json 
    let result = logins.find(l=>l.email==email && l.password==password);
    if(result==undefined){
        response.send("failure try once again")
    }else {
        response.send("successfully login")
    }

    // response.send("done!")
})
app.get("/accountCreate",(request,response)=> {
    let emailValue = request.query.email;            // receive email field from form 
    let passwordValue = request.query.password;         // recevie password field from form 
    let login = {email:emailValue,password:passwordValue}; // literal style object
    console.log(login);
    //fs.writeFileSync("logins.json",JSON.stringify(login));  // override the data 
    //fs.writeFileSync("logins.json",JSON.stringify(login),{flag:"a+"});
    let data = fs.readFileSync(__dirname+"\\logins.json");
    let logins = JSON.parse(data.toString());       // array of login object. 
    let result = logins.find(l=>l.email==emailValue);
    if(result==undefined){
        logins.push(login);                     // add in array 
        fs.writeFileSync("logins.json",JSON.stringify(logins));
        response.send("Account created");
    }else {
        response.send("EmailId must be unique")
    }

 
})

app.get("/signUp",(request,response)=> {
    response.sendFile(__dirname+"\\signUp.html");
})

app.listen(3000,()=>console.log("server running on port nubmber 3000"));