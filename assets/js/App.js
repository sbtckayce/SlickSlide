$(document).ready(function(){
    $('.img-slider').slick({
        infinite:true,
        dots:true,
        autoplay: false,
        autoplaySpeed: 1000,
        
        slidesToShow: 3,
        centerMode:true,
        centerPadding: '0',
        slidesToScroll: 1,
        prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline" class="slick-icon"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"  class="slick-icon"></ion-icon></button>`,
        responsive: [
           
          {
              
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]

    });
  });
      