'use strict';

const hasTooltips = [...document.querySelectorAll('a.has-tooltip')];
let activeHasTooltip;


const tooltipDiv = document.createElement('div');
tooltipDiv.className = "tooltip tooltip_active";


document.addEventListener('scroll', (evt) => tooltipDiv.remove()); 

hasTooltips.forEach((element) => 
   element.addEventListener('click', (evt) => {
      evt.preventDefault();
      let currentElement = evt.target;
      if (currentElement === activeHasTooltip ) {
         tooltipDiv.remove();
         activeHasTooltip = '';
         return;
      }
      activeHasTooltip = currentElement;
      document.body.append(tooltipTemplate(currentElement));
   }, false));

function tooltipTemplate(currentElement) {
   tooltipDiv.innerHTML = currentElement.title;
   let currentElementPosition = currentElement.getBoundingClientRect();
   tooltipDiv.setAttribute('style', `left: ${currentElementPosition.left}px; top: ${currentElementPosition.top + currentElementPosition.height}px`);
   return tooltipDiv;
}