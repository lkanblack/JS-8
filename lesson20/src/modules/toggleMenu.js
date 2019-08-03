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
};

export default toggleMenu;