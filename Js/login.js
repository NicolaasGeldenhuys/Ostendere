$(function(){

    console.log("Document is ready.");

    $(".btn2").hide();

    $(".btn").on("click", function(){
        $(".panel").toggleClass("panel-slide");
        $(".btn2").slideDown(1000);
        $(".btn").slideUp(1000);
    });

    $(".btn").mouseenter(function(){
        $(this).attr("src","img/LoginButton2.png");
    });

    $(".btn").mouseleave(function(){
        $(this).attr("src","img/LoginButton.png");
    });

    $(".btn2").on("click", function(){
        $(".panel").toggleClass("panel-slide");
        $(".btn2").slideUp(1000);
        $(".btn").slideDown(1000);
    });

    $(".btn2").mouseenter(function(){
        $(this).attr("src","img/SignUpButton2.png");
    });

    $(".btn2").mouseleave(function(){
        $(this).attr("src","img/SignUpButton.png");
    });

});