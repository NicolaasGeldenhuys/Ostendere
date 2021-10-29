$(document).ready(function() {

    $(".remove").click(function(){
        console.log("hello");
        $(this).parent().parent(".block").remove();
    });

    $(".watch_later").on('click', '.watch_later', function() {

        console.log("Hello");
     var div = $(this).parent().parent(".block").clone();

     window.location.href = "../Pages/Watch-Later-Page";
     sessionStorage.setItem("div_session",div) ;

     console.log(div + "Hello");
        
     $(".next-movies-containner").append((sessionStorage.getItem("div_session")));

    });
    var pageNom = 1;
    while(pageNom < 2){
    const PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=' + pageNom ;

    $.getJSON(PopulareMoviesUrl, function(result) {


     
        for (i = 0; i < result.results.length; i++) {
            var image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                var rating = result.results[i].vote_average;
                var title = result.results[i].original_title;
                var image_test = `style= "background-image: url(`+ image +`);"`;
           
                $(".next-movies-containner").append(
                    "<div class='block' "+ image_test +">\
                <div id='rating'>" + rating + "</div>\
                <div class='info_box'>\
                <div class='movie_name'>" + title + "</div>\
                <div class='play_movie'></div>\
                <div class='remove'></div>\
                </div>\
                </div>"
                );
                 };
           })    
 
     

;
pageNom++;
};
});