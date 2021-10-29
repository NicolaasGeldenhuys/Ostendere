$(function(){

    console.log("Document is ready.");
    
    $(".camImg").hide();

    $(".btn2").hide();

    $(".btn").on("click", function(){
        $(".panel").toggleClass("panel-slide");

        $(".btn2").slideDown(1000);

        $(".btn").slideUp(1000);

        $(".loginIntro").slideUp(1000);

        $(".logoLogin").slideUp(1000);

        $(".camImg").show(1000);
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

        $(".loginIntro").slideDown(1000);

        $(".camImg").hide(1000);

        $(".logoLogin").slideDown(1000);
    });

    $(".btn2").mouseenter(function(){
        $(this).attr("src","img/SignUpButton2.png");
    });

    $(".btn2").mouseleave(function(){
        $(this).attr("src","img/SignUpButton.png");
    });

    $(".submitbtn2").on("click", function(){
        window.location.href = "Pages/Landing-Page.html";
    });
    


        $(".submitbtn").on("click", function(){
            
            var username = $(".username").val();
            var password = $(".password").val();
        
    
        url = "https://owmakerspace.co.za/users/data.json";
    
        $.getJSON(url, function(result){
        
        for(i = 0; i < result.users.length; i++){
            
                 console.log(result.users[i].username);
            if(result.users[i].username === username){
                 
                if(result.password[i].password === password){
                    console.log("The password or email is correct.");
    
                    if(result.users[i].account === "active"){
                        window.location.href = "Pages/Landing-Page.html";
                        sessionStorage.setItem("username", username);                   
                        alert("Successfuly logged in.");
                        console.log("Successfuly logged in.");
                       
    
                    } else{
                        
                        alert("Your account has been suspended. Contact support!");
                    }
    
                } else{
               
                alert("The password or email is incorrect.");
                }
    
            } else {
                alert("Your email or password does not match.");
        
                
            
        }
       
    } //Checking for user
    
        }); //End of request
    
    
    
        }); //End of click event
    
    













});