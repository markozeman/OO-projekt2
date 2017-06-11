/**
 * Created by markozeman on 11.6.2017.
 */


var top_num = 1;
var monitor_num = 1;
var desk_num = 1;
var all_num = 1;


$(document).ready(main);

function main() {
    window.setInterval(function () {
        change_image_products();
    }, 5000);

    window.setInterval(function () {
        change_image_products_small();
    }, 2500);


    $('.text_1').hide();
    $('.text_2').hide();
    $('.text_3').hide();

    var h = document.getElementById('desk').clientHeight;
    var w = document.getElementById('desk').clientWidth;

    var h_2 = document.getElementById('all_wood').clientHeight;
    var w_2 = document.getElementById('all_wood').clientWidth;

    $('#wrap').hover(function () {
        if ( $('.image_1').css('display') == 'none' ) {
            $('.image_1').show(500);
            $('.text_1').hide(500);
        }
        else if ( $('.text_1').css('display') == 'none' ) {
            var s_w = 'width: ' + w.toString() + 'px';
            var s_h = 'height: ' + h.toString() + 'px';
            document.getElementsByClassName('text_1')[0].setAttribute("style", s_w);
            document.getElementsByClassName('text_1')[0].setAttribute("style", s_h);

            $('.text_1').show(500);
            $('.image_1').hide(500);
        }
    });

    $('#wrap_2').hover(function () {
        if ( $('.image_2').css('display') == 'none' ) {
            $('.image_2').show(500);
            $('.text_2').hide(500);
        }
        else if ( $('.text_2').css('display') == 'none' ) {
            var s_w = 'width: ' + w.toString() + 'px';
            var s_h = 'height: ' + h.toString() + 'px';
            document.getElementsByClassName('text_2')[0].setAttribute("style", s_w);
            document.getElementsByClassName('text_2')[0].setAttribute("style", s_h);

            $('.text_2').show(500);
            $('.image_2').hide(500);
        }
    });

    $('#wrap_3').hover(function () {
        if ( $('.image_3').css('display') == 'none' ) {
            $('.image_3').show(500);
            $('.text_3').hide(500);
        }
        else if ( $('.text_3').css('display') == 'none' ) {
            var s_w = 'width: ' + w_2.toString() + 'px';
            var s_h = 'height: ' + h_2.toString() + 'px';
            document.getElementsByClassName('text_3')[0].setAttribute("style", s_w);
            document.getElementsByClassName('text_3')[0].setAttribute("style", s_h);

            $('.text_3').show(500);
            $('.image_3').hide(500);
        }
    });

}


function change_image_products() {
    // TOP
    var top_str = 'images/speaker-lifestyle-nyc-' + top_num.toString() + '.jpg';
    $('#main_image').fadeOut(750, function(){
        $(this).attr('src', top_str).fadeIn(750);
    });
    top_num = (top_num + 1) % 4;
}


function change_image_products_small() {
    // DESK
    var desk_str = 'images/walnut-desk-' + desk_num.toString() + '.jpg';
    $('#desk').fadeOut(750, function(){
        $(this).attr('src', desk_str).fadeIn(750);
    });
    desk_num = (desk_num + 1) % 4;

    // MONITOR
    var monitor_str = 'images/walnut-monitor_desk_' + monitor_num.toString() + '.jpg';
    $('#monitor').fadeOut(750, function(){
        $(this).attr('src', monitor_str).fadeIn(750);
    });
    monitor_num = (monitor_num + 1) % 8;

    // ALL
    var all_str = 'images/walnut-' + all_num.toString() + '.jpg';
    $('#all_wood').fadeOut(750, function(){
        $(this).attr('src', all_str).fadeIn(750);
    });
    all_num = (all_num + 1) % 3;
}