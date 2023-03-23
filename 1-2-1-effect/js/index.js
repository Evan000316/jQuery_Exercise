//顯示
$("#Btn1").on("click", function(){
    $("#Pic").show();
})

//隱藏
$("#Btn2").click(function(){
    $("#Pic").hide();
})

//切換
function togglePicture(){
    $("#Pic").toggle();
}
$("#Btn3").click(togglePicture);