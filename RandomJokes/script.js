function show() {
    let animation = document.querySelectorAll('.animation');
    for (let i = 0; i<animation.length; i++) {
        animation[i].classList.add('active');
    }

    setTimeout(() => {
        for (let i = 0; i<animation.length; i++) {
            animation[i].classList.remove('active');
        }
    }, 4000); /*4s*/

    let list = ['Всем 2',
                'Обида на юмор - это современный способ самовыражения',
                'Больше всего из всех профессий я уважаю школьных учителей, которые не сели за убийство',
                'Весь семейный юмор строится на плохих воспоминаниях',
                'Когда у тебя есть старший брат ты всегда знаешь, как ты будешь одет через полгода',
                'Чем больше человек кичится, тем меньше в этом знаний',
                'Анонимность и безнаказанность лишают людей здравого смысла',
                'Не надо агрессией отвечать на агрессию, разбавьте ее добротой',
                'Актерское мастерство - это 50% таланта и 50% наблюдений',
                'Только русские говорят на английском четко, медленно и каждое слово дублируя жестами'];

    let rand = list[Math.floor(Math.random()*list.length)]; /* 0-1 0.6565646746841654 */
    
    setTimeout(() => {
        let joke = document.querySelector('.joke');
        joke.classList.add('active');
        joke.innerHTML = rand;
        setTimeout(() => {
            joke.classList.remove('active');
        }, 3000);
    }, 1000);
}