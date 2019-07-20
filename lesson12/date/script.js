let date = new Date();

var currentHours = date.getHours()
if (currentHours < 12) {
    document.write('Доброе утро')
} else if (currentHours < 18) {
    document.write('Добрый день')
} else if (currentHours < 22) {
    document.write('Добрый вечер')
  }else {
    document.write('Доброй ночи')
}

document.write("<br>");


function getWeekDay(date) {
    let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  
    return days[date.getDay() - 1];
  }
document.write('Сегодня: ' + getWeekDay(date));
document.write("<br>");

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


document.write('Текущее время: '+ time);
document.write("<br>");

function newYear(){
    let currentYear = date;
    let newYear = new Date("January, 01, 2020");
    let days = (newYear - currentYear)/(1000*60*60*24);
    days = Math.floor(days);
    return days;
}
newYear();

document.write('До Нового года осталось ' + newYear() + ' дней');