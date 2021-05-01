'use strict';

let   dead = document.getElementById("dead"),
      lost = document.getElementById("lost"),
      activeElement;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 10; i++) {
    activeElement = getHole(i);

    activeElement.onclick = function() {
        if (getHole(i).classList.contains('hole_has-mole')) {
            ++dead.textContent;
            
            if (+dead.textContent === 10) {
                alert('YOU WIN');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }else {
            ++lost.textContent;
            if (+lost.textContent === 5) {
                alert('YOU LOSE');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}

