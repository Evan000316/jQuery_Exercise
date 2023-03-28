const $advItems = $("#AdvLs .adv-item");

// 用後代的方式避免其他地方也有adv-item
$advItems .hover(function(){
    $(this).stop(true, false).animate({
        top : 0
    }, 500);
    $(this).siblings().stop(true, false).animate({
        top : 118
    }, 500);
}, function(){
    // $(this).stop(true, false).animate({
    //     top : 166
    // }, 500);
    $advItems.stop(true, false).animate({
        top : 166
    }, 500);
});