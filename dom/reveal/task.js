'use strict';

let  reveal = [...document.querySelectorAll('.reveal')],
     windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    reveal.forEach(item => {
       let coords =  item.getBoundingClientRect();
       if ((coords.top > 0 && coords.top < windowHeight) || (coords.bottom < windowHeight && coords.bottom > 0)) {
           item.classList.toggle('reveal_active');
       }
    });
});