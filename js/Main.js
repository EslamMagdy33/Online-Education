
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

let bgColor=["red","blue","#00E77F","yellow"];
for (let i = 0; i < bgColor.length; i++) {
    $(".color-options li").eq(i).css("backgroundColor",bgColor[i])
    $(".color-options li").eq(i).css("color",bgColor[i])
}
$(".color-options li").click(function () { 
    let current_bg=$(this).css("color");
    $(".theme-change").css("color",current_bg);
});
$(".color-box i").click(function(){
    let optionWidth=$(".color-options").outerWidth();
    if ($(".color-box").css("left")=="0px") {
    $('.color-box').animate({"left":-optionWidth},500)      
    }
    else{
    $('.color-box').animate({"left":0},500)      

    }
})

let advisorOffset=$("#advisor").offset().top;
console.log(advisorOffset);
$(window).scroll(function () { 
    if ($(window).scrollTop() > advisorOffset) {
        $(".navbar").css({"backgroundColor":"#9B9B9B","transition":"2s"});
        $(".navbar a").css("color","#0900FF");
    }
    else{
        $(".navbar").css("backgroundColor","#4b4b4b");
        $(".navbar a").css("color","#aaa");
    }
    if($(window).scrollTop() > advisorOffset){
        $("#topbtn").fadeIn(1000);
    }
    else{
        $("#topbtn").fadeOut(1000);

    }
});

$("#topbtn").click(function () { 
    $("body,html").animate({ scrollTop : 0},700);
});

$(".nav-link").click(function(){
    let currentlink=$(this).attr("href");
    let currentOffset=$(currentlink).offset().top;
    $("body,html").animate({ scrollTop : currentOffset},500);
})