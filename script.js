$(document).ready(function () {
    $('.container').css('transform', 'translateY(-16vh)');
    $(".container").addClass('visible');

    $('.imgs').mouseover(function () { 
        $(this).find('img').css("transform", "rotateY(180deg)");
    });
    $('.imgs').mouseleave(function () { 
        $(this).find('img').css("transform", "rotateY(360deg)");
    });
   $('button').click(function (e) { 
    const elements = document.querySelectorAll('.content, h2, p, .linked, h1');
    $(elements).toggleClass('changecolor');
    $('body').toggleClass('dark-mode');
    e.preventDefault();
    
   });
});
