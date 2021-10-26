$(function() {
    console.log('I see You');

    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';

    $.getJSON(P_url, function(P_Movie) {

        console.log(P_Movie.results.length);

        // console.log("For loop is going to start");
        //console.log(P_Movie.length);
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }
        for (i = 0; i <= getRndInteger(5, 5); i++) {
            console.log("For loop is running");
            // console.log(i);
            // console.log(P_Movie.results[i].title);
            var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].poster_path;
            var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].backdrop_path;
            var TitleOfMovie = P_Movie.results[i].title;
            var synopsisOfMovie = P_Movie.results[i].overview;
            // $(".slides").append(
            //     " <li class='slide'>\
            //      <img src='" + backdrop + "' alt='backdrop_path" + TitleOfMovie + ".jpg' class='SlideImg'>\
            //     <div class='movieInfo'>\
            //         <h1>'" + TitleOfMovie + "'</h1>\
            //         <p class='synopsis'>synopsis:'" + synopsisOfMovie + "' </p>\
            //         <div class='btnContainer'>\
            //             <div class='btnWatchLater'>\
            //                 <h2>Watch Later</h2>\
            //             </div>\
            //             <!--btnWatchLater-->\
            //             <div class='btnWatchNow'>\
            //                 <h2>Watch Now</h2>\
            //             </div>\
            //             <!--btnWatchNow-->\
            //         </div>\
            //         <!--btnContainer-->\
            //     </div>\
            //     <!--movieInfo-->"
            // );

            console.log(poster);
            $(".item").append(
                "<div class='movie'><img src='" + poster + "' alt='poster of the move " + TitleOfMovie + "' class='ItemMovieImg'></div>"
            );




        }

    });


















    var currentSlide = 0;
    var $slides = $('.slides');
    var slideCounter = $slides.children().length;
    var animateTime = 800;
    var slideTime = 5000;


    setInterval(function() {
        console.log(slideCounter + " slideCounter");
        $slides.animate({ marginLeft: '-=900px' }, animateTime, function() {
            currentSlide++;
            if (currentSlide === slideCounter + 1) {
                currentSlide = 1;
                $(this).css("margin-left", "0px")
            }
            console.log(" currentSlide " + currentSlide);
        });
        console.log("going to change")
    }, slideTime);

});