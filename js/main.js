$(function() {
    $('.quote__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });
    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('open-menu');
        $('.menu__list').toggleClass('open-menu');
    });
    $('.menu__list').on('click','a',function(event){
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({scrollTop:top}, 400);
    });
    
    var btn = $('#up');
    
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    }); 
});