$(function() {
    console.log('I see You');

    const P_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=20f38ff4b76767fa633118365643bf5d&language=en-US&page=1';

    $.getJSON(P_url, function(P_Movie) {

        console.log(P_Movie.results.length);

        console.log("For loop is going to start");
        //console.log(P_Movie.length);
        for (i = 0; i < P_Movie.results.length; i++) {
            console.log("For loop is running");
            // console.log(i);
            console.log(P_Movie.results[i].title);
            var poster = "https://image.tmdb.org/t/p/w500/" + P_Movie.results[i].poster_path
                // console.log(poster);

            //     console.log(result[i].page.results.title);
            //    $(".slider").append(
            //        "<ul class='slides'>\
            //            <li class='slide'><img src='' alt=''></li>\
            //          <li class='slide'><img src='' alt=''></li>\
            //          <li class='slide'><img src='' alt=''></li>\
            //           <li class='slide'><img src='' alt=''></li>\
            //          <li class='slide'><img src='' alt=''></li>\
            //          </ul>\
            //      <div class='movieInfo'>\
            //          <h1></h1>\
            //        <p class='synopsis'>synopsis:" + P_Movie.results[i].overview + "</p>\
            //              <div class='btnContainer'>\
            //                  <div class='btnWatchLater'>\
            //                      <h2>Watch Later</h2>\
            //                 </div>\
            //                  <!--btnWatchLater-->\
            //                  <div class='btnWatchNow'>\
            //                        <h2>Watch Now</h2>\
            //                       </div>\
            //                          <!--btnWatchNow-->\
            //               </div>\
            //                <!--btnContainer-->\
            //   </div>\
            //    <!--movieInfo-->"
            //     );

            console.log("I have appended slider");
            $(".item").append(
                "<div class='movie'>\
                <img style='height: 400px; width:700px; ' src=' " + poster + " ' alt=' '>\
                </div>"
            );
            //console.log(P_Movie.results[i].backdrop_path);
            // console.log(P_Movie.results[i].poster_path);


        }
        console.log("For loop is done");
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