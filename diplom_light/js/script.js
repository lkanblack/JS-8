

// header footer popup

const popup = () => {
    let callBtn = document.querySelectorAll('.call-btn'),
        popup = document.querySelector('.popup'),
        popup_close = document.querySelector('.popup-close');
        
        document.addEventListener('click', (event) => {
            let target = event.target;

            callBtn.forEach((e) => {
                if(target == e){
                    popup.style.display = "block";
                }
            });
            if(target == popup_close){
                popup.style.display = "none";
            } else if (target == popup){
                popup.style.display = "none";
            }
        });

}

popup();


// AJAX 

let mainForm = document.getElementById('mainForm'),
    captureForm = document.getElementById('capture-form'),
    directorForm = document.getElementById('director-form'),
    captureForm2 = document.getElementById('capture-form2');

const sendForm = (currentForm) => {
    const errorMessage = 'что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = ' Спасибо! Мы скоро свяжемся';
        allInputs = currentForm.querySelectorAll('input');
        allInputs.forEach(input => {
            let type = input.getAttribute('type');
            if(type == "number"){
                input.value = input.value.replace(/[^+\d]/gi, '');
            }
        });

    let statusMessage = document.createElement('div');
    currentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        currentForm.appendChild(statusMessage);

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage;
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                statusMessage.textContent = successMessage;
            } else {
                statusMessage.textContent = errorMessage;
            }
        })
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        const formData = new FormData(currentForm);
        request.send(formData);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

    });

};
sendForm(mainForm);
sendForm(captureForm);
sendForm(directorForm);
sendForm(captureForm2);


// accordeon

const accor = (accordeon) => {
    var i;
    for (i = 0; i < accordeon.length; i++) {
        accordeon[i].addEventListener("click", function(event) {
            event.preventDefault();
            let panel = this.nextElementSibling;
            if(panel.classList.contains("in")){
                panel.classList.remove("in");
            } else {
                panel.classList.add("in");  
            }
        });
    }
}

let  headers = document.querySelectorAll('.question-panel');
let calcPanels = document.querySelectorAll('.calc-panel');
accor(headers);
accor(calcPanels);


// calculator 

const calculator = () => {
    let firstSwitch = document.querySelector("input[type=checkbox]"),
        removableBlock = document.querySelector(".box-remove");

        firstSwitch.addEventListener('change', () => {
            if(firstSwitch.checked === true){
                removableBlock.style.display = "none";
            } else {
                removableBlock.style.display = "block";
            }
        })

        
}

calculator();


// more block 

const moreBlock = () => {
    let button = document.querySelector('.add-sentence-btn'),
        showBlock = document.querySelectorAll('.show-block');
    
    button.addEventListener('click', ()=> {
        showBlock.forEach((e)=>{
            e.classList.remove('hidden');
            e.classList.remove('visible-sm-block');
            button.style.display = "none";
        })
    })
}

moreBlock();