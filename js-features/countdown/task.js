'user strict';

function timer() {
    const timerId = document.getElementById("timer");
    if (+timerId.textContent === 50) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!"); 
        location = 'https://netology.ru/';
    }

    timerId.textContent--;   
}

const interval = setInterval(timer, 1000);

