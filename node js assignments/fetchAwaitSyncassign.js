async function productsData() {

try{
var res = await fetch("https://dummyjson.com/products") 
var result = await res.json();
//var result = res.json();//result will be pending
console.log(result)
//document.write want to use to display on browser
}catch(ex){
    console.log(ex)
}

}
        productsData();

        async function empsData() {

try{
var res = await fetch("https://dummy.restapiexample.com/api/v1/employees") 
var result = await res.json();
//var result = res.json();//result will be pending
console.log(result)
//document.write want to use to display on browser
}catch(ex){
    console.log(ex)
}

}
        empsData();