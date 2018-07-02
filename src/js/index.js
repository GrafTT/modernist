import $ from 'jquery';
import popper from 'popper.js';
import carousel from 'bootstrap/js/src/carousel';
import collapse from 'bootstrap/js/src/collapse';
import dropdown from 'bootstrap/js/src/dropdown';




const btn = document.querySelector('.contact__form_button');

btn.addEventListener('click', (e)=>{
  e.preventDefault();

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify({
      name: document.querySelector('[data-input=name]').value,
      email: document.querySelector('[data-input=email]').value,
      subject: document.querySelector('[data-input=subject]').value,
      text: document.querySelector('textarea.contact__form_input').value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res=>res.json())
  .then(data=>alert(`Success subsribe ${data.name}`))
})



import '../scss/style.scss';