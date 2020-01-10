$(() => {
    const
        questionTabToggle = $('.questions-tabs-list-item-toggle');

    questionTabToggle.on('click', function () {
        let curr = $(this),
            currDrop = curr.siblings('.questions-tabs-list-item-drop');
        currDrop.slideToggle(300);
    });
});