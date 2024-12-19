$(function(){
    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth02').slideDown();
    });
    $('.gnb > li').mouseleave(function(){
        $('.depth02').slideUp();
    });
});