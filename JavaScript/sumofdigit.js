let n=1234;
let sum=0;
for(i=0;i<=4;i++)
{
    let digit=n%10;
    sum= sum + digit;
    n=Math.floor(n/10);
}

console.log(sum);