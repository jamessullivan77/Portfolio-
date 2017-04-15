
document.addEventListener("DOMContentLoaded", function(){

var v1 = $('#intro');
var v2 = $('#background');
// comment out
// v1.fadeIn().delay(14000).hide(0);

v2.hide().delay().show(0);


// $('#github').show(0).delay().hide();

// $('#linked_in').show(0).delay().hide();

// $('#google').show(0).delay().hide();

    //delay(14000)
// 0        15000
$('#welcome').hide().delay().slideDown(2000);
// 2000     17000
$('#james').hide().delay(2000).slideDown(2000);
// 3000     18000
// $('#profession').hide().delay(3000).slideDown(2000);
// // 3000     18000
// $('#profession_2').hide().delay(3000).slideDown(2000);
// 4000
$('#welcome').hide().delay(2000).slideUp(2000);
// 4000
$('#james').delay(2000).animate({top: '300px'}, 1000);

// 2000
// $('#profession').delay(2000).animate({top: '150px', left: '-=250px'}, 1000);
// // 2000
// $('#profession_2').delay(2000).animate({top: '150px', left: '+=300px'}, 1000);

$('#nav_bar_left', '#nav_bar_right').hide(8000);

$('#nav_bar_left').hide().delay(8000).show().animate({ width: '700px'});

$('.home').hide(1);

$('.home').delay(8000).show(100);

$('.web_dev').hide(1);

$('.web_dev').delay(8000).show(100);

$('.about').hide(1);

$('.about').delay(8000).show(100);

$('.contact').hide(1);

$('.contact').delay(8000).show(100);

$('#nav_bar_right').hide().delay(8000).show().animate({ left: '-=700px', width: '700px'});

$('#circle').hide(0).delay(8000).show(200).addClass('animated bounceInDown');

$('#profession').click(function(){
  $('#james h2').animate({
    left: '-=280px', 
    fontSize: '310px'}, 1000)
}); 

  




// #####################################################
// # . in name opens github/linked_in
// ####################################################

// $('#james h2').animate({left: '+=30px'}, 200);

// $('#james h2').animate({left: '-=20px'}, 200);

// $('#james h2').animate({left: '+=20px'}, 200);

// $('#james h2').animate({left: '-=10px'}, 200);

// $('#github').hide().delay(12000).show(1000);

// $('#github').delay(100).animate({left: '-=80px'}, 400);

// $('#github').animate({left: '+=30px'}, 300);

// $('#github').animate({left: '-=20px'}, 300);

// $('#github').animate({left: '+=20px'}, 300);

// $('#github').animate({left: '-=7px'}, 300);

// $('#linked_in').hide().delay(12800).show(900);

// $('#linked_in').delay().animate({left: '-=80px'}, 400);

// $('#linked_in').animate({left: '+=30px'}, 300);

// $('#linked_in').animate({left: '-=20px'}, 300);

// $('#linked_in').animate({left: '+=20px'}, 300);

// $('#linked_in').animate({left: '-=10px'}, 300);

// $('#google').hide().delay(14000).show(800);





//#############################################
//to have image follow mouse
//#############################################
var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

// cache the selector
var follower = $("#neuron");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping, higher is slower
    xp += (mouseX - xp) / 5;
    yp += (mouseY - yp) / 5;
    follower.css({left:xp, top:yp});
    
}, 30);

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


// #######################################
// for media quary
// ######################################
// $(window).resize(function(){     

//        if ($('header').width() == 1920 ){

//          $('#nav_bar_right').hide().delay(8000).show().animate({ left: '-=2000px', width: '2000px'});  
//        }else{
//         $('#nav_bar_right').hide().delay(8000).show().animate({ left: '-=700px', width: '700px'});
//        } 

// });






    




        

});

  
