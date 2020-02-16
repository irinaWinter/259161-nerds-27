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