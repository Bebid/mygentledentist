$(document).ready(function() {

    $('#review-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        items: 1,
        smartSpeed: 1000
    })

    $('#gallery-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            }
        },
        smartSpeed: 1000
    })

    $('#preferred-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        },
        smartSpeed: 1000
    })

    $('#providing-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            }
        },
        smartSpeed: 1000
    })
    

    $('#ba-slider-1').beforeAfter();
    $('#ba-slider-2').beforeAfter();
    $('#ba-slider-3').beforeAfter();

    $('#menu-bar').click(function(){
        $('#navigation-list').toggleClass('hidden');
        $(this).toggleClass('fa-bars fa-times')
    });

    $('#mainNav > li, #subNav > li').hover(function() {
        $(this).children('ul').toggleClass('hidden');
        $(this).toggleClass('border-b-2');
    });

    $('#navigation-list > li, #subNav > li').click(function(e) {
        e.stopPropagation();
        $(this).children('ul').toggleClass('hidden');
    });
})
