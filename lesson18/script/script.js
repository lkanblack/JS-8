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

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItem = menu.querySelectorAll('ul>li>a');
            const handlerMenu  = () => {
                menu.classList.toggle('active-menu');
            }; 

            document.addEventListener('click', (event) => {
                let target = event.target;
                if(target.closest('.menu') == btnMenu){
                    handlerMenu();
                }else if (target == closeBtn){
                    handlerMenu();
                }else if (!target.closest('.menu')){
                    menu.classList.remove('active-menu');
                }
                else if(target){ 
                    menuItem.forEach((item, i) => {
                        if(item === target){
                            handlerMenu(i);
                        }
                    });
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
      
      //add dots

      const addDots = () =>{
        let dotsList = document.querySelector('.portfolio-dots'),
        slidesAmount = document.querySelectorAll('.portfolio-item');
        let firstDot = dotsList[0];

        slidesAmount.forEach((event)=>{
            event = document.createElement('li');
            event.classList.add('dot');
            dotsList.appendChild(event);
        }); 

        let dot = document.querySelector('.dot');
        dot.classList.add('dot-active');
      };

      addDots();


      // slider
    
      const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0;
        let interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSLide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        
        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSLide(slide, currentSlide, 'portfolio-item-active');
            nextSLide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSLide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('#arrow-right, #arrow-left, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            

            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if(target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((element, index) => {
                    if(element === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            if(currentSlide < 0){
                currentSlide = slide.length -1;
            }
            nextSLide(slide, currentSlide, 'portfolio-item-active');
            nextSLide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover',(event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSLide();
            }
        });

        slider.addEventListener('mouseout',(event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(2000);
      }

      slider();

      // data attributes

      const dataAttr = () =>{
        let command = document.querySelector('.command'),
            commandImg = command.querySelectorAll('.command__photo'),
            origImg;
            
            commandImg.forEach((e) => {
                e.addEventListener('mouseenter',(e) => {
                    origImg = event.target.src;
                    event.target.src = event.target.dataset.img;
                });
                e.addEventListener('mouseleave', (e) =>{
                    event.target.src = origImg;
                });
            });

      };

      dataAttr();

      // calculator number validation
      
      const calcValidation = () => {
        let calcBlock = document.querySelector('.calc-block'),
            calcInputs = calcBlock.querySelectorAll('input');
            calcInputs.forEach((e)=>{
                e.value = e.value.replace(/\D/g, '');
            });
      };

      calcValidation();

      // calculator 
    
      const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                 squareValue = +calcSquare.value;



                 if(calcCount.value > 1){
                    countValue += (calcCount.value -1) / 10;
                 }

                 if(calcDay.value && calcDay.value < 5){
                     dayValue *= 2;
                 } else if (calcDay.value && calcDay.value < 10){
                     dayValue *= 1.5;
                 }


                 if(typeValue && squareValue){
                     total =  price * typeValue * squareValue * countValue * dayValue;
                 }

            totalValue.textContent = total;
        };


        calcBlock.addEventListener('change',(e)=>{
            const target = event.target;
            //if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') ||////////target.matches('.calc-count')){
                
            //}
            //if(target === calcType || target === calcSquare || target === calcDay || target === calcCount){
              //  console.log(1);
            //}

            if(target.matches('select') || target.matches('input')) {
                countSum();
            }


        });

      }

      calc(100);

      // send form  AJAX

      const sendForm = () => {
        // сообешния которые мы будет передавать пользователю 
        const errorMessage = 'что то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = ' Спасибо! Мы скоро свяжемся';
        // получаем форму отпарвки 
        const form = document.getElementById('form1');
        
        const statusMessage = document.createElement('div');

        // при нажатии на кнопку submit будет работать на всю форму 

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent  = loadMessage;
            const formData = new FormData(form);
            let body = {};
            const postData = (body) => {
                return new Promise((resolve, reject) => {
    
                    const request = new XMLHttpRequest(); 
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'multipart/form-data');
                    request.send(JSON.stringify(body));
                    request.addEventListener('readystatechange', () => {
    
                    if(request.readyState !== 4){
                        return; 
                    }
                    if(request.status === 200){
                        resolve();
                    } else {
                        reject(request.status)
                    }
                });
                
                }) 
            } 
            formData.forEach((val, key) => {
                body[key] = val; 
            });
            postData(body, ()=>{
                statusMessage.textContent = successMessage;
                form.reset();
            },(error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            
            postData(body)
            .then(() => statusMessage.textContent = loadMessage)
            .then(() => statusMessage.textContent = successMessage)
            .catch(() => statusMessage.textContent = errorMessage);
        });

      };

      sendForm();

      // modal form send
      const modalFormSend = () => {
        const errorMessage = 'что то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = ' Спасибо! Мы скоро свяжемся';
        const form = document.getElementById('form3');
        
        const statusMessage = document.createElement('div');
            statusMessage.style.color = "#fff";

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent  = loadMessage;
                const formData = new FormData(form);
                let body = {};
                const postData = (body) => {
                    return new Promise((resolve, reject) => {
        
                        const request = new XMLHttpRequest(); 
                        request.open('POST', './server.php');
                        request.setRequestHeader('Content-Type', 'multipart/form-data');
                        request.send(JSON.stringify(body));
                        request.addEventListener('readystatechange', () => {
        
                        if(request.readyState !== 4){
                            return; 
                        }
                        if(request.status === 200){
                            resolve();
                        } else {
                            reject(request.status)
                        }
                    });
                    
                    }) 
                } 
                formData.forEach((val, key) => {
                    body[key] = val; 
                });
                postData(body, ()=>{
                    statusMessage.textContent = successMessage;
                    form.reset();
                },(error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
                
                postData(body)
                .then(() => statusMessage.textContent = loadMessage)
                .then(() => statusMessage.textContent = successMessage)
                .catch(() => statusMessage.textContent = errorMessage);
            });

      };

      modalFormSend();

        // bottom from send
      const bottomFormSend = () => {
        const errorMessage = 'что то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = ' Спасибо! Мы скоро свяжемся';
        
        const form = document.getElementById('form2');
        const statusMessage = document.createElement('div');
            statusMessage.style.color = "#fff";
            

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent  = loadMessage;
            const formData = new FormData(form);
            let body = {};
            const postData = (body) => {
                return new Promise((resolve, reject) => {
    
                    const request = new XMLHttpRequest(); 
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'multipart/form-data');
                    request.send(JSON.stringify(body));
                    request.addEventListener('readystatechange', () => {
    
                    if(request.readyState !== 4){
                        return; 
                    }
                    if(request.status === 200){
                        resolve();
                    } else {
                        reject(request.status)
                    }
                });
                
                }) 
            } 
            formData.forEach((val, key) => {
                body[key] = val; 
            });
            postData(body, ()=>{
                statusMessage.textContent = successMessage;
                form.reset();
            },(error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            
            postData(body)
            .then(() => statusMessage.textContent = loadMessage)
            .then(() => statusMessage.textContent = successMessage)
            .catch(() => statusMessage.textContent = errorMessage);
        });

        
      };

      bottomFormSend();
      

    // form validation

       const formValidation = () => {
        let forms = document.querySelectorAll('.form-phone');
            forms.forEach((elem)=>{
                elem.addEventListener('input', () => {
                    elem.value = elem.value.replace(/[^\+\d]/g, '');
                })
            }); 
      };

      formValidation();
    // cyrillic validation

    const cyrControl = () => {
        let names = document.querySelectorAll('input[name*="user_name"]'),
            message = document.querySelectorAll('input[name*="user_message"]');
            console.log(message);
        names.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^ А-Яа-яЁё]/,'');
            })
        });
        message.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^ А-Яа-яЁё]/,'');
            })
        });
    }
    cyrControl();
});


