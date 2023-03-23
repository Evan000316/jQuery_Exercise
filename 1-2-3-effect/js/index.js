//淡入
$("#Btn1").click(function(){
    // @ sliden(Int fade speed), default:400ms
    $("#Pic").fadeIn(5000);
})

//淡出
$("#Btn2").click(function(){
    // @ fadeOut(Int fade speed), default:400ms
    $("#Pic").fadeOut(5000);
})

//半透明0.5
$("#Btn3").click(function(){
    // @ fadeTo(Int fade speed, 透明度), No default.
    $("#Pic").fadeTo(5000, .5);
})

//半透明1
$("#Btn4").click(function(){
    // @ fadeTo(Int fade speed, 透明度), No default.
    $("#Pic").fadeTo(5000, 1);
})

//切換
$("#Btn5").click(function(){
    $("#Pic").fadeToggle(5000);
})