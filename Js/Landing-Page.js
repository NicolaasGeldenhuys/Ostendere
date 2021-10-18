var currentSlide = 1;
var $slides = $('.slides');
var slideCounter = $slides.children().length;
var animateTime = 800;
var slideTime = 5000;

//console.log(slideCounter);

setInterval(function() {
    $slides.animate({ marginLeft: '-=900px' }, animateTime, function() {
        currentSlide++;
        if (currentSlide === slideCounter) {
            currentSlide = 1;
            $(this).css("margin-left", "0px")
        }
    });
    console.log("going to change")
}, slideTime);