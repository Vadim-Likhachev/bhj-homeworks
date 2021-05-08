'use strict';

const sliderItem = [...document.querySelectorAll('.slider__item')],
      sliderDots = [...document.querySelectorAll('.slider__dot')];

let activeSlider = 0;

document.querySelector('.slider__arrow_prev').onclick = () => {
    changeSlide(activeSlider - 1);
}

document.querySelector('.slider__arrow_next').onclick = () => {
    changeSlide(activeSlider + 1);
}

function changeSlide(slider) {
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('slider__item_active');
        sliderDots[i].classList.remove('slider__dot_active');       
    }

        activeSlider = slider;

        if (activeSlider === sliderItem.length) {
            activeSlider = 0;
        }

        if (activeSlider === -1) {
            activeSlider = sliderItem.length - 1;
        }

        sliderItem[activeSlider].classList.add('slider__item_active');
        sliderDots[activeSlider].classList.add('slider__dot_active');
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        if(sliderDots[i].classList.contains('slider__dot_active')) {
            return false
        }else {
            changeSlide(i);
        }
    }
}