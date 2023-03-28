
$('#BtnRight').click(function () {
    $("#Rocket").stop(true, false).animate({
        left : "+=100"
    }, 1000);
});

$('#BtnLeft').click(function () {
    $("#Rocket").stop(true, false).animate({
        left : "-=100"
    }, 1000);
});

