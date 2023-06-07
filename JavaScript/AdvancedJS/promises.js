// a promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an aync actions eventual success value or failure reason

// promise

// is a proxy for value
// something that will return a respose, could be posetive or negative 


// promise is just an  object in js. it has three states = pending, fulfilled, and rejected


// why promises
// help us deal with async code in a far more simpler way compared to callbacks 

// Help us to avoid call back hell

const fulfilled = ()=>{
    console.log("fulfilled");
}

const rejected = ()=>{
    console.log("promise rejected");
}

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{

    }, 5000)
}).then(
fulfilled()
).catch(rejected)

