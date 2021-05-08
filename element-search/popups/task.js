'use strict';

const modalMain = document.getElementById("modal_main"),
      modalClose = [...document.getElementsByClassName("modal__close")],
      showSucces = modalMain.querySelector(".show-success"),
      modalSuccess = document.getElementById("modal_success");


modalMain.classList.add("modal_active");


modalClose.forEach(element => {
    element.onclick = () => {
        element.closest('.modal').classList.remove("modal_active");
    }
    
});

showSucces.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}
