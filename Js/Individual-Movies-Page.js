$(function() {
    console.log("individual movie");

    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=2';
    $.getJSON(P_url, function(P_Movie) {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (min - max)) + min;
        }

        for (i = 0; i <= getRndInteger(1, 1); i++) {




        }


    });

});