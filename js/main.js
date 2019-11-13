'use strict';

 const triggerBtn = document.querySelector('.nav-trigger');
 const nav= document.querySelector('.nav');
 const closeBtn = document.querySelector('.nav-close');

 console.log('holaaa')

function openNavMenu() {
  nav.classList.add('nav-open')
}
function closeNavMenu() {
  nav.classList.remove('nav-open')
}

closeBtn.addEventListener('click',closeNavMenu);
triggerBtn.addEventListener('click',openNavMenu);

