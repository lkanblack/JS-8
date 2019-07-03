'use strict';
/*
let lang = prompt('Выбирите ru или eng ');
var d = new Date();
var options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
  weekday: 'long',
};
*/

let lang = prompt('Выбирите ru или eng ');
let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let eng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// С ПОМОЩЬЮ if 
/*
if(lang === 'ru') {
    alert(ru);
} else if(lang === 'eng'){
    alert(eng);
} else {
    alert('Выбор языка очень важен!');
}
*/


// С ПОМОЩЬЮ switch-case
/*
switch (true) {
    case (lang == 'ru') :
      alert('switch: ' + ru );
      break;
    case ( lang == 'eng'):
        alert('switch: ' + eng );
      break;
  }
*/



// C ПОМОЩЬЮ МНОГОМЕРНОГО МАССИВА
/*
  let arr = [
    [( lang == 'ru') ? alert(ru) : ''],
    [( lang == 'eng') ? alert(eng) : '']
  ];
*/

  //-------------------------------------------------------- 2 -------------------------------------------------------.
  /*
  let namePerson = prompt('Введите ваше имя');

  var message = (namePerson == 'Артем') ? 'Директор' :
  (namePerson == 'Максим') ? 'Преподаватель' : 'студент';
  console.log(message);
*/
