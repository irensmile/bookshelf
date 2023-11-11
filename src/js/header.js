//burger-js
const ToggleEl = document.querySelector('.box-toggle');
const mobMenuEl = document.querySelector('.mob-menu');
const boxMobMenuEl = document.querySelector('.box-mob-menu');

ToggleEl.addEventListener('click', onClickToggle);
function onClickToggle(event) {
  event.currentTarget.classList.toggle('active');
}

mobMenuEl.addEventListener('click', onClickMobMenu);
function onClickMobMenu(event) {
  event.currentTarget.classList.toggle('active');
  boxMobMenuEl.classList.toggle('active');

  const body = document.querySelector('body');
  if (boxMobMenuEl.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

// document.querySelector('#bestsellers').classList.add('active');