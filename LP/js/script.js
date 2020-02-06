
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
    // $('.top-heading').append(
    //     '<style type="text/css">body {display:none;}</style>'
    // );
    // $('.top-heading').load(function() {
    //     $('.top-heading').fadeIn("slow");
    // });
});