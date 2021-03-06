// slider

var dot = document.querySelectorAll('.dot');
var slide = document.querySelectorAll('.slide');
var current = 0;

dot.forEach(function(e, i) {
  e.addEventListener('click', function() {
    if (i !== current) {
      slide[current].classList.add('hidden');
      slide[i].classList.remove('hidden');
      dot[current].classList.remove('dot-active');
      dot[i].classList.add('dot-active');
      current = i;
    }
  });   
});


// popup

var body = document.querySelector('body');
var container_popup = document.querySelector('.container-popup');
var popup = document.querySelector('.container-popup');
var popup__open = document.querySelector('.contacts__card .btn');
var popup__close = document.querySelector('.popup__close');

popup__open.addEventListener('click', function() {
  body.style.overflow = 'hidden';
  popup.classList.remove('hidden');
});

popup__close.addEventListener('click', function() {
  body.style.overflow = "visible";
  popup.classList.add('hidden');
});

popup.addEventListener('click', function(event) {
  if (event.target == this) {
    popup.classList.add('hidden');   
  }  
  body.style.overflow = "visible";
});


// description

var templates__item = document.querySelectorAll('.templates__item');
var templates__description = document.querySelectorAll('.templates__description');
var templates__link = document.querySelectorAll('.templates__link');

templates__link.forEach(function(e, i) {
  e.addEventListener('focus', function() {
    templates__description[i].classList.add('templates__description-show');
    templates__item[i].classList.add('templates__item-browser-dark');
  });   
});

templates__link.forEach(function(e, i) {
  e.addEventListener('blur', function() {
    templates__description[i].classList.remove('templates__description-show');
    templates__item[i].classList.remove('templates__item-browser-dark');
  });   
});