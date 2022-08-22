$(document).ready(function() {

    $("#goal1").on("click", function(){
        $(".second, .third, .fourth").hide();
        $(".first").show();
        $("#des2, #des3, #des4, .title1").hide();
        $("#des1, .title2, .title3, .title4").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal2, #goal3, #goal4").removeClass("goalsx").addClass("goals");
        })  
    
    $("#goal2").on("click", function(){
        $(".first, .third, .fourth").hide();
        $(".second").show();
        $("#des1, #des3, #des4, .title2").hide();
        $("#des2, .title1, .title3, .title4").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal3, #goal4").removeClass("goalsx").addClass("goals");
        })

    $("#goal3").on("click", function(){
        $(".first, .second, .fourth").hide();
        $(".third").show();
        $("#des1, #des2, #des4, .title3").hide();
        $("#des3, .title1, .title2, .title4").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal2, #goal4").removeClass("goalsx").addClass("goals");
        })    

    $("#goal4").on("click", function(){
        $(".first, .second, .third").hide();
        $(".fourth").show();
        $("#des1, #des2, #des3, .title4").hide();
        $("#des4, .title1, .title2, .title3").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal2, #goal3").removeClass("goalsx").addClass("goals");
        })    


    $(window).resize(function() {
        if ($(this).width() < 992) {
            $("#goal2, #goal3, #goal4").insertAfter(".after");

            $("#goal1").on("click", function(){
                $("#goal2, #goal3, #goal4").insertAfter(".after");
                })  
            
            $("#goal2").on("click", function(){
                $(this).insertAfter("#goal1");
                $("#goal3, #goal4").insertAfter(".after");
                })
        
            $("#goal3").on("click", function(){
                $("#goal2").insertAfter("#goal1");
                $(this).insertAfter("#goal2");
                $("#goal4").insertAfter(".after");
                })    
        
            $("#goal4").on("click", function(){
                $("#goal2").insertAfter("#goal1");
                $("#goal3").insertAfter("#goal2");
                $(this).insertAfter("#goal3");
                }) 
        } 

        });

    $(window).resize(function() {
        if ($(this).width() > 992) {
            $("#goal2, #goal3, #goal4").insertAfter("#goal1");
            
            $("#goal1").on("click", function(){
                $("#goal2, #goal3, #goal4").insertAfter("#goal1");
                })  
            
            $("#goal2").on("click", function(){
                $(this).insertAfter("#goal1");
                $("#goal3, #goal4").insertAfter("#goal2");
                })
        
            $("#goal3").on("click", function(){
                $("#goal2").insertAfter("#goal1");
                $(this).insertAfter("#goal2");
                $("#goal4").insertAfter("#goal3");
                })    
        
            $("#goal4").on("click", function(){
                $("#goal2").insertAfter("#goal1");
                $("#goal3").insertAfter("#goal2");
                $(this).insertAfter("#goal3");
                }) 
        } 

    });

    if (window.matchMedia('(max-width: 992px)').matches) {
        $("#goal2, #goal3, #goal4").insertAfter(".after");

        $("#goal1").on("click", function(){
            $("#goal2, #goal3, #goal4").insertAfter(".after");
        })  

        $("#goal2").on("click", function(){
            $(this).insertAfter("#goal1");
            $("#goal3, #goal4").insertAfter(".after");
        })

        $("#goal3").on("click", function(){
            $("#goal2").insertAfter("#goal1");
            $(this).insertAfter("#goal2");
            $("#goal4").insertAfter(".after");
        })    

        $("#goal4").on("click", function(){
            $("#goal2").insertAfter("#goal1");
            $("#goal3").insertAfter("#goal2");
            $(this).insertAfter("#goal3");
        }) 
    
    }

    if (window.matchMedia('(min-width: 993px)').matches) {
         $("#goal2, #goal3, #goal4").insertAfter("#goal1");
            
        $("#goal1").on("click", function(){
            $("#goal2, #goal3, #goal4").insertAfter("#goal1");
        })  
            
        $("#goal2").on("click", function(){
            $(this).insertAfter("#goal1");
            $("#goal3, #goal4").insertAfter("#goal2");
        })
        
        $("#goal3").on("click", function(){
            $("#goal2").insertAfter("#goal1");
            $(this).insertAfter("#goal2");
            $("#goal4").insertAfter("#goal3");
        })    
        
        $("#goal4").on("click", function(){
            $("#goal2").insertAfter("#goal1");
            $("#goal3").insertAfter("#goal2");
            $(this).insertAfter("#goal3");
        }) 
    }
      
});



