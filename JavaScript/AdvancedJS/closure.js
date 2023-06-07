// combination of function bundled together with references to its sourrounding state. 
// closures are created every time a function is created at function creation time
// is combination of funciton 

function outer() {
    let counter=0;
    function inner() {
        counter++;
        console.log(counter)
    }
    return inner;
}

const fn = outer()

fn()
fn()

// output 1, 2, because the inner has access to the outer variable counter



