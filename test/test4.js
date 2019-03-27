// var str = "Widget";

// if (str.indexOf("get")) {
//   console.log( 'совпадение есть!' );
// } else console.log('No');

//=============================//

// var str = "Ёлки";

// alert( str.localeCompare("Яблони") );
// порівнює
//==========================//

// function ucFirst(str)
// {
//     let first = str[0].toUpperCase();
//     let other = str.substring(1);

//     return first + other;
// }

// var readline = require('readline-sync');
// do{
//     var word = readline.question("Word: ");
// }while( word =="");

// console.log(ucFirst(word));

//==========================//

// function checkSpam(str)
// {
//     str = str.toLowerCase();
//     if(~str.indexOf("viagra") || ~str.indexOf("xxx")){
//         return true;
//     }else return false;
// }
// var readline = require('readline-sync');
// var set_of_word = readline.question("Words: ");

// console.log(checkSpam(set_of_word));

//===================================//

function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + '...';
      // итоговая длина равна maxlength
    }
  
    return str;
  }
  
  console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
  console.log( truncate("Всем привет!", 20) );
  