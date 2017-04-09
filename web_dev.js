document.addEventListener('DOMContentLoaded', function(){

$('#nav_bar_left', '#nav_bar_right').hide(800);

$('#circle').hide(0).delay(200).show(200).addClass('animated bounceInDown');

$('#nav_bar_left', '#nav_bar_right').hide(700);

$('#nav_bar_left').hide().delay(700).show().animate({ width: '700px'});

$('.home').hide(1);

$('.home').delay(800).show(100);

$('.web_dev').hide(1);

$('.web_dev').delay(800).show(100);

$('.about').hide(1);

$('.about').delay(800).show(100);

$('.contact').hide(1);

$('.contact').delay(800).show(100);

$('#nav_bar_right').hide().delay(800).show().animate({ left: '-=700px', width: '700px'});

//implimenting Scroll Magic//
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#circle_1'
})

.setClassToggle('#circle_1', 'fade-in')
.addTo(controller);



var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#circle_2'
})

.setClassToggle('#circle_2', 'fade-in')
.addTo(controller);

});

