$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('#ba-slider-1').beforeAfter();
    $('#ba-slider-2').beforeAfter();
    $('#ba-slider-3').beforeAfter();

    $('#menu-bar').click(function(){
        $('#navigation-list').toggleClass('hidden');
        $(this).toggleClass('fa-bars fa-times')
    });
})
