'use strict'

$(document).ready(function () {
    $('.first').addClass('anim-entry-left')
    $('.second').addClass('anim-entry-right')
    setTimeout(function () {
        $('#present').addClass('to-visible')
    }, 1000)
})

function openGift() {
    $('#present').css('opacity', '0')
    setTimeout(function () {
        $('#present').removeClass('animated')
    }, 1000)
    $('#present').addClass('anim-to-center')
    setTimeout(function () {
        $('#confettiLeft').css('display', 'none')
        $('#confettiRight').css('display', 'none')
        $('#present').css('opacity', '1')
        setTimeout(function () {
            $('#explosion').css('opacity', '1')
            $('#explosion').css('bottom', '-275%')
            $('#explosion').css('left', '-500%')
            $('#explosion').css('width', '1000%')
            setTimeout(function () {
                $('.first').css('display', 'none')
                $('.second').css('display', 'none')
                $('#gift').css('display', 'none')
                $('#explosion').css('opacity', '0')
                $('#tickets').css('opacity', '1')
                $('.ticketsText').css('opacity', '1')
            }, 2000)
        }, 1250)
    }, 1500)
}