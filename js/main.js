$(function(){
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    dots: false
                }
            },
        ]
    });
    $('.comment__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 840,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
    });
    
    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active')
    });

});
