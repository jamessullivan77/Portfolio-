// $('#profession').delay(2000).animate({top: '150px', left: '-=250px'}, 1000);

// $('#profession_2').delay(2000).animate({top: '150px', left: '+=300px'}, 1000);
$('#james').delay(700).animate({top: '300px'}, 800);

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

$('#profession h2').mouseover(function(){
  $('#profession h2').css("color", 'gold'); 
    // $('#gif_2').show();
});

$('#profession h2').mouseout(function(){
  $('#profession h2').css("color", 'white'); 
    // $('#gif_2').hide();
});

$('#profession_2 h2').mouseover(function(){
  $('#profession_2 h2').css("color", 'gold');
    // $('#gif').show(); 
});

$('#profession_2 h2').mouseout(function(){
  $('#profession_2 h2').css("color", 'white');
    // $('#gif').hide(); 
});

 $('#profession').mouseover(function(){
  $('#circle').removeClass('animated bounceInDown').delay(800).css({
    transition: '1s',
    transform: 'rotate(50deg)'})

});

$('#profession').mouseout(function(){
  $('#circle').delay(800).css({
    transition: '1s',
    transform: 'rotate(0deg)'})
});  

 $('#profession_2').mouseover(function(){
  $('#circle').removeClass('animated bounceInDown').delay().css({
    transition: '1s',
    transform: 'rotate(-50deg)'})

});  

$('#profession_2').mouseout(function(){
  $('#circle').delay(800).css({
    transition: '1s',
    transform: 'rotate(0deg)'})
});  