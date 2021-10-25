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



    


        $(".btn").on("click", function(){
            
            var username = $(".username").val();
            var password = $(".password").val();
    
        url = "https://api.themoviedb.org/3/movie/76341?api_key=20f38ff4b76767fa633118365643bf5d";
    
        $.getJSON(url, function(result){
        console.log(result.users);
    
        for(i = 0; i < result.users.length; i++){
    
            if(result.users[i] === username){
                console.log("The user does exist.");
                
                if(result.password[i] === password){
                    console.log("The password is correct.");
    
                    if(result.account[i] === "active"){
                        window.location.href = "#";
                        sessionStorage.setItem("username", username);                   
                        console.log("Successfuly logged in.");
                        $(".messsage").css("background-color","green");
    
                    } else{
                        $(".messsage").css("background-color","yellow");
                        console.log("Your account has been suspended. Contact support!");
                    }
    
                } else{
                $(".messsage").css("background-color","orange");
                console.log("The password is incorrect.");
                }
    
            } else {
            $(".messsage").css("background-color","red");    
            console.log("Your email or password does not match.");
            } //Checking for user
    
        }
    
        }); //End of request
    
    
    
        }); //End of click event
    
    













});