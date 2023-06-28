let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
var arr = [];
let checked = document.querySelectorAll('.checked');  

function update() {
    list.innerHTML = '';
    localStorage.clear();
    for(item in window.arr) {
        localStorage.setItem('item', JSON.stringify(window.arr));
        list.innerHTML += `<li data-li=${item}>${arr[item]}<span class='close' data-todo-id=${item} onclick=del(this.getAttribute('data-todo-id'))>х</span></li>`;
    }

}

function add() {
    let value = text.value;
    if (value=='') {
        alert('Введите пункт меню');
    } else {
        window.arr.push(value);
        update();
        document.querySelector('#text').value = '';
    }
}

text.addEventListener('keypress', (event) => {
    if (event.keyCode == 13){
        add();
    }
});

let checkedList = [];
list.addEventListener('click', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.classList.toggle('checked');
    }
    checked = document.querySelectorAll('.checked'); 
    console.log(checked)
});

function del(index) {
    window.arr.splice(index,1);
    update();
}

window.addEventListener('load', () => {
    let data = JSON.parse(localStorage.getItem('items'));
    if (data != null) {
        data.forEach(item => {
            window.arr.push(item);
        });
    }
        console.log(data)
});