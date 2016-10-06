$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
$('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({'left':'1020px'},500,function() {
      $('.hadouken').hide();
      $('.hadouken').css('left', '520px');
    }
  );
  })
  .mouseup(function(){
    $('.ryu-throwing').hide();
  $('.ryu-ready').show();
});
$('.main').keydown(function(){
  alert('Test');
  $('ryu-still').hide();
  $('ryu-cool').show();
});
});
$(document).ready(function(){
  playMusic();
});

function playMusic () {
  $('#music')[0].volume = 0.2;
  $('#music')[0].load();
  $('#music')[0].play();
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
