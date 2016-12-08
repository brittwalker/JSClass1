//Implement the red light using jQuery. Don't forget to add the script tags.
var bounce = new Bounce();
bounce.scale({
  from: {x:0.1, y:0.1},
  to: {x:1, y:1}
});


$('#stopButton').click(function (){
  $('#stopLight').addClass('red animationtarget');
  $('#slowLight').removeClass('yellow animationtarget');
  $('#goLight').removeClass('green animationtarget');
  bounce.applyTo($('.animationtarget'));
});

$('#slowButton').click(function (){
  $('#stopLight').removeClass('red animationtarget');
  $('#slowLight').addClass('yellow animationtarget');
  $('#goLight').removeClass('green animationtarget');
  bounce.applyTo($('.animationtarget'));
});

$('#goButton').click(function (){
  $('#stopLight').removeClass('red animationtarget');
  $('#slowLight').removeClass('yellow animationtarget');
  $('#goLight').addClass('green animationtarget');
  bounce.applyTo($(".animationtarget"));
});
