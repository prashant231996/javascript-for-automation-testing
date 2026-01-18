//importing basics7 class object in basics4 class file
const Person=require("./basics7");
//block of code

function addNummbers(a,b)
{
    return a+b;
}

let sum=addNummbers(2,3);
console.log(sum);

//Anonymous Function==> Function do not have any name

// let sumOfIntegers= ()=>
// {
//     return 10+15;
// }

let sumOfIntegers= (a,b)=>a+b;

console.log(sumOfIntegers(10,20));

//===>Scope of var, let & const variables
/*
1) var==> global level/ Functionla level
2) let==> global level/ Block level {}
3) const==> global level/ Block level {}
*/

let person=new Person("Jyoti","More");
console.log(person.fullName());