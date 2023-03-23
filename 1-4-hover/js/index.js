//事件不用駝峰命名  mouseenter
//滑鼠滑入
// $("#Item1").mouseover(function(){
//     $("#Child1").slideDown();
// });

// //滑鼠滑出         mouseleave
// $("#Item1").mouseout(function(){
//     $("#Child1").slideUp();
// });


//mouseover 和 mouseout 已經整合成 hover, 兩個方法都會有佇列動畫問題,滑鼠滑出都會記一次次數並撥放動畫
//@ .hover(In fuction(){}, Out function(){})
//@ .stop (Boolean 清除佇列動畫, Boolean 立即結束動畫)
$("#Item1").hover(function(){
    $("#Child1").stop(true, false).slideDown();
}, function(){
    $("#Child1").stop(true, false).slideUp();
});
    

$("#Item2").hover(function(){
    $("#Child2").stop(true, false).fadeIn();
}, function(){
    $("#Child2").stop(true, false).fadeOut();
});

$("#Item3").hover(function(){
    $("#Child3").stop(true, false).show();
}, function(){
    $("#Child3").stop(true, false).hide();
});
    