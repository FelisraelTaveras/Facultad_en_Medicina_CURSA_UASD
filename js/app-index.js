$(document).ready(function () {
    
    /*********************************************** boton hacia arriba **********************************************/
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(600);
        } else {
            $('.ir-arriba').slideUp(600);
        }
    });

    /*hacia abajo*/
    $('.ir-abajo').click(function(){
        $('body, html').animate({
            scrollTop: '1000px'
        }, 1000);
    });

});