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