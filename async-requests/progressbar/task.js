'use strict';

const progress = document.querySelector('#progress'),
      form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.upload.addEventListener('progress', (e) => {
          const  {loaded, total} = e;
          progress.value = (loaded / total).toFixed(2);
        });
        xhr.send(new FormData(form));
    });