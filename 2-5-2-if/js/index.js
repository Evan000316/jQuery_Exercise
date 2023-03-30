const $pic = $("#Pic");

//const 只能assign一次(static)
// const fileNumber = 1;

//let 可以改
let fileNumber = 1;

//全域變數 容易汙染
// var fileNumber = 1;

//利用Js注入屬性
// attribute 控制屬性 attr(要控制的屬性, 屬性的參數)
// $pic.attr("src", "./images/ui03.jpg");

// new method, but can not apply all browser
$pic.attr("src", `./images/ui0${fileNumber}.jpg`);

$pic.click(function(){
    fileNumber = fileNumber + 1; //fileNumber += 1; // fileNumber++;
    console.log(fileNumber);
    $(this).attr("src", `./images/ui0${fileNumber}.jpg`);
    if(fileNumber == 4){
        fileNumber = 0;
    }
});




//--------------------------javascript----------------------------------
// let fileNumber = 1;
// const elementPic = document.getElementById("Pic");
// elementPic.setAttribute("src", `./images/ui0${fileNumber}.jpg`);
// elementPic.addEventListener("click", function(){
//     console.log(fileNumber);
//     if(fileNumber < 4){
//         fileNumber++;
//     } else {
//         fileNumber = 1;
//     }
//    this.setAttribute("src", `./images/ui0${fileNumber}.jpg`);

// })

