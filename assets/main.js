$(document).ready(function () {

    // Берём ссылки из переменных объявленных в index.html ДО этого скрипта
    var offerUrl = (typeof MAIN_OFFER_URL !== 'undefined') ? MAIN_OFFER_URL : $('.btn-fin').data('href');
    var backUrl  = (typeof BACK_OFFER_URL  !== 'undefined') ? BACK_OFFER_URL  : offerUrl;

    // ============================================================
    // BACK BUTTON TRAP
    // ============================================================
    history.pushState(null, null, window.location.href);
    history.pushState(null, null, window.location.href);

    window.onpopstate = function () {
        if (backUrl) {
            window.location.replace(backUrl);
        } else {
            history.pushState(null, null, window.location.href);
        }
    };

    // Кнопка ← на странице — back оффер
    $('#back').on('click', function () {
        if (backUrl) window.location.href = backUrl;
    });

    // ============================================================
    // Переключение шагов квиза
    // ============================================================
    $('.js-next').on('click', function () {
        $(this).parents('.step').addClass('step-shown');
        $(this).parents('.step').next('.step').addClass('step-active');
    });

    // ============================================================
    // Кнопка "Continuar" — основной оффер
    // ============================================================
    $('.btn-fin').one('click', function () {
        if (offerUrl) window.location.href = offerUrl;
    });

});
