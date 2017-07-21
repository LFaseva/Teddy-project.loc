$(function() {

    var $slider = $('.slider');
    var $images = $('.slider__base img');
    var active = 0;

    var timer = setInterval(function(){
        nextImage();
    },3000);

    $('.slider__btn--pre').on('click', function(){
        clearInterval(timer);
        prevImage();
    });
    $('.slider__btn--next').on('click', function(){
        clearInterval(timer);
        nextImage();
    });

    function prevImage(){
        $images.eq(active).removeClass('active');
        active--;
        if(active < 0 ){
            active = $images.length - 1;
        }
        $images.eq(active).addClass('active');
    }

    function nextImage(){
        $images.eq(active).removeClass('active');
        active++;
        if(active >= $images.length){
            active = 0;
        }
        $images.eq(active).addClass('active');
    }


});


// window.onload = function() {
//
//     var btn_pre = document.querySelector('.slider .slider__btn--pre');
//     var btn_next = document.querySelector('.slider .slider__btn--next');
//
//     var images = document.querySelectorAll('.slider__base img');
//     var i = 0;
//
//
//     btn_pre.onclick = function(){
//
//         images[i].className = '';
//         i--;
//         if(i < 0){
//             i = images.length - 1;
//         }
//         images[i].className = 'showed';}
//
//     btn_next.onclick = function(){
//         images[i].className = '';
//         i++;
//         if (i >= images.length) {
//             i = 0;
//         }
//         images[i].className = 'showed';}
//
// }
