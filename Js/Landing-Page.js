$(function() {
    console.log('I see You');

    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';

    $.getJSON(url, function(result) {
        console.log(result);
        for (i = 0; i < result.length; i++) {
            console.log(result[i].page.results.id);
            //console.log(result[i].page.results.title);
            $(".slider").append(
                "<ul class='slides'>\
                     <li class='slide'><img src='" + result[i].backdrop_path + "' alt=''></li>\
                     <li class='slide'><img src='' alt=''></li>\
                     <li class='slide'><img src='' alt=''></li>\
                     <li class='slide'><img src='' alt=''></li>\
                     <li class='slide'><img src='' alt=''></li>\
                     </ul>\
                <div class='movieInfo'>\
                    <h1>" + result[i].page.results.title + "</h1>\
                     <p class='synopsis'>synopsis:" + result[i].overview + "</p>\
                         <div class='btnContainer'>\
                             <div class='btnWatchLater'>\
                                 <h2>Watch Later</h2>\
                            </div>\
                             <!--btnWatchLater-->\
                                <div class='btnWatchNow'>\
                                     <h2>Watch Now</h2>\
                                 </div>\
                                    <!--btnWatchNow-->\
                            </div>\
                            <!--btnContainer-->\
                </div>\
                <!--movieInfo-->"
            );
            console.log("I have appended slider");



        };
    });


















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

});