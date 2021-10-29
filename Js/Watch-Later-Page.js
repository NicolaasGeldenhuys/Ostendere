$(document).ready(function() {



    $(".watch_later").click(function(){
        $(this).parent().removeClass(".block");
    });


    $(".watch_later").click(function(){ 

     var div = $(this).parent().clone();

     sessionStorage.setItem("div_session",div) ;

     console.log(div);
        
     $(".next-movies-containner").append((sessionStorage.getItem("div_session")));

    });


   

});