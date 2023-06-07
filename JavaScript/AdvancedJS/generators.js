// special class that simplify writing iterators and itrables 

function normalFunction() {
 console.log("Hello")
 console.log("World")
}

function* generatorFunction() {
    yield 'Hello' // pauses before printing the second value
    yield 'World'
}

const generatedObject = generatorFunction();

for(const word of generatedObject) {
    console.log(word)
}

// generator is an easy way to implement iterators and iterables, no need of next function and value stuff