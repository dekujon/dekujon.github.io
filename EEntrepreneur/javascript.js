$(document).ready(function() {
    
    $("#goal1").on("click", function(){
        $(".second, .third, .fourth").hide();
        $(".first").show();
        $("#des2, #des3, #des4").hide();
        $("#des1").show();
        })  
    
    $("#goal2").on("click", function(){
        $(".first, .third, .fourth").hide();
        $(".second").show();
        $("#des1, #des3, #des4").hide();
        $("#des2").show();
        })

    $("#goal3").on("click", function(){
        $(".first, .second, .fourth").hide();
        $(".third").show();
        $("#des1, #des2, #des4").hide();
        $("#des3").show();
        })    

    $("#goal4").on("click", function(){
        $(".first, .second, .third").hide();
        $(".fourth").show();
        $("#des1, #des2, #des3").hide();
        $("#des4").show();
        })    

})