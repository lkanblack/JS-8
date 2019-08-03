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
export default addDots;
