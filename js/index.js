$(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 500, 'linear');
  });
});

$(function() {

  $(window).scroll(function() {
    var win = $(window);
    var scroll = win.scrollTop();

    var ob1 = $('#1').scrollTop();
    var ob2 = $('#2').scrollTop();
    var ob3 = $('#3').scrollTop();
    var ob4 = $('#4').scrollTop();
    var ob5 = $('#5').scrollTop();
    var ob6 = $('#6').scrollTop();


    if(scroll >= ob1 && scroll < ob2) {
      console.log('1')
    } else if(scroll >= ob2 && scroll < ob3) {
      console.log('2')
    } else if(scroll >= ob3 && scroll < ob4) {
      console.log('3')
    } else if(scroll >= ob4 && scroll < ob5) {
      console.log('4')
    } else if(scroll >= ob5 && scroll < ob6) {
      console.log('5')
    } else if(scroll >= ob6) {
      console.log('6')

  }
  console.log(ob3)
  })
  

});