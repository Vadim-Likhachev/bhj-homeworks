'use strict';

const chatWidget = document.querySelector('.chat-widget'),
      messages = document.querySelector( '.chat-widget__messages' ),
      chatInput = document.getElementById('chat-widget__input');


let date = new Date();
  

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatInput.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
        ${chatInput.value}
        </div>        
        `
        chatInput.value = "";

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${botAnswer()}</div>
        </div>
        `

        messages.lastElementChild.scrollIntoView();
    }
});

function botAnswer() {
  let botSays = [
        "До свидания!",
        "Таким, как вы, не отвечаем",
        "Устал от вас...",
        "Ничего мы вам не продадим",
        "Не нравитесь вы мне",
        "Нет настроения этим заниматься",
        "У вас других дел нет?",
        "Хотелось бы вам ответить... А нет, не хотелось!",
        "Сказала она"
      ],
      random = Math.floor(Math.random() * botSays.length);

  return botSays[random];
}

