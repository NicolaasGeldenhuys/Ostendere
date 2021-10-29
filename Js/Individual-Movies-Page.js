$(function() {
    console.log("individual movie");

    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=2';
    $.getJSON(P_url, function(P_Movie) {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }

        for (i = 0; i <= getRndInteger(1, 0); i++) {
            var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].backdrop_path;
            var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[i].poster_path;
            var TitleOfMovie = P_Movie.results[i].title;
            var synopsisOfMovie = P_Movie.results[i].overview;
            var rating = P_Movie.results[i].rating;
            var year = P_Movie.results[i].year;
            // $('.details').append(
            //     "\
            //     <h3 class='directors'>Directors </h3>\
            //     <p class='contentD'>Text</p>\
            //     <h3 class='trailers'>Trailer </h3>\
            //     <h3 class='cast' style='margin-left: 384px; margin-top: -32px;'>No cast given </h3>\
            //     <p class='contentC' style='margin-left: 15px; margin-top: -28px;'>Text</p>\
            //     <h3 class='rating' style='margin-left: 437px; margin-top: -32px;'>" + rating + " </h3>\
            //     <div class='contentRdiv' style='margin-left: 15px; margin-top: -38px;'><img src='../img/img/icons/star_icon.svg' width='47.27px'><p class='contentR'>8.7</p></div>\
            //     <h3 class='year' style='margin-left: 152px; margin-top: -32px;'>" + year + " </h3>\
            //     <p class='contentY' style='margin-left: 15px; margin-top: -28px;'>Text</p>\
            //     <h3 class='synopsis'>Synopsis </h3>\
            //     <div class='desc'><p class='descTextc'>" + synopsisOfMovie + "</p></div>\
            //     <img src='" + poster + "' class='mainTrailerButton' width='79px' height='24px'>\
            //     <img src='" + backdrop + "' class='mainWatchLaterButton' width='79px' height='24px'>\
            //     <div class='trailerVids'></div>\
            //         <img src='../img/icons/playMain.svg'class='mainPlayButton' width='98px'>\
            //         <div class='slider'></div>\
            //         <div class='buttonS1'></div>\
            //         <div class='buttonS2'></div>\
            //         <div class='buttonS3'></div>\
            //         <div class='buttonS4'></div>\
            //         <div class='buttonS5'></div> \
            //     "
            // );


        }


    });

});