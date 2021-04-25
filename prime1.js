function primeNumber()
{
var n;
var count=0;
var output;
n=document.getElementById("input").value;
for (var i=1 ; i<=n ; i++)
{
         if(n%i==0)
       {
       count=count+1;
        }
}
if(count==2)
        {
           output="Prime Number";
           document.getElementById("result").value=output;
            console.log("given number is a prime: "+n);
        }
else
    {
       ouput=" not a Prime Number";
       document.getElementById("result").value=ouput;
        console.log("given number is  not a prime: "+n);
    }
}