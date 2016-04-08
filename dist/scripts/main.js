'use strict';
$(document).on('pageInit', '#index-page', function(e, id, page) {
    alert("1");
        setTimeout(function () {
            $('.round1').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
            $('.round3').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s");
            $('.round7').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");

        }, 4500);
    setTimeout(function () {
        $('.round11').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
        $('.round12').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s");
        $('.round15').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s");
    }, 3500);
})
$(document).on('pageInit', '#index-page1', function(e, id, page) {
    setTimeout(function () {
        $('#area1').find('.round2').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s").css("animation-duration","15s");
        $('#area1').find('.round4').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration","15s");
        $('#area2').find('.round2').removeClass('bounceIn').addClass('circl').css("animation-delay", "0s").css("animation-duration","15s");
        $('#area2').find('.round5').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration","15s");
        $('#area3').find('.round2').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration","15s");
        $('#area5').find('.round1').removeClass('bounceIn').addClass('circle').css("animation-delay", "0s").css("animation-duration","15s");

    }, 2000);
})
