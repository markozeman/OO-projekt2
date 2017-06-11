/**
 * Created by markozeman on 28.5.2017.
 */

var image_num = 1;


$(document).ready(main);

function main() {
    var audio = new Audio('music/LockedAway.mp3');
    audio.loop = true;
    // audio.play();

    window.setInterval(function(){
        change_image();
    }, 5000);

    $(window).scroll(function(){
        checkAnimation();
    });
}


function change_image() {
    var str = 'images/speakers_' + image_num.toString() + '.jpg';

    $('#main_image').fadeOut(1000, function(){
        $(this).attr('src', str).fadeIn(1000);
    });

    image_num = (image_num + 1) % 3;
}



function checkAnimation() {
    var elements = [];
    elements.push($($('.text_bg_1')[0]));
    elements.push($($('.text_bg_2')[0]));
    elements.push($($('.text_bg_3')[0]));
    elements.push($($('.text_bg_4')[0]));

    elements.push($($('#pic_1')));
    elements.push($($('#pic_2')));
    elements.push($($('#pic_3')));
    elements.push($($('#pic_4')));

    // If the animation has already been started
    elements.forEach(function ($elem) {
        if (isElementInViewport($elem)) {
            $elem.addClass('start');
            $elem.children().children().addClass('start');
        }
        else {
            $elem.removeClass('start');
            $elem.children().children().removeClass('start');
        }
    });

}

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}



