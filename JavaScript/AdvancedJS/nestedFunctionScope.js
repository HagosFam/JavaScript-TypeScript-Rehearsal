
let a =20;
const outer = function() {
    const b = 30;
    const inner = function() {
        const c = 40;
        console.log(a,b,c);
    }
    // but if we call the inner function in this outer function body, it will definitly gives us the 10,20,30 output 
}
outer() // only this will be no output

// the concept here is, inner function can access outer function, but outer function cannot access inner function 
