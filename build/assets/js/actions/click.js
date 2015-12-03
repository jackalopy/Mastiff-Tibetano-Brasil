'use strict';

$('.flag').on('click', function () {
    window.location = BASE_URL + $(this).attr('value');
});