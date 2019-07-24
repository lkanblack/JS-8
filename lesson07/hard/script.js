let block = document.querySelector('.block'),
    par = document.createElement('p'),
    date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

block.appendChild(par);

function addZero(num){
	if (num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}
par.textContent = hours + ':' + minutes + ':' + addZero(seconds) + ' ' + addZero(day) + '.' + addZero(month) + '.' + year;