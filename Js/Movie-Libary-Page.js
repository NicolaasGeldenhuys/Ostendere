$(document).ready(function(){

    //not permanent
    var genres = [
        {genre: "fiction"},
        {genre: "mystery"},
        {genre: "horror/thriller"},
        {genre: "drama"},
        {genre: "historical"},
        {genre: "western"},
        {genre: "fantasy"},
        {genre: "action"},
        {genre: "adventure"},
        {genre: "comedy"},
    ];

    //like
    console.log("This is a test.") ;

    $("#rating").click(function(){
        $(this).attr("src","img/icons/full_heart.svg")
    });

    //row append
    for(length=0; length < genres.length; length++){
        
        var row = `
        <div class="content-block">
        <div class="title-sortBy">`+ genres[length].genre +`</div>
    
        <div class="block">
    
            <div id="rating">
                <!--(api)-->
            </div>
            <div class="like"></div>
            <div class="info_box">
    
            <div class="movie_name">Shrek 2</div>
            <div class="play_movie"></div>
            <div class="watch_later"></div>
    
            </div>
        </div>
    </div>
        `;
       
        $(".content-container").append(row) ;
    
    };




});