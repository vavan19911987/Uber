window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    $('input[name=phone]').mask('+7(999) 999-99-99');

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }

            },
            messages: {
                name: "Пожалуйста введите своё Имя",
                phone: "Пожалуйста введите свой телефон",
                email: {
                    required: "Пожалуйста введите свой постовый адрес",
                    email: "Неправильно введён адрес почты"
                }
            }
        });
    }

    validateForm('form');

    $('[data-modal=subheader]').on('click', function () {
        $('.overlay, #thanks').fadeIn('slow');
    });
    $('[data-modal=promo]').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #thanks, #order, #plus').fadeOut('slow');
    });

    $('.mobile__item__plus').each(function(i) {
        $(this).on('click', function() {
            $('#plus .modal__subtitle').text($('.mobile__item__subtitle').eq(i).text());
            $('.overlay, #plus').fadeIn('slow');
        });

    });



});