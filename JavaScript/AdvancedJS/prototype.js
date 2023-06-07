function person(fn, ln) {
    this.firstname = fn;
    this.lastname = ln;
}

const per1 = new person('hagos', 'haftu');
const per2 = new person('nigus', 'fam');

per1.getFullName = function() {
    return this.firstname+ ' ' + this.lastname;
}
console.log(per1.getFullName()) // hagos haftu


// using prototype
person.prototype.getFullName =  function() {
    return this.firstname + ' ' + this.lastname;
}
console.log("After the prototyping")
console.log(per1.getFullName())
console.log(per2.getFullName())
// hagos haftu
// nigusfam




