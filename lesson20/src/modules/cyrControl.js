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
};

export default cyrControl;