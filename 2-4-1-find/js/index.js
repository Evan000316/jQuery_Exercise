// const $lessonItem = $("#LessonLs .lesson-item");
// console.log($lessonItem);

// $lessonItem.click(function(){
//     // $(this).find(".lesson-desc").slideToggle()
//     // $(this).siblings().find(".lesson-desc").slideUp();

//     $(this).find(".lesson-desc").slideToggle()
//     .parents().siblings().find(".lesson-desc").slideUp();
// });

const $lessonItem = $("#LessonLs .lesson-title");

$lessonItem.click(function(){
    console.log($lessonItem);
    $(this).next().stop(true, false).slideToggle();
    $(this).parent().siblings().find(".lesson-desc").slideUp();
});