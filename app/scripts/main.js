'use strict';
$('#click').click(function () {
    var state = $('#click').data('state');
    switch (state) {
        case 1 :
            $('body').children().eq(3).hide();
            $('#text').show().addClass('animated delay-12').css('animation-duration', '2s');
            $('#index-page4').addClass('animated Move');
            $('#click').attr('data-state', '2');
            break;
        case 2 :

            $('#text').hide();
            $('#index-page4').addClass('Move1').removeClass('Move');
            setTimeout(function () {
                $('body').children().eq(4).show();
                animate1();
                $('#click').attr('data-state', '3');
            }, 1800);

            break;
        case 3 :
            $('body').children().eq(4).hide();
            $('#text').show();
            $('#index-page4').addClass('Move2').removeClass('Move1');
            $('#click').attr('data-state', '4');
            break;
        case 4 :

            $('#text').hide();
            $('#index-page4').addClass('Move3').removeClass('Move2');
            setTimeout(function () {
                $('body').children().eq(5).show();
                animate2();
                $('#click').attr('data-state', '5');
            }, 500);

            break;
        case 5 :
            $('body').children().eq(5).hide();
            $('#text').show();
            $('#index-page4').addClass('Move4').removeClass('Move3');
            $('#click').attr('data-state', '6');
            break;
        case 6 :
            $('#text').hide();
            $('#index-page4').addClass('Move5').removeClass('Move4');
            setTimeout(function () {
                $('body').children().eq(6).show();
                animate3();
                $('#click').attr('data-state', '7');
            }, 800);

            break;
    }
});

$(document).on('pageInit', '#index-page', function (e, id, page) {
    setTimeout(function () {
        $('#1').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
        $('#3').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s");
        $('#7').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");

    }, 4500);
    setTimeout(function () {
        $('#11').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
        $('#12').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s");
        $('#15').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
    }, 3500);
})
function animate1() {
    setTimeout(function () {
        $('#area1-1').find('.round2').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
        $('#area1-1').find('.round4').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
        $('#area1-2').find('.round2').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s").css("animation-duration", "15s");
        $('#area1-3').find('.round2').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");

    }, 1700);
    setTimeout(function () {
        $('#area1-2').find('.round5').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 2400);
    setTimeout(function () {
        $('#area1-5').find('.round1').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");

    }, 2800);

}
function animate2() {
    setTimeout(function () {
        $('#area2-1').find('.round2').removeClass('bounceIn delay-15').addClass('circl').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 2600);
    setTimeout(function () {
        $('#area2-2').find('.round2').removeClass('bounceIn delay-17').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 2800);
    setTimeout(function () {
        $('#area2-3').find('.round2').removeClass('bounceIn delay-19').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 3000);

}

function animate3() {
    setTimeout(function () {
        $('#area3-1').find('.round2').removeClass('bounceIn delay-15').addClass('circl').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 5000);
    setTimeout(function () {
        $('#area3-2').find('.round2').removeClass('bounceIn delay-17').addClass('circl').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 5000);
    setTimeout(function () {
        $('#area3-3').find('.round1').removeClass('bounceIn delay-19').addClass('circle').css("animation-delay", "0s").css("animation-duration", "15s");
    }, 5000);

}
$.init();