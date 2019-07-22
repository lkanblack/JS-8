'use strict';
let week = ['понедельник', 'вторник', 'среда','четверг','пятница','суббота','воскресенье'];
var date = new Date().getDay() -1;
let block = document.querySelector('.block');


for(let i = 0; i < week.length; i++){
    let element = document.createElement('p');
    block.appendChild(element);
    element.textContent = week[i];
    if(i == date){
        element.style.fontWeight = '900';
    } else if(week[i] == 'суббота' || week[i] == 'воскресенье') {
        element.style.fontStyle = 'italic';
    }
}