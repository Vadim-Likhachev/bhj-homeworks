'use strict';

const cookie = document.getElementById("cookie"),
      cookieCounter = document.getElementById("clicker__counter"),
      cookieSpeed = document.getElementById("clicker__speed");
      let data = new Date();

cookie.onclick = function() {
    cookieCounter.textContent++;
    if (cookie.width === 400) {
        cookie.width = 200;
    }else {
        cookie.width = 400;
    }
    
    let speedClick = (1000 / (Date.now() - data) ).toFixed(2);
    data = Date.now();
    
    cookieSpeed.textContent = speedClick;
}