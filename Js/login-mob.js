$(function(){

    console.log("Document is ready.");
    
    
    
        $(".container").slideDown();
        $(".container2").slideUp();
    
    
        $(".signtabbtn").on("click", function(){
            $(".container").slideUp();
            $(".container2").slideDown();
           
        });
    
       $(".logintabbtn").on("click", function(){
             $(".container").slideDown();
             $(".container2").slideUp();
            
         });
    
         $(".keeploggedbtn").on("click", function(){
            $(this).toggleClass("keeploggedbtntog");
        });

        
        $(".keeploggedbtn").on("click", function(){
            $(this).toggleClass("keeploggedbtntog");
        });

        $(".signtabbtn").on("click", function(){
            $("form").css("margin-top", "30px");
            
        });

        $(".logintabbtn").on("click", function(){
            $("form").css("margin-top", "-68px");
            
        });
});