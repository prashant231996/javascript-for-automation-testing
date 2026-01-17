let day='Sunday ';
//Retrive length of string
console.log(day.length);
//Retrive Substring from main string
console.log(day.slice(0,2));
//Retrive any character of string
console.log(day[1]);
//Spliting string based on some character
let splitDays=day.split("n");
console.log(splitDays[1].length);
//Trim ==>It will trim left & rignt White spaces.
console.log(splitDays[1].trim().length);
//Convering String to number
let date="23";
let nextDate="25";
let difference=parseInt(nextDate)-parseInt(date);
console.log(difference);
//Converting number to string
console.log(difference.toString());
//Concate 2 Strings
let newString=day+"is funday";
console.log(newString);
//Findind index of characters from string
let val=newString.indexOf("day");
console.log(val);
val=newString.indexOf("day",4);
console.log(val);
//Program to find number of times day occured in given string  ==>Sunday is funday
let count=0;
val=newString.indexOf("day");
while(val!==-1)
{
    count++;
    val=newString.indexOf("day",val+1);
}
console.log("Number of times day ocuured is "+count);

