const flag=true;

if(!flag)
{
    console.log("Condtion satisfied");
}
else
{
    console.log("Condtion not satisfied");
}

let i=0;
while (i>10)
{
    console.log("Value of Variable is "+i);
    i++;
}

do
{
  console.log("Value of Variable is "+i);
}while(i>10);

console.log("******************")
let count=0;
for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0)
    {
        console.log("Value is "+k);
        count++;
    }
    if(count==3)
        break;
}