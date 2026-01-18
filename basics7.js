//module.export==> This will export currant class and this is visible to all other classes where we can import same
module.exports=
class Person
{
    age=25;

    //Getter Method
    get location()
    {
        return "Canada";
    }

    //Constructor==> Constructor is a method which will execute by default when you create objcet
    constructor(firstName,lastName)
    {
        //this .firstName ==> This will create new property as firstName in currant class objcet
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
    //Method
    fullName()
    {
        console.log(this.firstName+this.lastName);
    }


}

// let person=new Person("Om","More");
// let person1=new Person("Sumya","More");
// console.log(person.age);
// console.log(person.location);
// person.fullName();
// person1.fullName();