$(window).on('resize', function() {
    window.viewportCtrl.resize();
    console.log('resizing');
});

$(window).resize();