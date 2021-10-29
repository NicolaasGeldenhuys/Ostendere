$(function() {
    console.log("individual movie");

    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=2';
    $.getJSON(P_url, function(P_Movie) {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }

        // for (i = 1; i < P_Movie.results.length; i++) {
        var backdrop = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[1].backdrop_path;
        var poster = 'https://image.tmdb.org/t/p/w500/' + P_Movie.results[1].poster_path;
        var TitleOfMovie = P_Movie.results[1].title;
        var synopsisOfMovie = P_Movie.results[1].overview;
        var rating = P_Movie.results[1].rating;
        var year = P_Movie.results[1].year;

        $('.firstRow').append(

        );

        $('.title-div').append(
            " <div class='contentcon'></div>\
                    <h1 id='title'>" + TitleOfMovie + "</h1> "
        );



        $('.details').append(
            "\
                <h3 class='directors'> </h3>\
                <p class='contentD'></p>\
                <h3 class='trailers'>Trailer </h3>\
                <h3 class='cast' style='margin-left: 384px; margin-top: -32px;'> </h3>\
                <p class='contentC' style='margin-left: 15px; margin-top: -28px;'></p>\
                <h3 class='rating' style='margin-left: 437px; margin-top: -32px;'></h3>\
                <div class='contentRdiv' style='margin-left: 15px; margin-top: -38px;'><img src='../img/img/icons/star_icon.svg' width='47.27px'><p class='contentR'>8.7</p></div>\
                <h3 class='year' style='margin-left: 152px; margin-top: -32px;'> </h3>\
                <p class='contentY' style='margin-left: 15px; margin-top: -28px;'></p>\
                <h3 class='synopsis'>Synopsis </h3>\
                <div class='desc'><p class='descTextc'>" + synopsisOfMovie + "</p></div>\
                <img src='" + poster + "' class='mainTrailerButton' width='79px' height='24px'>\
                <img src='" + backdrop + "' class='mainWatchLaterButton' width='79px' height='24px'>\
                <div class='trailerVids'></div>\
                    <img src='../img/icons/playMain.svg'class='mainPlayButton' width='98px'>\
                    <div class='slider'></div>\
                    <div class='buttonS1'></div>\
                    <div class='buttonS2'></div>\
                    <div class='buttonS3'></div>\
                    <div class='buttonS4'></div>\
                    <div class='buttonS5'></div> \
                "
        );


        // }


    });

});