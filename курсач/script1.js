enter.addEventListener('click', () => {
    if(login.value != localStorage.key(0)) {
        alert('Пользователь не найден');
        console.log(localStorage.key(0));
    } else if (password.value != localStorage.getItem(login.value)) {
        alert('Неверный пароль'); 
        console.log(localStorage.getItem(login.value));
    } else {
        window.location.href = 'index.html';
    }
});

control.addEventListener('click', () => {
    if(password.getAttribute('type') == 'password') {
        control.classList.add('view');
        password.setAttribute('type', 'text');
    } else {
        control.classList.remove('view');
        password.setAttribute('type', 'password');
    }
});
