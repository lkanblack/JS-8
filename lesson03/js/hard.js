'use strict'

let lang = prompt('Выбирите ru или eng ');
var d = new Date();
var options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
  weekday: 'long',
};

/*
// С ПОМОЩЬЮ if 

if(lang === 'ru') {
    alert(d.toLocaleString('ru', options));
} else if(lang === 'eng'){
    alert(d.toLocaleString('en', options));
} else {
    alert('Выбор языка очень важен!');
}
*/

/*
// С ПОМОЩЬЮ switch-case

switch (true) {
    case (lang == 'ru') :
      alert('switch: ' + d.toLocaleString('ru', options) );
      break;
    case ( lang == 'eng'):
        alert('switch: ' + d.toLocaleString('en', options) );
      break;
  }
*/



/*
// C ПОМОЩЬЮ МНОГОМЕРНОГО МАССИВА

  let arr = [
    [( lang == 'ru') ? alert(d.toLocaleString('ru', options)) : ''],
    [( lang == 'eng') ? alert(d.toLocaleString('en', options)) : '']
  ];
*/

  //-------------------------------------------------------- 2 -------------------------------------------------------.
  /*
  let namePerson = prompt('Введите ваше имя');

  var message = (namePerson == 'Артем') ? 'Директор' :
  (namePerson == 'Максим') ? 'Преподаватель' : 'студент';
  console.log(message);
  */