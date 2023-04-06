const $pic = $("#Pic");
const $wrap = $("#Wrap");
const $btnPrev = $("#BtnPrev");
const $btnNext = $("#BtnNext");

let fileIndex = 0;
let picInterval;

function playPrevPicture() {
    fileIndex = fileIndex > 1 ? --fileIndex : 24;
    console.log(fileIndex);
    $pic.attr('src', `./images/pic${fileIndex}.jpg`)
}

function playNextPicture() {
    fileIndex = fileIndex < 24 ? ++fileIndex : 1;
    console.log(fileIndex);
    $pic.attr('src', `./images/pic${fileIndex}.jpg`)
}

function setPicInterval() {
    picInterval = setInterval(playNextPicture, 100);
}
//initial UI
setPicInterval();


//hover event
function mouseIn() {
    clearInterval(picInterval);
}
function mouseOut() {
    setPicInterval();
}
$wrap.hover(mouseIn, mouseOut);

//button click event
$btnPrev.click(playPrevPicture);
$btnNext.click(playNextPicture);
