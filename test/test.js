var readline = require('readline-sync')

var user = readline.question("кто пришел?",' ');
 if( user == "Админ")
 {
    var password = readline.question("Пароль?"," ");
    password == "Черний Властелин" ? "Добро пожаловать!" :
     password == "Отмена" ? "Вход отменен" : "Пароль отменен" ; 
 }else if(user == "Отмена")
 {
    console.log("Вход отменен");
 }else console.log('Я вас не знаю');