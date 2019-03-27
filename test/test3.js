// function factorial(n)
// {
//   let result = 1;

//   while (n>0)
//   {
//       result = result * n;
//       n--;
//   }

//   return result;
// }

// var readline = require('readline-sync');

// var n;

// n = readline.question('number: ');

// console.log(factorial(n));

//=====================================//


// function factorial(n)
// {
//  if(n != 1)
//  {
//     return n * factorial(n-1);

//  }else return n;
// }

// var readline = require('readline-sync');



// console.log(factorial(readline.question('number: ') ))


//======================================//


function fib(n)
{
    return n<=1 ? n : fib(n - 1) + fib(n + 2);

}

var readline = require('readline-sync');



 console.log(fib(readline.question('number: ') ))


