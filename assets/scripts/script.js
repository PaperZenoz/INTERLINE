$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {

    function sliders() {
        $('.general-category-slider').slick({
            slidesToShow: 2,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
        $('.general-top-slider').slick({
            slidesToShow: 1,
            dots: true,
            asNavFor: '.general-top__advantage-list'
        })
        $('.product-card-slider').slick({
            slidesToShow: 3,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
        $('.product-analogue__slider').slick({
            slidesToShow: 3,
            dots: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true

                    }

                }
            ]
        })
        $('.general-top__advantage-list').slick({
            swipe: false,
            asNavFor: '.general-top-slider',
            arrows: false


        })
        $('.general-brands__list').slick({
            slidesToShow: 3,
            arrows: true
        })

        $(window).resize(function () {
            if ($(window).width() < 1280 && !$('.catalog-general__wrap').hasClass('slick-initialized')) {
                $('.catalog-general__wrap').slick({
                    dots: true
                })
            } else if ($(window).width() >= 1280 && $('.catalog-general__wrap').hasClass('slick-initialized')) {
                $('.catalog-general__wrap').slick('unslick')
            }
        });


        if ($(window).width() < 1280 && !$('.catalog-general__wrap').hasClass('slick-initialized')) {
            $('.catalog-general__wrap').slick({
                dots: true
            })
        }


        $(window).resize(function () {
            if ($(window).width() < 1600 && !$('.content-read__wrap').hasClass('slick-initialized')) {
                $('.content-read__wrap').slick({
                    dots: false
                })
            } else if ($(window).width() >= 1600 && $('.content-read__wrap').hasClass('slick-initialized')) {
                $('.content-read__wrap').slick('unslick')
            }
        });


        if ($(window).width() < 1600 && !$('.content-read__wrap').hasClass('slick-initialized')) {
            $('.content-read__wrap').slick({
                dots: false
            })
        }


        $(window).resize(function () {
            if ($(window).width() < 1600 && !$('.content-gallery').hasClass('slick-initialized')) {
                $('.content-gallery').slick({
                    dots: false
                })
            } else if ($(window).width() >= 1600 && $('.content-gallery').hasClass('slick-initialized')) {
                $('.content-gallery').slick('unslick')
            }
        });


        if ($(window).width() < 1600 && !$('.content-gallery').hasClass('slick-initialized')) {
            $('.content-gallery').slick({
                dots: false
            })
        }


        $(window).resize(function () {
            if ($(window).width() < 1280 && !$('.product-card__mobile-gallery').hasClass('slick-initialized')) {
                $('.product-card__mobile-gallery').slick({
                    slidesToShow: 1,
                    responsive: [
                        {
                            breakpoint: 1280,
                            settings: {
                                dots: true,
                                lazyLoad: 'ondemand'
                            }
                        }
                    ]


                })
            }

        });

        if ($(window).width() < 1600 && !$('.product-card__mobile-gallery').hasClass('slick-initialized')) {
            $('.product-card__mobile-gallery').slick({
                slidesToShow: 1,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            dots: true,
                            lazyLoad: 'ondemand'
                        }
                    }
                ]


            })
        }


        $('.general-top-slider').on('afterChange', function (currentSlide) {
            $('.general-top__column').addClass('active')
            $('.general-top__item').addClass('active')
        });

        $('.general-top-slider').on('beforeChange', function (currentSlide) {
            $('.general-top__column').removeClass('active')
            $('.general-top__item').removeClass('active')
        });


    }

    function up_btn() {
        var $up_btn = $('.up-btn')

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $up_btn.fadeIn();
            } else {
                $up_btn.fadeOut();
            }
        });

        $up_btn.click(function () {
            $("html, body").animate({scrollTop: 0}, 0);
            return false;
        });
    }

    function selects() {
        new SlimSelect({
            select: '#selectElement',
            settings: {
                showSearch: false
            }
        })

        new SlimSelect({
            select: '#selectElement2',
            settings: {
                showSearch: false
            }
        })
    }

    function category() {
        var $button = $('.general-category__nav-item'),
            $block = $('.general-category__list-item')


        setTimeout(function () {
            $block.hide()
            $block.eq(0).show()
        }, 2000)


        $button.on('click', function () {
            var $index = $(this).index()


            $button.removeClass('active')
            $(this).addClass('active')

            $block.hide()
            $block.eq($index).show()
        })
    }

    function category_types() {
        var $button = $('.general-category__types'),
            $nav = $('.general-category__nav')


        $button.on('click', function () {
            $(this).toggleClass('open')
            $nav.slideToggle()
        })
    }

    function burger() {
        var $button = $('.header-top__burger'),
            $nav = $('.header-nav')
        $button.on('click', function () {
            $(this).toggleClass('open')
            $nav.slideToggle()
        })
    }


    $('.js--tel').inputmask("+7 (999) 999-9999")


    function myYandexMap() {
        var points = [
            {
                coord: [55.037309, 82.931353],
            }
        ];

        if ($('#map').length > 0) {
            ymaps.ready(init);
        }

        var myMap

        function init() {
            myMap = new ymaps.Map(
                'map',
                {
                    center: [55.037309, 82.931353],
                    zoom: 16,
                    type: 'yandex#map',
                    controls: [],
                }
            );


            for (var i = 0; i < points.length; i++) {
                var placemark = new ymaps.Placemark(points[i].coord, {
                    balloonContentHeader: points[i].adres,
                    hideIcon: false
                }, {
                    hideIcon: false,
                    iconLayout: 'default#image',
                    mapAutoPan: false,
                });


                var zoomControl = new ymaps.control.ZoomControl({
                    options: {
                        size: "small"
                    }
                });

                myMap.controls.add(zoomControl);
                myMap.behaviors.disable('scrollZoom');
                myMap.geoObjects.add(placemark);
            }
        }
    }


    function catalog_banner() {
        $('.catalog-banner__mob-title').on('click', function () {
            $('.catalog-banner__wrap').slideToggle()
            $(this).toggleClass('open')
        })
    }


    function accordion() {
        $('.accordion__head').on('click', function () {
            $(this).toggleClass('open')
            $(this).siblings('.accordion__body').slideToggle()
        })

    }


    function price() {
        $('.js--price').on('click', function () {
            var $text = $(this).parents('.general-category__item').find('h4').text(),
                $img = $(this).parents('.general-category__item').find('.general-category__img > img').attr("src")


            $('#price_name').val($text)
            $('.popup--price strong').text($text)
            $('.popup--price .popup__img img').attr("src", $img)

        })
    }

    function price_card() {
        $('.js--price-card').on('click', function () {
            var $text = $(this).parents('.card').find('h4').text(),
                $img = $(this).parents('.card').find('.card__img > img').attr("src")

            $('.popup--price').find('h2').text('Узнать стоимость')
            $('.popup--price strong').text($text)
            $('.popup--price .popup__img img').attr("src", $img)
        })
    }

    function price_product() {
        var $text = $(this).text(),
            $img = $('#general_img').attr("src"),
            $title = $('.product-card__title').text()

        //Заголовок
        // $('.popup--price').find('h2').text($text)




        $('.js--price-product').on('click', function () {
            //Картинка
            $('.popup--price .popup__img img').attr("src", $img)

            //Название
            $('.price_name').val($title)
            $('.price_title').text($title)
        })


    }


    function filter() {
        var $types = $('.general-category__nav-item'),
            $items = $('.general-category__item'),
            $container = $('.general-category__slider')


        $types.on('click', function () {
            var $index = $(this).index()


            $items.hide()
            $items.each(function () {
                $items.eq($index).show()
            })


        })
    }

    sliders()
    up_btn()
    selects()
    category()
    category_types()
    burger()
    myYandexMap()
    catalog_banner()
    accordion()
    price()
    // filter()
    price_card()
    price_product()
})
