$(() => {
    const
        promoSlider = $('.promo-slider-block'),
        promoSliderArrows = $('.promo .slick-controls-arrows'),
        promoSliderDots = $('.promo .slick-controls-dots'),

        offersSlider = $('.offers-slider-block'),
        offersSliderArrows = $('.offers .slick-controls-arrows'),
        offersSliderCounterCurrent = $('.offers .slick-controls-counter-current'),
        offersSliderCounterTotal = $('.offers .slick-controls-counter-total'),

        shareSlider = $('.share-slider-block'),
        shareSliderDots = $('.share-slider .slick-controls-dots');

    promoSlider.slick({
        arrows: true,
        dots: true,
        zIndex: 5,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 6000,
        appendArrows: promoSliderArrows,
        appendDots: promoSliderDots
    });

    offersSlider.on('init', function (event, slick, currentSlide, nextSlide) {
        offersSliderCounterCurrent.text('1');
        offersSliderCounterTotal.text(slick.slideCount)
    });

    offersSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        offersSliderCounterCurrent.text(++currentSlide);
    });

    offersSlider.slick({
        arrows: true,
        dots: false,
        zIndex: 5,
        autoplay: true,
        autoplaySpeed: 8000,
        appendArrows: offersSliderArrows
    });

    shareSlider.slick({
        arrows: false,
        dots: true,
        zIndex: 5,
        autoplay: true,
        autoplaySpeed: 8000,
        appendDots: shareSliderDots
    });
});