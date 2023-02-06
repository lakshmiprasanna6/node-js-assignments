//console.log("hai");
let fs=require("fs");
//var data="hello world";
//fs.writeFile("demo.txt",data,(err)=>{//override data
//fs.writeFile("demo.txt",data,{"flag":"a+"},(err)=>{//append the data
fs.readFile("demo.txt",(err,data)=>{
	if(!err){
		//console.log(data)//displays buffer format
	console.log(data.toString());}
	else{
		console.log(err)
	}
})
