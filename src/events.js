$(() => {
    const
        uiPointers = $('.ui-pointer'),
        questionTabToggle = $('.questions-tabs-list-item-toggle');

    questionTabToggle.on('click', function () {
        let curr = $(this),
            currDrop = curr.siblings('.questions-tabs-list-item-drop');
        currDrop.slideToggle(300);
    });

    uiPointers.each(function () {
        let curr = $(this),
            currItems = curr.find('.ui-pointer-list-item');
        $(currItems[0]).addClass('active');
        currItems.on('click', function () {
            let currItem = $(this);
            currItems.removeClass('active');
            currItem.addClass('active');
        });
    });
});