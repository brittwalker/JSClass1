//Implement the red light using jQuery. Don't forget to add the script tags.
//var bounce = new Bounce();
//bounce.scale({
  //from: {x:0.1, y:0.1},
//  to: {x:1, y:1}
//});


$('#stopButton').click(function (){
  $('#stopLight').addClass('red');
  $('#slowLight').removeClass('yellow');
  $('#goLight').removeClass('green');
  //bounce.applyTo($('.animationtarget'));
});

$('#slowButton').click(function (){
  $('#stopLight').removeClass('red');
  $('#slowLight').addClass('yellow');
  $('#goLight').removeClass('green');
  //bounce.applyTo($('.animationtarget'));
});

$('#goButton').click(function (){
  $('#stopLight').removeClass('red');
  $('#slowLight').removeClass('yellow');
  $('#goLight').addClass('green');
  //bounce.applyTo($(".animationtarget"));
});
