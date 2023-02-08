function productData() {

fetch("https://dummyjson.com/produc").then(res=>res.json()).then(result=>document.write(result)).//showing Quirks mode
//fetch("https://dummyjson.com/products").then(res=>res.json()).then(result=>console.log(result)).//displays on console

catch(e=>document.write("Error generated"+e));

}
productData();

function employeeData() {

fetch("https://dummy.restapiexample.com/api/v1/employees").then(res=>res.json()).then(result=>document.write(result)).//showing Quirks mode
//fetch("https://dummy.restapiexample.com/api/v1/employees").then(res=>res.json()).then(result=>console.log(result)).//displays on console

catch(e=>document.write("Error generated"+e));

}
employeeData();

function movieData() {

fetch("https://github.com/horizon-code-academy/fake-movies-api/blob/").then(res=>res.json()).then(result=>document.write(result)).//showing Quirks mode
//fetch("https://github.com/horizon-code-academy/fake-movies-api/blob").then(res=>res.json()).then(result=>console.log(result)).//displays on console

catch(e=>document.write("Error generated"+e));

}
movieData();
