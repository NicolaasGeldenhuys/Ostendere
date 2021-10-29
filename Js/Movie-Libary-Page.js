$(document).ready(function() {

    //like
    console.log("This is a test.");

    $("#rating").click(function() {
        $(this).css("background-image", "../img/icons/full_heart.svg");
    });

    // movie api
    $(function() {
        var pageNom = 1;
        // const url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=20f38ff4b76767fa633118365643bf5d';

           while(pageNom < 55){
        const TopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';
        PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page='+ pageNom ;

        $.getJSON(PopulareMoviesUrl, function(result) {


         
            for (i = 0; i < result.results.length; i++) {

                var image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                var rating = result.results[i].vote_average;
                var title = result.results[i].original_title;
                var image_test = `style= "background-image: url(`+ image +`);"`;

                if(result.results[i].original_language === "en"){
                if (rating > 8) {
                    $("#active-block").append(
                        "<div class='block block-img' "+ image_test +">\
                    <div id='block-rating'>" + rating + "</div>\
                    <div class='like'></div>\
                    <div class='info_box'>\
                    <div class='movie_name'>" + title + "</div>\
                    <div class='play_movie'></div>\
                    <div class='watch_later'></div>\
                    </div>\
                    </div>"
                    );
                }else if (result.results[i].genre_ids[i] === 18) {
                    $("#drama").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 878) {
                    $("#fiction").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 80) {
                    $("#mystery").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 37) {
                    $("#western").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 14) {
                    $("#fantasy").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 28) {
                    $("#action").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 12) {
                    $("#adventure").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                }else if (result.results[i].genre_ids[i] === 35) {
                    $("#comedy").append(
                        "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                };
                   };
            };
            
                 
        });
         pageNom++;
    };
    });
//if empty

// Search bar (filter)
        //genre
    $("#genre").on('change', function() {
        $("#rating").val('0');
        $("#rating").css("color","#FFFFFF");
        $("#year").val('0');
        $("#year").css("color","#FFFFFF");
        $("#sort-by").val('0');
        $("#sort-by").css("color","#FFFFFF");
        $("#genre").css("color","#F1B000");
        $("#active-block").css("margin-top", "0px");
        $("#active-block").css("height", "500px") ;
        $("#active-block").empty();

        if($("#genre").val() === "Fiction"){
            $("#active-block").empty();
            var clone = $('#fiction').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Fiction");
        }

        if($("#genre").val() === "Mystery"){
            $("#active-block").empty();
            var clone = $('#mystery').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Mystery");
        }

        if($("#genre").val() === "Horror/thriller"){
            $("#active-block").empty();
            var clone = $('#horror/thriller').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Horror/thriller");
        }

        if($("#genre").val() === "Drama"){
            $("#active-block").empty();
            var clone = $('#drama').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Drama");
        }

        if($("#genre").val() === "Historical"){
            $("#active-block").empty();
            var clone = $('#historical').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Historical");
        }

        if($("#genre").val() === "Western"){
            $("#active-block").empty();
            var clone = $('#western').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Western");
        }

        if($("#genre").val() === "Fantasy"){
            $("#active-block").empty();
            var clone = $('#fantasy').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Fantasy");
        }

        if($("#genre").val() === "Action"){
            $("#active-block").empty();
            var clone = $('#action').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Action");
        }

        if($("#genre").val() === "Adventure"){
            $("#active-block").empty();
            var clone = $('#adventure').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Adventure");
        }

        if($("#genre").val() === "Comedy"){
            $("#active-block").empty();
            var clone = $('#comedy').clone();
            $("#active-block").append(clone);
            $(".recommended").text("Fiction");
        }

    });

    //year
    $("#year").on('change', function() {
        $("#rating").val('0');
        $("#rating").css("color","#FFFFFF");
        $("#genre").val('0');
        $("#genre").css("color","#FFFFFF");
        $("#sort-by").val('0');
        $("#sort-by").css("color","#FFFFFF");
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
                     var image_test = `style= "background-image: url(`+ image +`);"`;
                    
                    if(result.results[i].original_language === "en"){
                    if (date.includes(filter)) {
                        $("#active-block").append(
                            "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
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
                     var image_test = `style= "background-image: url(`+ image +`);"`;
                    
                    if(result.results[i].original_language === "en"){
                    if (select_rating < rating && rating < select_rating+1) {
                        $("#active-block").append(
                            "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                    };
                };
            
                
                }; 
            });
             pageNom++;
            };
    });

    //search-bar
    $("#search").click(function(){
    $("#search-icon-2").css(" background-color:", "rgba(0, 0, 0, 0.2);");
    });
    $("#search-icon-2").click(function(){ 
        $("#year").val('0');
        $("#genre").val('0');
        $("#sort-by").val('0');
        $("#active-block").css("margin-top", "80px");
        $("#active-block").css("height", "500px");
        $("#active-block").empty();

             pageNom = 1;
    
               while(pageNom < 40){
            PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page='+ pageNom ;
    
            $.getJSON(PopulareMoviesUrl, function(result) {
                for (i = 0; i < result.results.length; i++) {
    
                     image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].poster_path;
                     rating = result.results[i].vote_average;
                     var select_rating = $("#rating").val();
                     title = result.results[i].original_title;
                     var image_test = `style= "background-image: url(`+ image +`);"`;
                     var name = $("#search-2").val();
                    
                    if(result.results[i].original_language === "en"){
                    if (name == title) {
                        $(".recommended").text(title);
                        $("#active-block").empty();
                        $("#active-block").append(
                            "<div class='block block-img' "+ image_test +">\
                        <div id='block-rating'>" + rating + "</div>\
                        <div class='like'></div>\
                        <div class='info_box'>\
                        <div class='movie_name'>" + title + "</div>\
                        <div class='play_movie'></div>\
                        <div class='watch_later'></div>\
                        </div>\
                        </div>"
                        );
                    };
                };
            
                
                }; 
            });
             pageNom++;
            };
    });



});