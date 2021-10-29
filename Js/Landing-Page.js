$(function() {
    console.log('I see You');


    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=2';

    $.getJSON(P_url, function(P_Movie) {

        // console.log(P_Movie.results.length);

        // console.log("For loop is going to start");
        //console.log(P_Movie.length);
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }

        for (i = 0; i <= getRndInteger(5, 3); i++) {
            // console.log("For loop is running");
            // console.log(i);
            // console.log(P_Movie.results[i].title);
            var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].poster_path;
            var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].backdrop_path;
            var posterimage = `style= "background-image: url(` + poster + `);"`;
            var backdropimage = `style= "background-image: url(` + backdrop + `);"`;
            var TitleOfMovie = P_Movie.results[i].title;
            var synopsisOfMovie = P_Movie.results[i].overview;


            console.log(poster);
            $(".carousel-Slider").append(
                "<div class='Slides'>\
                        <div class='movieInfo'>\
                        <div class='MovieTitle'> " + TitleOfMovie + "</div>\
                        <div class='synopsis'>" + synopsisOfMovie + "</div>\
                             <div class='btnContainer'>\
                                <div class='btnWatchLater'>\
                                 <h2>Watch Later</h2>\
                             </div>\
                            <!-- btnWatchLater -->\
                            <div class='btnWatchNow'>\
                                 <h2>Watch Now</h2>\
                            </div>\
                            <!-- btnWatchNow -->\
                           </div>\
                            <!-- btnContainer -->\
                         </div>\
                        <!-- movieInfo -->\
                                    <img src='" + backdrop + "' alt='" + TitleOfMovie + "' class='imgSlides'>\
                    </div>\
                     <!-- Slides -->"
            );


            $(".item").append(
                "<div class='movie'" + posterimage + "></img></div>"
            );

            // <img src='" + poster + "' alt='poster of the move " + TitleOfMovie + "' class='ItemMovieImg'></img>

            $(".M_scroller").append(
                "<div class='card_S_a' " + posterimage + "> </div>"
            );
        }
    });


























    const mP_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=3';

    $.getJSON(mP_url, function(P_Movie) {



        console.log(poster);
        console.log(posterimage);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }

        for (i = 0; i <= getRndInteger(10, 5); i++) {
            var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].poster_path;
            var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].backdrop_path;

            var posterimage = `style= "background-image: url(` + poster + `);"`;
            var backdropimage = `style= "background-image: url(` + backdrop + `);"`;

            console.log(i);
            console.log(posterimage);
            $(".M_WatchLater").append(
                "<div class='card_W_a' " + posterimage + "></div>"
            );
        }

        for (i = 5; i <= getRndInteger(10, 5); i++) {
            var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].poster_path;
            var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].backdrop_path;

            var posterimage = `style= "background-image: url(` + poster + `);"`;
            var backdropimage = `style= "background-image: url(` + backdrop + `);"`;


            $(".M_explore").append(
                "<div class='card_E_a' " + posterimage + "></div></div>\
                "

            )
        }


    });


    $(".btnWatchLater").on("click", function() {



        const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=2';

        $.getJSON(P_url, function(P_Movie) {
            console.log(P_Movie);
            for (i = 0; i < P_Movie.results.length; i++) {


            }

        }); //end of Http




    }); //end of .btnWatchlater















    var currentSlide = 0;
    var $slides = $('.carousel-Slider');
    var slideCounter = $slides.children().length;
    var animateTime = 800;
    var slideTime = 5000;


    setInterval(function() {
        console.log(slideCounter + " slideCounter");
        $slides.animate({ marginLeft: '-=1920px' }, animateTime, function() {
            currentSlide++;
            if (currentSlide === 7) {
                currentSlide = 1;
                $(this).css("margin-left", "0px")
            }
            console.log(" currentSlide " + currentSlide);
        });
        console.log("going to change")
    }, slideTime);

});