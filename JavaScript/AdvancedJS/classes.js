class Person {
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    sayMyName() {
        return this.firstName+ ' ' + this.lastName;
    }
}

const classP1 = new Person('Nigus', 'king')
console.log(classP1.sayMyName());

// inheritances
class superHero extends Person {
    constructor(fname, lname) {
        super(fname, lname);
        this.superHero = true;
    }
}

const batMan = new superHero('Bruce', 'Lester');
console.log(batMan.sayMyName());






