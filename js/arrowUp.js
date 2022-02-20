$(document).ready(function () {
$(window).scroll(function () {
    /*если прокрутка больше 300 показ. кнопку*/

    if ($(this).scrollTop() > 300) {
    $(".gototop, .alert").fadeIn();

    /*если нет то скрываем кнопку*/
    } else {
    $(".gototop, .alert").fadeOut();
    }
});

/*при клике по кнопке переходим вверх стр.*/

$(".gototop").click(function () {
    $("body,html").animate(
    {
        scrollTop: 0,
    },700);
    return false;
});
});
