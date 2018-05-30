$('#media-button').on('click', function() {
    $('#media-links').slideToggle();
    $(this).find('.down-arrow').toggleClass('up-arrow');
});