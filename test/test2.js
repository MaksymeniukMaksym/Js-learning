function sumTo(n)
{
    let sum = 0;
    for(var i = 1; i <= n; i++) {
        sum += i;
    }

return sum;
}

var readline = require('readline-sync');


var n;
n = readline.question('number: ');


console.log(sumTo(n));