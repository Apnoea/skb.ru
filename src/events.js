$(() => {
    const
        uiPointers = $('.ui-pointer'),
        uiPillBtns = $('.ui-pill-btn'),
        headingToggles = $('.heading-toggle'),
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

    headingToggles.on('click', function () {
        $(this).toggleClass('toggled');
    });

    uiPillBtns.each(function () {
        let curr = $(this),
            currBtns = curr.find('button');
        currBtns.on('click', function () {
            let currBtn = $(this);
            currBtns.removeClass('active');
            currBtn.addClass('active');
        });
    });
});