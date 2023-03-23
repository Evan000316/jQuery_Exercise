
//------onClick事件寫法------
//method 1: .on("event", function(){})
$("h1").on("click", function(){
    alert("Hello World!")
    // 分號可加可不加
    // alert("Hello World!");
})
//method 2: .event(function(){})
$("h1").click(function(){
    alert("Hello World~!")
})
//method 3: 具名函式
function showHelloWorld(){
    alert("Hello World~!!")
}
$("p").click(showHelloWorld);