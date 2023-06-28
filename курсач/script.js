save.addEventListener('click', () =>{
    if (password.value.length < 7 || password.value.length > 15 ) {
        alert('Пароль должен быть от 7 до 15 символов');
    } else if (!(/[A-Z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в верхнем регистре!');
    } else if (!(/[a-z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в нижнем регистре!');
    } else if (!(/[0-9]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну цифру!');
    } else if (!(/[!@#$%^&*]/.test(password.value))) {
        alert(' Пароль должен хотя бы один спецсимвол !@#$%^&* !');
    } else if ((/[^!@#$%^&*A-Z-a-z-0-9]/.test(password.value))) {
        alert('Пароль содержит недопустимый символ! Разрешены английские буквы в верхнем и нижнем регистер, цифры и спецсимволы !@#$%^&*');
    } else if (password.value != repeat.value) {
        alert('Повтор пароля не совпадает!');
    } else {
        localStorage.clear();
        localStorage.setItem(login.value, password.value);
        window.location.href = 'login.html';
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

dicontrol.addEventListener('click', () => {
    if(repeat.getAttribute('type') == 'password') {
        dicontrol.classList.add('view');
        repeat.setAttribute('type', 'text');
    } else {
        dicontrol.classList.remove('view');
        repeat.setAttribute('type', 'password');
    }
});

generate.addEventListener('click', () => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXY";
    let passwordLength = 10;
    let pass = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        pass += chars.slice(randomNumber, randomNumber + 1)
    }

    password.value = pass;
    console.log(pass);

});

