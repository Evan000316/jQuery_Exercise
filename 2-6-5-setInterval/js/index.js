let picIndex = 0;
let picInterval;

const $slide = $("#Slide");
console.log($slide);
const $slideInner = $slide.find(".img-inner");
console.log($slideInner);

// index = 0 -> picture 1, left = 0
// index = 1 -> picture 2, left = -100%
// index = 2 -> picture 3, left = -200%
// index = 3 -> picture 4, left = -300%
// index = 4 -> picture 5, left = -400%

function movePicLeft() {
    picIndex = picIndex < 4 ? ++picIndex : 0;
    // picIndex++;
    console.log(picIndex);
    // if(picIndex > 4){
    //     picIndex = 0;
    // }
    $slideInner.css("left", `${-picIndex * 100}%`);
    
    
}

function todo() {
    picInterval = setInterval(movePicLeft, 1000);
}


todo();

$slide.hover(function(){
    clearInterval(picInterval);
}, function(){
    todo();
});


