const sendForm = () => {
    const errorMessage = 'что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = ' Спасибо! Мы скоро свяжемся';
 
    const mainForm = document.getElementById('form1'),
        bottomForm = document.getElementById('form2'),
        modalForm = document.getElementById('form3');
 
    const statusMessage = document.createElement('div');
 
    const formCheck = (currentForm) => {
    currentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        currentForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
 
        let formData = new FormData(currentForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
    const allInput = currentForm.querySelectorAll('input');
        allInput.forEach((elem) => {
            elem.value = '';
        });
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('not 200');
                }
            statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
        });
    });
   };

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(body)
      });
    };
    formCheck(mainForm);
    formCheck(bottomForm);
    formCheck(modalForm);

  };

  export default sendForm;