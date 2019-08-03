function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60)% 60),
        hours = Math.floor(timeRemaining / 60 / 60),
        days = Math.floor(timeRemaining / 60 / 60 / 24);
        if(seconds < 10) {
            seconds = '0' + seconds;
        } else if (hours < 10){
            hours = '0' + hours;
        } else if (minutes < 10) {
            minutes = '0' + hours;
        }
        return {timeRemaining, hours, minutes, seconds};
    }
        function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent =  timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if(timer.timeRemaining > 0){
                setInterval(updateClock, 1000);
            } else if(timer.timeRemaining < 0){

            timerHours.textContent = 0 + '0';
            timerMinutes.textContent = 0 + '0';
            timerSeconds.textContent = 0 + '0';
            }
        }

        updateClock();
};

export default countTimer;