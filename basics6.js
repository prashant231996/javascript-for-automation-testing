//Object is a collection of properties

//1) Object Declaration
let person={
    "firstName":"Prashant",
    "lastName":"More",
    "age":29,
    "fullName":function()
    {
        console.log(this.firstName+this.lastName);
    }
}

//Printing all properties of object
console.log(person);
console.log(person.fullName());

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

//6) Check whether property is present in given object ot not
console.log("gender" in person);

//7) Iterate over all properties from given object
for(let key in person)
{
    console.log(person[key]);
}