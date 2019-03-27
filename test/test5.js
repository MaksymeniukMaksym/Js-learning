// var user = {};

// user.name = 'Bob';
// user.surname = 'Frank';
// user.name = 'Jonh';
// delete user.name;

//=================================//

// var salaries = {
//     "First": 100,
//     "Second": 300,
//     "Third": 250
// };
// var sum = 0;
// for(var name in salaries){
    
//     sum += salaries[name];
// }

// console.log(sum);

//===========================================//

// let styles = ["Jas", "Bluz"];
// styles.push("RoknRol");
// styles[styles.length - 2 ] = "Classic";
// console.log( styles.shift() );
// styles.unshift("Rap", "Reggy");

//=======================================//

// var arr = ["Aplle", "Orange", "Opinion", "Lemon"];
// var rand = Math.floor(Math.random() * arr.length);

// console.log(arr[rand]);


//========================================//

// var readline = require('readline-sync');
// let  number;
// let arr = 0;

// while(true){
//     number = readline.question("Number: ");
//     if(number == '' || number == null || isNaN(number)) break;
//     arr += +number;
// }
// console.log(arr);

//====================================//
// if ([].indexOf) {

//     var find = function(array, value) {
//       return array.indexOf(value);
//     }
  
//   } else {
//     var find = function(array, value) {
//       for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) return i;
//       }
  
//       return -1;
//     }
  
//   }
// arr = ["test", 2, 1.5, false];

// console.log( find(arr, "test") ); // 0
// console.log( find(arr, 2) ); // 1
// console.log( find(arr, 1.5) ); // 2

// console.log( find(arr, 0) ); // -1

//======================================//

// function filterRange(arr, a, b){
//     var arr2 = [];
  
//     for (var i = 0; i < arr.length; i++){
//         if( a <= arr[i] && arr[i] <= b){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// var arr = [5, 4, 3, 8, 0];
// var filtered = filterRange(arr, 3, 5);

// console.log(filtered);

//=================================//

// var arr = [];

// for (var i = 2; i < 100; i++) {
//   arr[i] = true
// }


// var p = 2;

// do {
  
//   for (i = 2 * p; i < 100; i += p) {
//     arr[i] = false;
//   }

  
//   for (i = p + 1; i < 100; i++) {
//     if (arr[i]) break;
//   }

//   p = i;
// } while (p * p < 100); 

// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     sum += i;
//   }
// }



// console.log( sum );

//=======================================//


// var names = 'Маша, Петя, Марина, Василий';

// var arr = names.split(', ');

// for (var i = 0; i < arr.length; i++) {
//   alert( 'Вам сообщение ' + arr[i] );
// }


//=======================================//