// determines the accessibility / visibility of variables  

// Block scope

// variable can not be accessed outside the given scope
if(true) {
    let name = 'Nigus';
    console.log("name", name);
}

// function scope 
    // dectates that variables defind inside a function are not accessible outside of the function 
    function add(a, b) {
        const name = "Someone"; // this has function scope 
        
    }

// global scope  
   // the scope which is accessible everywhere in the js file
   // global variable declared doesnt override the scope or function variable, the scope or function variable always wins 
   const name = "Age"; // this has global scope and doesn't override the above names, 
                       // if used outside of the above scope and function, this wins 