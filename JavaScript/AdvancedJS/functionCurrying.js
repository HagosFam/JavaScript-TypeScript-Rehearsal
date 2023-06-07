// is a process in funcitonal programming in which we transform a funciton with multiple arguments 
    // into a sequence of nesting functions that take one arguement at a time.

    // function f(a,b,c) is transformed to f(a) f(b) f(c)
        // used for inhanced readbility

    // simple example

    function sum(a,b,c) {
        return a+b+c;
    }

    // this can be transformed to
    function curry(fn) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return fn(a, b, c);
                }
            }
        }
    }

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(4))

/*
getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/games');
} 


on the component
this.service.getAll().subscribe(
   next(games):=> {
this.game = games
    },
   error(err):=> {
       con
    },
   onComplete:=> {

    }
)
*/

