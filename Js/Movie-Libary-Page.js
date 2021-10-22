$(document).ready(function() {

    //like
    console.log("This is a test.");

    $("#rating").click(function() {
        $(this).attr("src", "img/icons/full_heart.svg")
    });

    // movie api
    $(function() {
        // var movieID = 500;
        // const url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=20f38ff4b76767fa633118365643bf5d';
        const TopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';
        const PopulareMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';


        $.getJSON(PopulareMoviesUrl, function(result) {
            console.log(result);
            console.log("see me");

            for (i = 0; i < result.results.length; i++) {

                var image = 'https://image.tmdb.org/t/p/w500/' + result.results[i].backdrop_path;
                var rating = result.results[i].vote_average;
                var title = result.results[i].original_title;

                console.log(image);
                console.log(rating);
                console.log(title);

                $("#active-block").append(
                    "<div class='block'>\
                <div class= 'block-img'>\
                 <img src='" + image + "'>\
                 </div>\
                <div id='block-rating'>'" + rating + "'\
                </div>\
                <div class='like'></div>\
                <div class='info_box'>\
                <div class='movie_name'>'" + title + "'</div>\
                <div class='play_movie'></div>\
                <div class='watch_later'></div>\
                </div>\
                </div>"
                );

                if (rating > 8) {
                    $("#active-block").append(
                        "<div class='block'>\
                     <div class= 'block-img'>\
                      <img src='" + image + "'>\
                      </div>\
                     <div id='block-rating'>'" + rating + "'\
                     </div>\
                     <div class='like'></div>\
                     <div class='info_box'>\
                     <div class='movie_name'>'" + title + "'</div>\
                     <div class='play_movie'></div>\
                     <div class='watch_later'></div>\
                     </div>\
                     </div>"
                    );
                };
                if (result[length].genres[length].name === "Drama") {
                    $("#drama").append(
                        "<div class='block'>\
                    <div class= 'block-img'>\
                     <img src='" + image + "'>\
                     </div>\
                    <div id='block-rating'>'" + rating + "'\
                    </div>\
                    <div class='like'></div>\
                    <div class='info_box'>\
                    <div class='movie_name'>'" + title + "'</div>\
                    <div class='play_movie'></div>\
                    <div class='watch_later'></div>\
                    </div>\
                    </div>"
                    );
                };
                if (result[length].genres[length].name === "Fiction") {
                    $("#fiction").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Crime") {
                    $("#mystery").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Thriller") {
                    $("#horror/thriller").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Western") {
                    $("#western").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "History") {
                    $("#historical").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Fantasy") {
                    $("#fantasy").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Action") {
                    $("#action").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Adventure") {
                    $("#adventure").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };
                if (result[length].genres[length].name === "Comedy") {
                    $("#comedy").append(
                        "<div class='block'>\
                 <div class= 'block-img'>\
                  <img src='" + image + "'>\
                  </div>\
                 <div id='block-rating'>'" + rating + "'\
                 </div>\
                 <div class='like'></div>\
                 <div class='info_box'>\
                 <div class='movie_name'>'" + title + "'</div>\
                 <div class='play_movie'></div>\
                 <div class='watch_later'></div>\
                 </div>\
                 </div>"
                    );
                };

                movieID++;

            };

        });
    });
});