$(document).ready(function() {

    //like
    console.log("This is a test.");

    $("#rating").click(function() {
        $(this).attr("src", "img/icons/full_heart.svg")
    });

    // movie api
    $(function() {
        var pageNom = 1;
        // const url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=20f38ff4b76767fa633118365643bf5d';

           while(pageNom < 20){
        const TopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';
        PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page='+ pageNom ;

        $.getJSON(PopulareMoviesUrl, function(result) {
            console.log(result);
            console.log("see me");

         
            for (i = 0; i < result.results.length; i++) {

                var image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                var rating = result.results[i].vote_average;
                var title = result.results[i].original_title;
                

                console.log(image);
                console.log(rating);
                console.log(title);


                if(result.results[i].original_language === "en"){
                if (rating > 8) {
                    $("#active-block").append(
                        "<div class='block block-img'>\
                    <div id='block-rating'>'" + rating + "'</div>\
                    <div class='like'></div>\
                    <div class='info_box'>\
                    <div class='movie_name'>'" + title + "'</div>\
                    <div class='play_movie'></div>\
                    <div class='watch_later'></div>\
                    </div>\
                    </div>"
                    );
                //  $(".block").on("change",Items,function(){
               //      $(this).css("background-image", "url(" + image + ")") 
               // });

               $("#active-block").change(function(){
                     $("#active-block").last(".block").css("background-image", "url(" + image + ")") 
                });
                }else if (result.results[i].genre_ids[i] === 18) {
                    $("#drama").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 878) {
                    $("#fiction").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 80) {
                    $("#mystery").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 27) {
                    $("#horror/thriller").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 37) {
                    $("#western").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 36) {
                    $("#historical").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 14) {
                    $("#fantasy").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 28) {
                    $("#action").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 12) {
                    $("#adventure").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                }else if (result.results[i].genre_ids[i] === 35) {
                    $("#comedy").append(
                        "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                };
                   };
            };
            
                 
        });
         pageNom++;
    };
    });
// Search bar (filter)
        //genre
    $("#genre").on('change', function() {
        $("#rating").val('0');
        $("#year").val('0');
        $("#sort-by").val('0');
        $("#genre").css("color","#F1B000");
        $("#active-block").css("margin-top", "0px");
        $("#active-block").css("height", "500px")

        if($("#genre").val() === "Fiction"){
            $("#active-block").empty();
            var clone = $('#fiction').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Mystery"){
            $("#active-block").empty();
            var clone = $('#mystery').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Horror/thriller"){
            $("#active-block").empty();
            var clone = $('#horror/thriller').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Drama"){
            $("#active-block").empty();
            var clone = $('#drama').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Historical"){
            $("#active-block").empty();
            var clone = $('#historical').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Western"){
            $("#active-block").empty();
            var clone = $('#western').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Fantasy"){
            $("#active-block").empty();
            var clone = $('#fantasy').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Action"){
            $("#active-block").empty();
            var clone = $('#action').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Adventure"){
            $("#active-block").empty();
            var clone = $('#adventure').clone();
            $("#active-block").append(clone);
        }

        if($("#genre").val() === "Comedy"){
            $("#active-block").empty();
            var clone = $('#comedy').clone();
            $("#active-block").append(clone);
        }

    });

    //year
    $("#year").on('change', function() {
        $("#rating").val('0');
        $("#genre").val('0');
        $("#sort-by").val('0');
        $("#year").css("color","#F1B000");
        $("#active-block").css("margin-top", "0px");
        $("#active-block").css("height", "500px");
        $("#active-block").empty();

             pageNom = 1;
    
               while(pageNom < 20){
            PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page='+ pageNom ;
    
            $.getJSON(PopulareMoviesUrl, function(result) {
                for (i = 0; i < result.results.length; i++) {
    
                     image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                     rating = result.results[i].vote_average;
                     title = result.results[i].original_title;
                     var date = result.results[i].release_date ;
                     var filter = $("#year").val();
                    
                    if(result.results[i].original_language === "en"){
                    if (date.contains(filter)) {
                        $("#active-block").append(
                            "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                    };
                };
            
                
                }; 
            });
             pageNom++;
            };
    });
    //rating
    $("#rating").on('change', function() {
        $("#year").val('0');
        $("#genre").val('0');
        $("#sort-by").val('0');
        $("#rating").css("color","#F1B000");
        $("#active-block").css("margin-top", "80px");
        $("#active-block").css("height", "500px");
        $("#active-block").empty();

             pageNom = 1;
    
               while(pageNom < 20){
            PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page='+ pageNom ;
    
            $.getJSON(PopulareMoviesUrl, function(result) {
                for (i = 0; i < result.results.length; i++) {
    
                     image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                     rating = result.results[i].vote_average;
                     var select_rating = $("#rating").val();
                     title = result.results[i].original_title;
                    
                    if(result.results[i].original_language === "en"){
                    if (select_rating < rating && rating < select_rating+1) {
                        $("#active-block").append(
                            "<div class='block block-img'>\
                        <div id='block-rating'>'" + rating + "'</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>'" + title + "'</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                        $(".block-img").css("background-image", "url(" + image + ")") ;
                    };
                };
            
                
                }; 
            });
             pageNom++;
            };
    });



});