// strings
let educationLevel = "level";

// number ( int and float)
let num1 = 2;
let num2 = 2.33;

// boolean

// undefine = reps a vlaue that is never assigned
// example
let result; // or
result = undefined; // both the same

// null = represents something with no value
let name = null;

//bigint = represents to a large number

//symbole  = represents to value that is unique and unchangable

//object

const person = {
  firstname: "Nigus",
  lastname: "yohannes",
  age: 30,
};

// to acces it 

console.log(person.firstname);

// arrays

const oddNumers = [1,3,5,7];

// to access it 
console.log( oddNumers[1] );

// but javascript is dynamically typed so, we can do any kind of reassignement 

// example

let a = "Hagos";
a=28;
a=true;
console.log(a) // the last variable wins
