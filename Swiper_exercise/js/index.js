const $swiper = $('#Swiper');
console.log($swiper);

const $swiperItems = $swiper.find(".swiper-li");
console.log($swiperItems);

const $swiperPageItem = $swiper.find(".swiper-pagination");
console.log($swiperPageItem);

const $swiperBtnPrev = $(".swiper-btn-prev");
console.log($swiperBtnPrev);
const $swiperBtnNext = $(".swiper-btn-next");
console.log($swiperBtnNext);

let index = 0;

//initial UI
// //一個屬性直接用.css
// $swiperItems.eq(index).css('display', 'block');
// //多個屬性直接用class套  addClass不用.
// $swiperPageItem.eq(index).addClass("swiper-pagination-active")
setSwiperStatus();

function setSwiperStatus(){
    $swiperItems
        .eq(index).stop(true, false).fadeIn(500)//.show()//.css('display', 'block')
        .siblings().stop(true, false).fadeOut(500);//.hide();//.css("display", "none")

    $swiperPageItem
    .eq(index).addClass("swiper-pagination-active")
    .siblings().removeClass("swiper-pagination-active");

    // $swiperItems.siblings().css("display", "none");
    // $swiperPageItem.siblings().removeClass("swiper-pagination");
    // //一個屬性直接用.css
    // $swiperItems.eq(index).css('display', 'block');
    // //多個屬性直接用class套  addClass不用.
    // $swiperPageItem.eq(index).addClass("swiper-pagination-active")
}


$swiperBtnPrev.click(function(){
    // if(index > 0){
    //     index--;    
    // } else {
    //     index = 4;
    // }
    index = index > 0 ? --index : 4;
    console.log(index); 
    setSwiperStatus();
});


$swiperBtnNext.click(function(){
    if(index < 4){
        index++;
    } else {
        index = 0;
    }
    console.log(index);
    setSwiperStatus();
});


