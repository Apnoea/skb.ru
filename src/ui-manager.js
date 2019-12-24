$(() => {
    const
        uiRanges = $('.ui-range');

    if (uiRanges.length) {
        uiRanges.each(function () {
            let curr = $(this),
                slider = curr.find('.ui-range-slider'),
                handle = null;
            slider.slider({
                range: 'min',
                animate: 200,
                value: 0,
                create: function (e, ui) {
                    handle = curr.find('.ui-slider-handle'); //ниже - фикс выползания за границы
                    handle.css('margin-left', -1 * handle.width() * (slider.slider('value') / slider.slider('option', 'max')));
                },
                change: function (e, ui) {
                    handle.css('margin-left', -1 * handle.width() * (slider.slider('value') / slider.slider('option', 'max')));
                },
                slide: function () {
                    handle.css('margin-left', -1 * handle.width() * (slider.slider('value') / slider.slider('option', 'max')));
                }
            });
        });
    }
});