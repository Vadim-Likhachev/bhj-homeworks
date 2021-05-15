'use strict';

const dropdownValue = document.querySelector('.dropdown__value'),
      dropdownList = document.querySelector('.dropdown__list'),
      dropdownItem = [...document.querySelectorAll('.dropdown__item')];

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});



dropdownItem.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active')
    });
});

