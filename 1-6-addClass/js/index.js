//載入網頁預設Type1
$("#EntryType").addClass("Type1");

$("#Tab1").click(function(){
    // $("#EntryType").removeClass("Type2");
    // $("#EntryType").removeClass("Type3");
    //移除全部(缺點: 不該移除也沒了，class一多刪除完還要重新加載，效能差)
    // $("#EntryType").removeClass();
    // $("#EntryType").addClass("Type1 entry-out");

    // $("#EntryType").removeClass().addClass("Type1 entry-out");
    $("#EntryType")
    .removeClass()
    .addClass("Type1 entry-out");
});

$("#Tab2").click(function(){
    // $("#EntryType").removeClass("Type1");
    // $("#EntryType").removeClass("Type3");
    $("#EntryType").removeClass();
    $("#EntryType").addClass("Type2");
    $("#EntryType").addClass("entry-out");
});

$("#Tab3").click(function(){
    // $("#EntryType").removeClass("Type1");
    // $("#EntryType").removeClass("Type2");
    $("#EntryType").removeClass();
    $("#EntryType").addClass("Type3 entry-out");
});