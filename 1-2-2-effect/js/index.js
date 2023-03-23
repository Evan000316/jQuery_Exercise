//上捲
$("#Btn1").on("click", function(){
    // @ slideup(Int slide speed), default:400ms
    $("#Pic").slideUp(5000);
});

//下滑
$("#Btn2").click(function(){
    $("#Pic").slideDown();
});

//切換
function togglePicture(){
    $("#Pic").slideToggle();
};
$("#Btn3").click(togglePicture);