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
        shareSliderDots = $('.share-slider .slick-controls-dots'),

        cardsSlider = $('.cards-slider-block'),
        cardsSliderArrows = $('.cards-slider .slick-controls-arrows');

    tabs = $('.tabs'),

        functionsComponents = $('.functions');

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

    tabs.each(function () {
        let curr = $(this),
            currTabs = curr.find('.tabs-headings-list-item'),
            currSlider = curr.find('.tabs-content-list');
        $(currTabs[0]).addClass('active');
        currSlider.slick({
            arrows: false,
            dots: false,
            swipe: false,
            fade: true,
            touchMove: false,
            zIndex: 5,
            adaptiveHeight: true
        });
        currTabs.on('click', function () {
            let currTab = $(this),
                index = currTab.index();
            currTabs.removeClass('active');
            currTab.addClass('active');
            currSlider.slick('slickGoTo', index);
        });
    });

    functionsComponents.each(function () {
        let curr = $(this),
            currTabs = curr.find('.functions-steps-tabs-list-item'),
            currSlider = curr.find('.functions-content-block');
        $(currTabs[0]).addClass('active');
        currSlider.slick({
            arrows: false,
            dots: false,
            fade: true,
            swipe: false,
            touchMove: false,
            zIndex: 5,
            adaptiveHeight: true
        });
        currTabs.on('click', function () {
            let currTab = $(this),
                index = currTab.index();
            currTabs.removeClass('active');
            currTab.addClass('active');
            currSlider.slick('slickGoTo', index);
        });
    });

    cardsSlider.on('init', function (event, slick, currentSlide, nextSlide) {
        cardsSliderArrows.addClass('start');
    });

    cardsSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        cardsSliderArrows.removeClass('start end');
        if (currentSlide == 0) cardsSliderArrows.addClass('start');
        if (currentSlide == slick.slideCount - 1) cardsSliderArrows.addClass('end');
    });

    cardsSlider.slick({
        arrows: true,
        dots: false,
        zIndex: 5,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        appendArrows: cardsSliderArrows
    });
});