// jQuery to collapse the navbar while scrolling
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature req. jQuery Easing u_u
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on interaction with the Menu item
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Script for EmojiOne shortnames to emoji conversion
$(document).ready(function() {
    $(".convert-emoji").each(function() {
        var original = $(this).html();
        // use .shortnameToImage if only converting shortnames (for slightly better performance)
        var converted = emojione.shortnameToImage(original);
        $(this).html(converted);
    });
});
