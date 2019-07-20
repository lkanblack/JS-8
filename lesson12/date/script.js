let date = new Date();

let currentHours = date.getHours();
let content = document.getElementById('content');
let element = document.createElement('p');
let element1 = document.createElement('p');
let element2 = document.createElement('p');
let element3 = document.createElement('p');
content.appendChild(element);
if (currentHours < 12) {
    element.textContent = 'Доброе утро';
} else if (currentHours < 18) {
    element.textContent = 'Доброе день';
} else if (currentHours < 22) {
    element.textContent = 'Доброе вечер';
  }else {
    element.textContent = 'Доброй ночи';
}


function getWeekDay(date) {
    let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  
    return days[date.getDay() - 1];
  }
    element1.textContent = 'Сегодня: ' + getWeekDay(date);
    content.appendChild(element1);

let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    isPM = date.getHours() >= 12,
    isMidday = date.getHours() == 12;
    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    time = [hours, 
            minutes, 
            seconds].join(':') + (isPM ? ' pm' : 'am');


element2.textContent = 'Текущее время: '+ time;
content.appendChild(element2);

function newYear(){
    let currentYear = date;
    let newYear = new Date("January, 01, 2020");
    let days = (newYear - currentYear)/(1000*60*60*24);
    days = Math.floor(days);
    return days;
}
newYear();

element3.textContent = 'До Нового года осталось ' + newYear() + ' дней';
content.appendChild(element3);