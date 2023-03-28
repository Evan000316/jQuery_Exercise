const $advItem = $("#AdvLs .adv-item");
// const $advItem = $("#AdvLs").children();
// const $advItem = $("#AdvLs").find("".adv-item");
console.log($advItem);

$advItem.hover(function(){
    $(this).stop(true, false).animate({top : 0}, 500);
    $(this).prev().stop(true, false).animate({top : 116}, 500);
    $(this).next().stop(true, false).animate({top : 116}, 500);
}, function(){
    $advItem.stop(true, false).animate({top : 166}, 500);
});