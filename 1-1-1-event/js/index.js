
// CSS選取 : h1
// jQuery選取 : $("h1")

//標題一的(.) aclick事件(滑鼠放開) 匿名函式(彈出視窗)
$("h1").on("click", function(){
    // alert(666666666666);
    alert("Hello World");
})

// $("p").on("click", function(){
//     alert("OMG");
// })

//---------------複數選取---------------
// method 1:
// $("h1, p").on("click", function(){
//     // alert(666666666666);
//     alert("Hello World");
// })

//method 2:
//function 拉出來要取名字(具名函式)
function alertWindow (){
    // alert(666666666666);
    alert("Hello World");
}

// $("h1, p").on("click", alertWindow); h1, p 需要不同功能不適用
$("h1").on("click", alertWindow);
$("p").on("click", alertWindow);
//---------------複數選取---------------

$("h1").on("mouseover", alertWindow); //滑鼠滑入
