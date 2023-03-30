let fileNumber = 1;
const $pic = $("#Pic")
const duration = 2000;

function display(){
    console.log(fileNumber);
    if(fileNumber < 5){
        fileNumber++;
    }else{
        fileNumber = 1;
    }
    $pic.attr("src", `./images/photo${fileNumber}.jpg`)
    
}

setInterval(display, duration);



// for(let index = 1; index <= 4; index++){
//     console.log(index);
//     setInterval(function(){
//         $pic.attr("src", `./images/photo${index}.jpg`)
//     }, 500); 
//     if(index == 4){
//         index = 1;
//     }
// }
