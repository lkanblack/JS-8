window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // timer
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
    }

    countTimer('23 july 2019');

    // меню 

    /*const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItem = menu.querySelectorAll('ul>li');
        
        const handlerMenu  = () => {
            menu.classList.toggle('active-menu');
        };
              
        btnMenu.addEventListener('click', handlerMenu);
        
        closeBtn.addEventListener('click', handlerMenu)

        menuItem.forEach((elem) => {
            elem.addEventListener('click', handlerMenu)
        })
    };

    toggleMenu();*/
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItem = menu.querySelector('ul');

            document.addEventListener('click', (event) => {
                let target = event.target;
                console.log(target);
                if(target.closest('.menu') == btnMenu){
                    menu.classList.toggle('active-menu');
                }else if (target == closeBtn){
                    menu.classList.toggle('active-menu');
                }else if(target == menu){
                    menu.classList.toggle('active-menu');
                } else if(target !== menuItem){
                    menu.classList.toggle('active-menu');
                }
              });
    }
    toggleMenu(); 



 

    // popup

    let count = 0;
    let mWidth = screen.width;
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

            popupBtn.forEach((elem) =>{
                elem.addEventListener('click', () =>{
                    popup.style.display = 'block';
                    if(mWidth > 768){
                        popupAnimation();
                    }
                });
                
            });

            popup.addEventListener('click', (event) => {
                let target = event.target;

                if(target.classList.contains('popup-close')){
                    popup.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if(!target){
                        popup.style.display = 'none';
                    }
                }
            });
    };

    togglePopup();


    // popup animation
    let popupContent = document.querySelector('.popup-content');
    popupContent.style.opacity = 0.1;
    console.log(popupContent);

    const popupAnimation = () => {
        if(count < 1){
            count += 0.01;
            popupContent.style.opacity = count;
            setTimeout(popupAnimation,1);
        }
    };

    // mobile version
    if(mWidth < 768){
        count = 1;
        popupContent.style.opacity = 1 ;
    };

    // smooth scroll
    /*
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 400,
    framesCount = 50;

    anchors.forEach(function(item) {
        item.addEventListener('click', function(element) {
            element.preventDefault();
          
          let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
          console.log(coordY);

          let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
              window.scrollBy(0, scrollBy);
            } else {
              window.scrollTo(0, coordY);
              clearInterval(scroller);
            }
          }, animationTime / framesCount);
        });
      });
    */

      // tabs

      const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length;i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else  {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');

                if(target){ 
                    tab.forEach((item, i) => {
                        if(item === target){
                            toggleTabContent(i);
                        }
                    });
                }    
        });
      };

      tabs();


});


