$(document).ready(function () {

    // ============================================================
    // BACK BUTTON TRAP
    // Когда юзер жмёт "назад" в браузере — редиректим на оффер
    // ============================================================
    var offerUrl = $('.btn-fin').data('href');

    // Дублируем текущую запись в истории — чтобы было куда "возвращаться"
    history.pushState(null, null, window.location.href);
    history.pushState(null, null, window.location.href);

    window.onpopstate = function () {
        // Юзер нажал "назад" — отправляем на оффер
        if (offerUrl && offerUrl !== 'ВАШ_ПАРТНЕРСКИЙ_ЛИНК') {
            window.location.replace(offerUrl);
        } else {
            // Если ссылка не вставлена — просто держим на странице
            history.pushState(null, null, window.location.href);
        }
    };

    // ============================================================
    // Кнопка ← на странице (визуальная) — тоже на оффер
    // ============================================================
    $('#back').on('click', function () {
        if (offerUrl && offerUrl !== 'ВАШ_ПАРТНЕРСКИЙ_ЛИНК') {
            window.location.href = offerUrl;
        }
    });

    // ============================================================
    // Переключение шагов квиза
    // ============================================================
    $('.js-next').on('click', function () {
        $(this).parents('.step').addClass('step-shown');
        $(this).parents('.step').next('.step').addClass('step-active');
    });

    // ============================================================
    // Кнопка "Continuar" — редирект на оффер
    // ============================================================
    $('.btn-fin').one('click', function () {
        if (offerUrl) {
            window.location.href = offerUrl;
        }
    });

});
