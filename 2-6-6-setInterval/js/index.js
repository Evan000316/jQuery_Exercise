let index = 0;
let picInterval;
const $slide = $("#Slide");
const $slideImgInner = $slide.find(".img-inner");
const $paginationItem = $slide.find(".pagination-item");
const $imgResp = $slide.find(".img-resp");
console.log($slide);
console.log($slideImgInner);
console.log($paginationItem);
console.log($imgResp.length);

const  duration = 1000;

function setSlide(){
    // index = index < 4; index += 1 : 0;
    index++;
    if(index > 4){
        index = 0;
    }
    console.log(index);
    $slideImgInner.css("left", `${-index * 100}%`)
    $paginationItem
    .eq(index).addClass("js-pagination-item")
    .siblings().removeClass("js-pagination-item");//removeClass()會移除全部
};

//init
picInterval = setInterval(setSlide, duration);
$paginationItem.eq(index).addClass("js-pagination-item");


$slide.hover(function(){
    clearInterval(picInterval);
}, function(){
    picInterval = setInterval(setSlide, duration);
});

$paginationItem.click(function(){
    index = $(this).index();
    console.log(index);
    $slideImgInner.css("left", `${-index * 100}%`)
    $paginationItem
    .eq(index).addClass("js-pagination-item")
    .siblings().removeClass("js-pagination-item");
})