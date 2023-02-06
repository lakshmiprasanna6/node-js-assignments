let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((request,response)=> {    
    let urlRef  = url.parse(request.url,true);
    let indexPage = fs.readFileSync("index.html");
    let aboutUsPage = fs.readFileSync("aboutus.html");
    let contactUsPage = fs.readFileSync("contactus.html");
    let feedbackPage = fs.readFileSync("feedback.html");
    let loginPage = fs.readFileSync("login.html");

    if(urlRef.pathname=="/aboutus"){
        response.write(aboutUsPage.toString());
    }else if(urlRef.pathname=="/contactus"){
        response.write(contactUsPage.toString());
    }else if(urlRef.pathname=="/feedback"){
        response.write(feedbackPage.toString());
    }else if(urlRef.pathname=="/login"){
            response.write(loginPage.toString());
    }else if(urlRef.pathname=="/checkLogin"){
            let email = urlRef.query.email;
            let password = urlRef.query.password;
            if(email=="raj@gmail.com" && password=="123"){
                response.write("successfully login");
            }else {
                response.write("failure try once again");
            }
    }else {
        response.write(indexPage.toString())
    }
    response.end()
})

server.listen(3000,()=>console.log("Server running on port number 3000"))