//function calling
function x(a,b){
    var mul = a*b;
    console.log("two numbers calculation is "+mul);
}

x(10,20);


const Manager = {
  name: "rani",
  age: 27,
  job: "Manager",
};
const Intern = {
  name: "ramya",
  age: 21,
  job: "intern student",
};
function demo() {
 // console.log(`Hello, my name is ${this.name}`);
   console.log("Hello, my name is  " +this.name);
   console.log("Hello, my name is  " +this.age);
   console.log("Hello, my name is  " +this.job);

}
Manager.demo = demo;
//Intern.demo = demo;

Manager.demo(); 
//Intern.demo(); 




var Hello ={};
 
Hello.drink = "juice";
Hello.eat="five star";
Hello.play="football";
 
console.dir(Hello); 