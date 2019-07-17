'use strict';
let week = ['понедельник', 'вторник', 'среда','четверг','пятница',`<i>суббота</i>`,`<i>воскресенье</i>`];
var date = new Date().getDay() -1;


for(let i = 0; i < week.length; i++){
    if(i == date){
        document.write(`<b>${week[i]}</b>`);
    } else {
        document.write(`<p>${week[i]}</p>`)
    }
}