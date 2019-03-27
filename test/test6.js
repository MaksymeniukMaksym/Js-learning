// var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

// var str = arr.join(';');

// alert( str ); // Маша;Петя;Марина;Василий

//====================================//

// var arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// alert( arr ); //  осталось ["Я", "JavaScript"]

//=======================================//

// var arr = ["Я", "изучаю", "JavaScript"];

// // с позиции 2
// // удалить 0
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");

// alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

//==================//

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
  
//   var arr = [ 1, 2, 15 ];
  
//   arr.sort(compareNumeric);
  
//   alert(arr);  // 1, 2, 15

//============================//

// var arr = [1, 2];

// var newArr = arr.concat([3, 4], 5); // то же самое, что arr.concat(3,4,5)

// alert( newArr ); // 1,2,3,4,5

//=============================//


// push/pop, shift/unshift, splice – для добавления и удаления элементов.
// join/split – для преобразования строки в массив и обратно.
// slice – копирует участок массива.
// sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
// reverse – меняет порядок элементов на обратный.
// concat – объединяет массивы.
// indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).



//===================================//

// function addClass(obj, cls) {
//     var classes = obj.className ?  obj.className.split(' ') : [];

//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return;
//     }
//     classes.push(cls);

//     obj.className = classes.join(' ');
// }

// var obj = {
//     className: 'open menu'
// };

// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// console.log(obj.className);


//=============================//


// function removeClass(obj, cls) {
//     var classes = obj.className.split(' ');
  
//     for (var i = 0; i < classes.length; i++) {
//       if (classes[i] == cls) {
//         classes.splice(i, 1); // удалить класс
//         i--; // (*)
//       }
//     }
//     obj.className = classes.join(' ');
  
//   }
  
//   var obj = {
//     className: 'open menu menu'
//   }
  
//   removeClass(obj, 'blabla');
//   removeClass(obj, 'menu')
//   alert(obj.className) // open


//======================================//

// function filterRangeInPlace(arr, a, b) {

//     for (var i = 0; i < arr.length; i++) {
//       var val = arr[i];
//       if (val < a || val > b) {
//         arr.splice(i--, 1);
//       }
//     }
  
//   }
  
//   var arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4);
//   alert( arr ); // [3, 1]

//===================================//

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });

//=====================================//


// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3

//===================================//

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10

//===================================//

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

//===================================//
// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

//===================================//
// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// arrLength = arr.map(function(name) {
//     return name.length;
// });

// console.log( arrLength );
//===================================//

//===================================//

//===================================//

//===================================//

//===================================//

