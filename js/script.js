$(document).ready(function () {
   $('.menu').on('click', function () {
       $('.main').addClass('menu_active');
   });
    $('.close').on('click', function () {
        $('.main').removeClass('menu_active');
    });
});