/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/lefticon.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/righticon.svg"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
                }
            }
        ]
      });
  }); */

    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
    });

    document.querySelector('.prev').addEventListener ('click', function () {
        slider.goTo('prev');
      }) ;
      document.querySelector('.next').addEventListener ('click', function () {
        slider.goTo('next');
      }) ;
    

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('active');
    });