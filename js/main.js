// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

//Hamburger menu toggle
$('.hamburger').click(function() {
    $('.site-nav').toggleClass('open', 500);
    let iconText  = $('.site-nav').hasClass("open")?
'close' : 'menu'

    
    $('.js-menu-icon').text(iconText);
  })
//Close Open HB menu after a item is clicked
  $(".js-link").click(function(){
    $('.site-nav').removeClass('open',500);
    $('.js-menu-icon').text('menu');
  })


$(function() {
    // your current click function
    $('.js-scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });
    // *only* if we have anchor on the url
    if(window.location.hash) {
        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');
    }

    //Carousel for project display
    
});