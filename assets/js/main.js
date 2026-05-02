(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {



        //===== Sticky Menu-Bar Start

            window.onscroll = function() {stickyNavbar()};

            var navbar = document.querySelector(".header__area");
            
            var stickyPoint = 100;
            
            function stickyNavbar() {
            if (window.pageYOffset >= stickyPoint) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
            }
            




        //------------ Offcanvas menu -------------

        $('.search__btn').on('click', function () {
            $('.search__modal, .overlay').addClass('active');
        })
        $('.search__modal-close, .overlay').on('click', function () {
            $('.search__modal, .overlay').removeClass('active');
        })





        // Promo Card Carousel
        $('.promo__card-wraper').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>", 
                "<i class='fa fa-chevron-right'></i>" 
            ],
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 2000,
            fluidSpeed: 2000,
            slideTransition: 'ease-in-out',
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1, 
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
            }

        });




        // News Carousel
        $('.news__image-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>", 
                "<i class='fa fa-chevron-right'></i>" 
            ],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            fluidSpeed: 1500,
            slideTransition: 'ease-in-out',
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1, 
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 0,
                },
            }

        });






        // Testiomonial Carousel
        $('.testimonial__wrapper').owlCarousel({
            loop: true,
            nav: false,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            fluidSpeed: 1500,
            slideTransition: 'ease-in-out',
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1, 
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 3,
                    margin: 30,
                },
                1200: {
                    items: 3,
                    margin: 40,
                },
            }

        });




        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });





    }); //---document-ready-----






    /*magnificPopup active*/
    $('.video__play-button').magnificPopup({
        type: 'iframe'

    });




}(jQuery));