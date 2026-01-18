//Inheritance is the main piller in object oriented programming
//One class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of other is known as subclass.(derived class,child class)
//The class whose properties are inherited is known as super class

const Person = require("./basics7");

class Employee extends Person
{
    get location()
    {
        return "Pune";
    }
    constructor(firstname,lastname)
    {
        //call parent class constructor
        super(firstname,lastname);
    }
   

}

 let employee=new Employee("Prashant","More");
 console.log(employee.fullName());
 console.log(employee.location);