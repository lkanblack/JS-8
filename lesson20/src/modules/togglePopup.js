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

export default togglePopup;