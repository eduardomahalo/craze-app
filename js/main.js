function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

// Testimonials functions

// Carousel pure JS
var controls = document.querySelectorAll('#testimonials-controls .bt-nav');

var currentSlide = 0;
var slideInterval;

changeTestimonial(0,true);

function nextSlide() {
  var testimonials = document.querySelectorAll('#testimonials-carousel .testimonial');

  removeClass(testimonials[currentSlide],'showing');
  currentSlide = (currentSlide+1)%testimonials.length;
  addClass(testimonials[currentSlide],'showing');

  curNav(currentSlide);
}

function changeTestimonial(i,bPlay){
  clearInterval(slideInterval);
  var testimonials = document.querySelectorAll('#testimonials-carousel .testimonial');

  if(testimonials.length){
    removeClass(testimonials[currentSlide],'showing');
    currentSlide = i;
    addClass(testimonials[currentSlide],'showing');

    // Change the button ref to the slide selected
    var active = document.querySelectorAll('#testimonials-controls .active');
    curNav(currentSlide);
    if(bPlay == true) slideInterval = setInterval(nextSlide,4000);
  }
}

function curNav(i){
  // Change the button ref to the slide selected
  var active = document.querySelectorAll('#testimonials-controls .active');
  
  if(active[0]){
    console.log(active[0].className);
    removeClass(active[0],'active');
  }
  
  addClass(controls[i],'active');
}

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#videoWrapper").fitVids();
  });