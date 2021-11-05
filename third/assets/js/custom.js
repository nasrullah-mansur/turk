$(document).ready(function() {
    "use strict";

    $('.banner .banner-slide').slick({
        slideToScroll: 1,
        slideToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    });

    $('.testimonial .slider').slick({
        slideToScroll: 1,
        slideToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.shipping select').niceSelect();

    $('.header .mobile-btn').on('click', function() {
        $('.header .account-btn').toggleClass('active');
    });

    let backToTopBtn = $('.back-to-top');
    $(window).on('scroll', function() {
        let scrollFromTop = $(this).scrollTop();
        if(scrollFromTop > 300) {
            backToTopBtn.addClass('active');
        } else {
            backToTopBtn.removeClass('active');
        }
    });
    backToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        });
    })

    $('.custom-btn-bg > span').on('click', function() {
        $('.custom-btn-bg .sub-menu').toggle();
    })

});