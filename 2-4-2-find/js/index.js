const $naviLs = $("#NaviLs > li")
console.log($naviLs);

$naviLs.hover(function(){
    $(this).find("ul").stop(true,false).slideDown();
}, function(){
    $(this).find("ul").stop(true,false).slideUp();
});