let lang = prompt('Выбирите ru или eng ');
var d = new Date();
var options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
};
/*
// с помощью if 
if(lang === 'ru') {
    alert(d.toLocaleString('ru', options));
} else if(lang === 'eng'){
    alert(d.toLocaleString('en', options));
} else {
    alert('Выбор языка очень важен!');
}
*/
/*
// с помощью switch-case
switch (true) {
    case (lang == 'ru') :
      alert('switch: ' + d.toLocaleString('ru', options) );
      break;
    case ( lang == 'eng'):
        alert('switch: ' + d.toLocaleString('en', options) );
      break;
  }
  */

 var arr = [
    ['ru'],
    ['eng']
  ];
   
  for(let j = 0; j < arr.length; j++) {
    for(let n = 2; n < arr.length; n++) {
        console.log('time');
    }
  }