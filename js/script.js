/**
 * Created by markozeman on 28.5.2017.
 */

var image_num = 1;


$(document).ready(main);

function main() {
    var audio = new Audio('music/LockedAway.mp3');
    audio.loop = true;
    audio.play();

    window.setInterval(function(){
        change_image();
    }, 5000);

}


function change_image() {
    var str = 'images/speakers_' + image_num.toString() + '.jpg';

    $('#main_image').fadeOut(1000, function(){
        $(this).attr('src', str).fadeIn(1000);
    });

    image_num = (image_num + 1) % 3;
}