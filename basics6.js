//Object is a collection of properties

//1) Object Declaration
let person={
    "firstName":"Prashant",
    "lastName":"More"
}

//2) Access properties of object
console.log(person.firstName);
console.log(person["lastName"]);

//3) Modify property of object
person.firstName="OM";
console.log(person.firstName);

//4) Adding new property in existing object
person.gender="Male";
console.log(person);

//5) Delete property from existing object
delete person.gender;
console.log(person);