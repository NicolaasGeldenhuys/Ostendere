$(function(){

    console.log("Document is ready.");
    
    

    $(".container").slideUp();
    $(".container2").slideDown();


    $(".signtabbtn").on("click", function(){
        $(".container").slideUp();
        $(".container2").slideDown();
       
    });

   $(".logintabbtn").on("click", function(){
         $(".container").slideDown();
         $(".container2").slideUp();
        
     });

    // $(".btn").mouseenter(function(){
    //     $(this).attr("src","img/LoginButton2.png");
    // });

    // $(".btn").mouseleave(function(){
    //     $(this).attr("src","img/LoginButton.png");
    // });

    // $(".btn2").on("click", function(){
    //     $(".panel").toggleClass("panel-slide");

    //     $(".btn2").slideUp(1000);

    //     $(".btn").slideDown(1000);

    //     $(".loginIntro").slideDown(1000);

    //     $(".camImg").hide(1000);

    //     $(".logoLogin").slideDown(1000);
    // });

    // $(".btn2").mouseenter(function(){
    //     $(this).attr("src","img/SignUpButton2.png");
    // });

    // $(".btn2").mouseleave(function(){
    //     $(this).attr("src","img/SignUpButton.png");
    // });

});