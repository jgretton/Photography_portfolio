$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('header').addClass('fixed-header');
    }
    else {
       $('header').removeClass('fixed-header');
    }
});