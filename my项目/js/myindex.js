$(function () {
    $('.nav-left').on('click', function () {
        $('.navDown').stop();
        $('.navDown').slideToggle();
    })
})