'use strict';

let week = ['понедельник', 'вторник', 'среда','четверг','пятница',`<i>суббота</i>`,`<i>воскресенье</i>`],
today = new Date().getDay() -1;

for (let i = 0; i < week.length; i++) {
if (i == today) {
    document.write(`<p><b>${week[i]}</b></p>`);
}  else {
  document.write(`<p>${week[i]}</p>`);
}
}
console.log(week);