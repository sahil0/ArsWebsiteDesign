// LOGO

var btn = document.querySelector('.logo-menu'),
    svg = document.querySelector('svg');

btn.addEventListener('click', function() {
    svg.classList.toggle('click');
}, false);


// MENU
anime.timeline({ loop: true })
    .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

function showMobileMenu() {
    var mobileVis = jQuery('.menu-shelf').css('display');
    if (mobileVis == "none") {
        jQuery('.menu-shelf').animate({
            width: 'toggle'
        }, 350);
        $('.navigation, .menu-bg').toggleClass("open-nav");
    } else {
        jQuery('.menu-shelf').animate({
            width: 'toggle'
        }, 350);
        $('.navigation, .menu-bg').toggleClass("open-nav");
    }
};
jQuery('.logo-menu').click(function() {
    showMobileMenu();
    return false;
});


// TABS

$(document).ready(function() {

    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp().removeClass("active_tab_content");
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown().addClass("active_tab_content");

            g.preventDefault();
        });
    })(jQuery);

});
// SMOOTH SCROLL

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});

// SCROLL TRIGGER


var element_position = $('#01').offset().top;
var screen_height = $(window).height();
var activation_offset = 0.5; //determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - (screen_height * activation_offset);
var max_scroll_height = $('body').height() - screen_height - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if (element_in_view || has_reached_bottom_of_page) {
        $('ul.pagination').animate({
            width: 'toggle'
        }, 350);
    } else {
        $('ul.pagination').animate({
            width: 'toggle'
        }, 350);
    }
});