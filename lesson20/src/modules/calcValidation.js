const calcValidation = () => {
    let calcBlock = document.querySelector('.calc-block'),
        calcInputs = calcBlock.querySelectorAll('input');
        calcInputs.forEach((e)=>{
            e.value = e.value.replace(/\D/g, '');
        });
  };
export default calcValidation;