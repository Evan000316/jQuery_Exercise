// 有$就代表從網頁找，網站大了可以有效能問題
      //$可不加，可用以判斷只是變數或是網頁元素
const $content = $('#Content');

$("#BtnLg").click(function(){
    // $("#Content").css('fontSize', "2em"); "-"可以用駝峰命名取代
    // $("#Content").css('font-size', "2em");
    // $("#Content").css('backgroundColor', "pink");
    // $("#Content").css('letterSpacing', 5);
    $("#Content").css({
        // 'fontSize': "1.5em",
        // 'backgroundColor' : '#ddd',
        // 'letter-spacing' : 10
        fontSize: "1.5em",
        backgroundColor : '#ddd',
        letterSpacing : 10
    });
});
$("#BtnSm").click(function(){
    // @ .css(屬性, 數值(預設px))
    $("#Content").css('font-size', 15);
});
