var navToggle = document.querySelector('.main-nav__toggle');
var navToggleOpen = document.querySelector('.main-nav__toggle-icon--open');
var navToggleClose = document.querySelector('.main-nav__toggle-icon--close');
var mainNavMenu = document.querySelector('.main-nav__menu');

navToggleOpen.classList.remove('main-nav__toggle-icon--disabled');
navToggleClose.classList.add('main-nav__toggle-icon--disabled');
mainNavMenu.classList.add('main-nav__menu--disabled');

navToggle.addEventListener('click', function() {
  if (navToggleClose.classList.contains('main-nav__toggle-icon--disabled')) {
    navToggleClose.classList.remove('main-nav__toggle-icon--disabled');
    navToggleOpen.classList.add('main-nav__toggle-icon--disabled');
    mainNavMenu.classList.remove('main-nav__menu--disabled');
  }
  else {
    navToggleClose.classList.add('main-nav__toggle-icon--disabled');
    navToggleOpen.classList.remove('main-nav__toggle-icon--disabled');
    mainNavMenu.classList.add('main-nav__menu--disabled');
  }
})
