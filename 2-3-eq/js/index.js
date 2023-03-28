const $thumbItems = $("#ThumbLs > img"); // > 表示只抓後代的第一層
console.log($thumbItems);

const $picbItems = $("#PicLs > img");
console.log($picbItems);



$thumbItems.click(function(){
    console.log($(this).index());
    $picbItems.fadeOut();


    // $picbItems.eq($(this).index()).fadeIn();
    const index = $(this).index()
    // $picbItems.eq(index).fadeIn();
    $picbItems.eq(index).fadeIn()
    .siblings().fadeOut(); //$picbItems.eq(index).fadeIn().siblings().fadeOut();
});
