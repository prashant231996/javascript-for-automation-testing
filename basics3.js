let marks=Array(6);

let studentsMarks=new Array(10,20,30,40);

let studentIds=[1,2,3,4,5,6];
//Creating subarray from main array
let subarray=studentIds.slice(0,3);
console.log("Subarray is "+subarray);
//Retriving value frrom array
console.log(studentIds[3]);
//Assgn value in array
studentIds[3]=45;
console.log(studentIds);
//Get length of array
console.log(studentIds.length);
//Add element at the end of array
studentIds.push(23);
console.log("New array by adding element at end "+studentIds);
//Remove last elmenet from array
studentIds.pop();
console.log("New array by removing element at end "+studentIds);
//Adding new element at beginning
studentIds.unshift(100);
console.log(studentIds);
//Retrive index of particular element from array
console.log(studentIds.indexOf(100));
//Check wheather element is present or not in array
console.log(studentIds.includes(100));

let sum=0;
for(let i=0;i<studentIds.length;i++)
{
    sum=sum+studentIds[i];
}
console.log("Sum of elements are "+sum);

//JS Array Functions
//1)reduce
//Find sum of element of array
let total=studentIds.reduce((sum,mark)=>sum+mark,0);
console.log("Sum of elements are "+total);

//2)filter
//Create new array containing only even elements from array
let scores=[1,2,3,4,5,6]
let evenScores=[];
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);
let newFilterEvenScores=scores.filter(score=>score%2==0);
console.log("Filter array is "+newFilterEvenScores);

//3)map
let newMapScoreArray=newFilterEvenScores.map(score=>score*3);
console.log(newMapScoreArray);

let totalScore=newMapScoreArray.reduce((sumArray,score)=>sumArray+score,0);
console.log(totalScore);


let scores1=[1,2,3,4,5,6];

let score1Total=scores1.filter(score=>score%2==0).map(score=>score*3)
.reduce((sum,score)=>sum+score,0);
console.log(score1Total);

//Sorting of array in JS
//1)Sorting String arrays 
let fruits=["banana","mango","apple"];
fruits.sort();
console.log("Sorted array "+fruits);
//Sorting array in reverse or descending order
fruits.reverse();
console.log("Sorted array in descending order "+fruits);

//2) Sorting Integer numbers
let numbers=[12,3,14,19,11];
numbers.sort((a,b)=>a-b);
console.log("Sorted numbers are "+numbers)
//Sorting array in reverser or descending order
numbers.sort((a,b)=>b-a);
console.log("Sorted numbers in descending "+numbers)
