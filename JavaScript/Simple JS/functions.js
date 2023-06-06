// two ways to create functions

// first way
const fun = function () {
  console.log("Working function one");
};

fun(); // invoking two

// second way
function greet() {
  console.log("Working function two");
}

greet(); // invoking one

// function with parameters
const sayHi = function (name) {
  console.log("Hellow", name);
};

sayHi("Engineer Hagos");


// arrow function

const arrosSum = (a,b)=>{
   return a+b;
}

console.log(arrosSum(4,7)) // invoking it
