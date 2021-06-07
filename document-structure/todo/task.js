'use strict';

const tasksAdd = document.getElementById('tasks__add'),
      input = document.getElementById('task__input'),
      taskList = document.getElementById('tasks__list'),
      form =document.getElementById('tasks__form');


form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `
        input.value = '';
    }

});

taskList.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('task__remove')) {
        e.target.parentElement.remove();
    }
});

