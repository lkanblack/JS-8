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
};

export default slider;