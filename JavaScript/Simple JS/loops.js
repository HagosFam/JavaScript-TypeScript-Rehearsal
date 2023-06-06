// for types of for loos
// for loop
for(i=0; i <5; i++) {
    console.log("prining i for the", i, "time" );
}

// while loop
let l = 10
while(l<15) {
    console.log("print i for the ", l, "time", "any other variable ");
    l++;
}

// do while loop
let k=0;
do {
    console.log("this will be printed any how");
} while (k>0) {
    console.log("this will not be printed");
}


// for each loop 
// for...in


// for (const key in person) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)
//     }
// }


// for...of
const arr = [1,3,5,7,9]

for (const iterator of arr) {
    console.log("Number", iterator)
}



















// const person = {
//     "firstname" : "Hagos",
//     "lastname" :"H",
//     "age":20,
//     "philosophy": "Liberal"
// }

// const oddNumbers = [1, 3,5,7]

// oddNumbers.forEach(element => {
//     console.log(element)
// });

// person.forEach(obj=>{
//     console.log(obj)
// })