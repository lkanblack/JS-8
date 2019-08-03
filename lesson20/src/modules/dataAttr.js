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

  export default dataAttr;