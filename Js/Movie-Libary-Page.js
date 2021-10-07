$(document).ready(function(){

    //not permanent
    var genres = [
        {genre: "Fiction"},
        {genre: "Mystery"},
        {genre: "Horror/thriller"},
        {genre: "Drama"},
        {genre: "Historical"},
        {genre: "Western"},
        {genre: "Fantasy"},
        {genre: "Action"},
        {genre: "Adventure"},
        {genre: "Comedy"},
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
    
            <div id="block-rating">
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