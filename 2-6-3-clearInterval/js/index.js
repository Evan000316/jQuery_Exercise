let fileIndex = 0;
let picInterval;
const $pic = $("#Pic");
const $btnPlay = $("#BtnPlay");
const $btnPause = $("#BtnPause");
const duration = 100;


function playNextPic() {
    fileIndex = fileIndex < 24 ? fileIndex+=1 : 1;
    console.log(fileIndex);
    $pic.attr('src', './images/pic' + fileIndex + '.jpg');
}

//initial UI
picInterval = setInterval(playNextPic, duration);

function pause() {
    clearInterval(picInterval);
}

function play() {
    clearInterval(picInterval); //避免重複點擊圖片造成播放加速
    picInterval = setInterval(playNextPic, duration);
}

$btnPause.click(pause);
$btnPlay.click(play);
