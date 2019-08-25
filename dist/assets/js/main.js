$(document).ready(function() {

    // SLIDESHOW SCRIPT
    var $prev = $('.previous');
    var $next = $('.next');
    var mode = "auto";

    $prev.on({
        click: function(e) {
            e.preventDefault();
            mode = "manual";
            showPreviousImage();
        }
    });

    $next.on({
        click: function(e) {
            e.preventDefault();
            mode = "manual";
            showNextImage();
        }
    });
    
    setInterval(function() {
        if (mode === "auto") {
            showNextImage();
        }
    }, 7000);
    
    function showNextImage() {
        var $actEl = $('.active');
        var $nextEl = $actEl.next('.slide');

        if ($nextEl.length) {
            $actEl.removeClass('active');
            $nextEl.addClass('active');
        }
        else {
            $actEl.removeClass('active');
            $('.slide:first-child').addClass('active');
        }
    }
    
    function showPreviousImage() {
        var $actEl = $('.active');
        var $prevEl = $actEl.prev('.slide');

        if ($prevEl.length){
            $actEl.removeClass('active');
            $prevEl.addClass('active');
        }
        else {
            $actEl.removeClass('active');
            $('.slide.last').addClass('active');
        }
    }
});
