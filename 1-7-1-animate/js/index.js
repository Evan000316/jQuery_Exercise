$("#BtnRight").click(function(){
    console.log("----------Right Button on click.---------.");
    // $("#Rocket").css('left', 600); 
    /**
     * animate(物件{}, 持續時間(毫秒), , )
     */
    $("#Rocket").stop(true, false).animate({
        left : 600,
        top : 300
    }, 1000);
});

$("#BtnLeft").click(function(){
    $("#Rocket").stop(true, false).animate({
        left : 0
    }, 1000)
});