const formValidation = () => {
    let forms = document.querySelectorAll('.form-phone');
        forms.forEach((elem)=>{
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^\+\d]/g, '');
            })
        }); 
  };

  export default formValidation;