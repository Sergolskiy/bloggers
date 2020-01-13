$(document).ready(function () {

    /***********   HEADER   *************/

    $('.close-banner').click(function () {
      $(this).closest('.top-banner').slideUp();
    });

    function openMobileMenu() {
      $('.mobile-menu__inner').addClass('open');
      $('.mobile-menu__btn-burger').addClass('open');
      $('body').css('overflow', 'hidden');
    }
    function closeMobileMenu() {
      $('.mobile-menu__inner').removeClass('open');
      $('.mobile-menu__btn-burger').removeClass('open');
      $('body').css('overflow', 'visible');
    }

    $(document).on('click', '.mobile-menu__btn-burger.btn', function () {
        $('.mobile-menu__inner').addClass('open');
        $('.mobile-menu__btn-burger').addClass('open');
        $('body').css('overflow', 'hidden');
    });

    $(document).on('click', '.mobile-menu__btn-burger.btn', function () {
        closeHeaderCloseBtn();
        //close home filter if open mobile menu
        if ($('.home-top').hasClass('open')) {
            closeHomeFilter();
            setTimeout(function () {
                openMobileMenu ();
            },300);
        } else {
            openMobileMenu ();
        }
    });
    $(document).on('click', '.mobile-menu__inner', function (e) {
        if(e.target.classList[0] == 'mobile-menu__inner'){
            $('.mobile-menu__inner').removeClass('open');
            $('.mobile-menu__btn-burger').removeClass('open');
            $('body').css('overflow', 'visible');
        }
    });

    /*********  END HEADER  ************/


    /*********  MAIN  ************/

    $('.my-select').selectpicker();



    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            $('.dropdown').removeClass('is-invalid');
            $('.bs-invalid').parent('.dropdown').addClass('is-invalid');
        }, false);
    });



    function openHeaderCloseBtn () {
        $('body').css('overflow', 'hidden');
        $('.header__logo-link').hide();
        $('.header-mobile-btn-close').addClass('opening');
        $('.header__cart-btn').hide();
        setTimeout(function () {
            $('.header-mobile-btn-close').addClass('open');
        }, 200);
    }

    function closeHeaderCloseBtn () {
        $('body').css('overflow', 'visible');
        $('.header-mobile-btn-close').removeClass('open');
        $('.header__cart-btn').show();
        setTimeout(function () {
            $('.header-mobile-btn-close').removeClass('opening')
            $('.header__logo-link').show();
        },300);

        $('.close-btn').click();//for login mobile popup
    }

    function closeHomeFilter () {
        $('.home-top').addClass('closing');
        setTimeout(function () {
            $('.home-top').removeClass('open').removeClass('closing');
        }, 300);
    }
    function openSelectTitle () {
        $('.mobile-main-popup__select-head').addClass('open');
    }
    function closeSelectTitle () {
        $('.mobile-main-popup__select-head').removeClass('open');
    }

    $('.filter-btn').click(function () {
        $('.home-top').addClass('open');
        openHeaderCloseBtn();
    });

    $('.header-mobile-btn-close').click(function () {
        closeHomeFilter();
        closeHeaderCloseBtn();
    });

    $('.custom-dropout__more-btn').click(function () {
      $('.custom-dropout__more-btn').toggleClass('open');
    });

    $('.mobile-menu-login button').click(function () {
        $('.login').addClass('open');
        closeMobileMenu();
        openHeaderCloseBtn();
    });

    $(document).on('touchend', '.mobile-select-popup', function (e) {

        if ($(this).find('select')[0].multiple === true) {
            var title = $(this).siblings('label').text();
        } else {
            var title = $(this).find('select')[0].title;
            openHeaderCloseBtn();
        }
        $('.mobile-main-popup__select-title').text(title);

        openSelectTitle();

        $(document).on('touchend', function (e) {
            if(e.target.classList[0] === 'dropdown-menu' ||
                e.target.classList[0] === 'select-btn-save' ||
                $(e.target).closest('.header').length > 0
            ){
                closeSelectTitle();
            }
        });
    });


    $('.popup-access').click(function () {
        $('.access-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.popup-add-brand').click(function () {
        $('.add-brand-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $(window).on("load",function(){
        if($(".scroll").length > 0){
            $(".scroll").mCustomScrollbar();
        }
    });

    $('.expand-btn').click(function (e) {
        $(this).toggleClass('show');
        $(this).closest('.cart-block__main-info-mobile').children('.cart-block__main-info-mobile-txt').slideToggle();
    });

    $('.setting-btn-cart').click(function () {
        $('.type-blogger-card-popup').addClass('open');
        openHeaderCloseBtn();
    });

    $('.cart-block__top-mobile .blogger-cart__statistics-btn a').click(function (e) {
        e.preventDefault();
        $('.cart-screenshots-popup').addClass('open');
        openHeaderCloseBtn();
    });

    $('.card-next-step').click(function () {
        if($('.card__tabs-content-i').hasClass('active') &&
            $('.card__tabs-content-i.active').find('.form-advertising-check').length > 0) {
            $('.card__tabs-content-i.active').find('.form-advertising-check').click();
        }
        if($('.card__tabs-content-i').hasClass('active') &&
            $('.card__tabs-content-i.active').find('.form-statistic-check').length > 0) {
            $('.card__tabs-content-i.active').find('.form-statistic-check').click();
        }
        if($('.card__tabs-content-i').hasClass('active') &&
            $('.card__tabs-content-i.active').find('.form-verify-chec').length > 0) {
            $('.card__tabs-content-i.active').find('.form-verify-chec').click();
        }

    });

    $('.moder-req-next').click(function () {
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        if(active.hasClass('next-info')){

            var dataInfo = active.attr('data-info');
            var info = '.moder__content-info-' + dataInfo;
            console.log(info);
            $(info).addClass('active');
        } else if (active.hasClass('moder__content-info')){
            var dataInfo2 = active.attr('data-info-c');
            var info2 = '.moder__content-i[data-info="'+dataInfo2+'"]';
            $(info2).next().next().addClass('active');
        } else {
            active.next('.moder__content-i').addClass('active');
        }

        if(active.index()+1 > 0){
            $(this).prev().show();
        }

        if(active.next('.moder__content-i').index() == $('.moder__content-i').last().index()){
            $(this).hide();
            $(this).next().show();
        }

        active.removeClass('active');

    });

    $('.moder-req-prev').click(function (e) {
        e.preventDefault();
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        active.prev().addClass('active');
        active.removeClass('active');
        $(this).next().next().hide();
        $(this).next().show();

        if(active.index()-1 == 0){
            $(this).hide();
        }
    });

    $('.open-moder').click(function () {
         $(this).closest('.moder__list-item').find('.moder__list-content').slideToggle();
    });

    if($( ".datepicker" ).length > 0){
        $( function() {
            $( ".datepicker" ).datepicker();
        } );
    }


    $('.icon-check-basket').click(function (e) {
        var cart = $('.header__cart-btn a');
        if(cart.hasClass('has-product')){
            var count = parseInt(cart.attr('data-count'));
            if($(this).hasClass('icon-check-basket--active')){
                count = count - 1;
                count == 0 ? cart.removeClass('has-product') : cart.attr('data-count', count);
            } else {
                count = count + 1;
                cart.attr('data-count', count)
            }
        } else {
            cart.addClass('has-product');
            cart.attr('data-count', '1');
        }
        e.preventDefault();
        $(this).toggleClass('icon-check-basket--active');

    });

    $('.settings-block__head > a').click(function (e) {
         $(this).closest('.minimize').toggleClass('slide-hide');
         $(this).closest('.minimize').find('.settings').slideToggle();
         $(this).closest('.minimize').find('.paid-service').slideToggle();
         $(this).closest('.minimize').find('.settings-advertising-add').slideToggle();
         e.preventDefault();
    });

    $('.minimaze-title-mobile .expand-btn').click(function () {
         $(this).closest('.mobile').toggleClass('slide-hide-mob');
         $(this).closest('.mobile').next().slideToggle();
    });


    /*********  END MAIN  ************/


    /***********   FOOTER   *************/








    /*********  END FOOTER  ************/


    $('.instruction').click(function () {
        $('.video-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
        }
        bodyHidden();
    });

    $('.close-btn').click(function () {
        $(this).closest('.wrap-popup').removeClass('open');
        bodyScroll();
    });

    $('.open-login').click(function () {
        $('.login').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
        }
        bodyHidden();
    });

    $('.header__login-btn button, .login-btn').click(function () {
        $('.login').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
            $('.mobile-menu__inner').click();
        }
        bodyHidden();
    });

    $('.mobile-show').click(function () {
        $(this).find('span').toggle(0);
        $(this).next().slideToggle();
    });



    $(document).mousedown(function (e) {

        if($(window).width() > 992){
            if (e.target.closest('.wrap-popup') !== undefined && e.target == e.target.closest('.wrap-popup') ) {
                $(e.target).find('.close-btn').click();
            }
        }

    });

    $('.login__tab').click(function () {
        if($(this).closest('.wrap-popup').length > 0){
            $('.wrap-popup .login__top-popup').removeClass('active');
            $('.wrap-popup .login__tab').removeClass('active');
            $(this).addClass('active');

            $('.wrap-popup .login__content-i').removeClass('active');
            $('.wrap-popup .login__content-i').eq($(this).index()).addClass('active');
        } else {
            $('.auth .login__tab').removeClass('active');
            $(this).addClass('active');
            $('.auth .login__content-i').removeClass('active');
            $('.auth .login__content-i').eq($(this).index()).addClass('active');
        }


    });



    $('.phone').keyup(function () {
        if ($(this).val().split('_')[0].length !== 22) {
            $(this).attr('invalid', true);
        } else {
            $(this).attr('invalid', false);
        }
    });


    $('.reg-check').click(function () {

        if($(this).closest('.login__content-i').find('.phone').val() == '+7 (999) 999 - 99 - 99'){
            $(this).closest('.login__content-i').find('.num-err').show();
            $(this).closest('.login__content-i').find('.phone').attr('invalid', "true");
            return;
        } else {
            $(this).closest('.login__content-i').find('.num-err').hide();
            $(this).closest('.login__content-i').find('.phone').attr('invalid', "false");
        }

        $(this).parents('.reg-tap').find('button').click();

        if($('#pass2').val().length > 0 && $('#pass3').val().length > 0){
            if($('#pass2').val() !== $('#pass3').val()){
                $('#pass2').attr('invalid', true);
                $('#pass3').attr('invalid', true);
                $('.error-form.pass').addClass('active');
            } else {
                $('#pass2').attr('invalid', false);
                $('#pass3').attr('invalid', false);
                $('.error-form.pass').removeClass('active');
            }
        }

        var form = $(this).closest('.login__content-i.active').find('form')[0];
        if (form.checkValidity() === false) {
            $(this).closest('.login__content-i.active').find('.error-form').show();
        } else {
            $(this).closest('.login__content-i.active').find('.error-form').hide();

            $(this).parents('.reg-tap').removeClass('active');
            $(this).parents('.reg-tap').next().addClass('active');
        }
    });




    $('.reg-prev').click(function () {
        $(this).parents('.reg-tap').removeClass('active');
        $(this).parents('.reg-tap').prev().addClass('active');
    });

    $('.code-link').click(function () {
        $(this).addClass('code-link-open');
    });

    $('.reg-last').click(function () {
         if($('#code').val() == 1111){
             $('.login__tab').first().click();
         }
    });

    $('.forgot-pass').click(function () {
        $(this).closest('.base-popup').removeClass('open');
        $('.recovery-popup').addClass('open');
    });

    $('.log-in').click(function () {
        $(this).parents('.login__content-i').find('button').click();

        var form = $(this).closest('.login__content-i.active').find('form')[0];

        if (form.checkValidity() !== false) {
            location.href = './card-tabs.html';
        } else {
            $(this).parents('.login__content-i').find('.phone').keyup();
        }
    });

    $('.to-login').click(function () {
        $(this).closest('.base-popup').removeClass('open');
        $('.login').addClass('open');
    });

    $('.login__bottom .next-tap').click(function () {
        $(this).parents('.popup-tap').find('button').click();

        if($(this).parents('.popup-tap').find('.phone').length > 0) {
            if ($(this).parents('.popup-tap').find('.phone').attr("invalid") === "false") {
                $(this).parents('.popup-tap').removeClass('active');
                $(this).parents('.popup-tap').next().addClass('active');

                var tap = $(this).closest('.login__tabs-wrap').find('.tap-count');
                tap.html(parseInt(tap.html())+1);
            }
        } else {
            var form = $(this).parents('.popup-tap').find('form')[0];
            if (form.checkValidity() !== false) {
                $(this).parents('.popup-tap').removeClass('active');
                $(this).parents('.popup-tap').next().addClass('active');

                var tap = $(this).closest('.login__tabs-wrap').find('.tap-count');
                tap.html(parseInt(tap.html())+1);
            }

        }
    });

    $('.login__bottom .prev-tap').click(function () {
        var active = $(this).closest('.login__content').find('.popup-tap.active');
        $(this).closest('.login__content').find('.popup-tap').eq(active.index()-1).addClass('active');
        active.removeClass('active');

        var tap = $(this).closest('.login__tabs-wrap').find('.tap-count');
        tap.html(parseInt(tap.html())-1);
    });

    $('.recover-save').click(function () {
        $(this).parents('.popup-tap').find('button').click();
        if($('#pass4').val().length > 0 && $('#pass5').val().length > 0){
            if($('#pass4').val() !== $('#pass5').val()){
                $('#pass4').attr('invalid', true);
                $('#pass5').attr('invalid', true);
                $('.error-form.pass').addClass('active');

                return;
            } else {
                $('#pass4').attr('invalid', false);
                $('#pass5').attr('invalid', false);
                $('.error-form.pass').removeClass('active');
            }

            $(this).closest('.base-popup').removeClass('open');
            $('.pass-success-popup').addClass('open');
        }
    });


    $('.no-recklam-btn-p').click(function () {
        $('.no-recklam').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.no-recklam-btn .btn').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
    });

    $('.how-make-order').click(function () {
        $('.how-make-order-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });


    $('.report-btn').click(function () {
        $('.report-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });


    function bodyHidden(){
        $('body').addClass('hidden');
    }
    function bodyScroll(){
        $('body').removeClass('hidden');
    }

    var check = false;
    $('.btn-check').click(function () {
        check = false;
         $(this).closest('form').find('button').click();
        var form = $(this).closest('form')[0];
        if (form.checkValidity() === false) {
            $(this).closest('form').find('.err-form').show();
            check = false;
        } else {
            check = true;
            $(this).closest('form').find('.err-form').hide();
        }
    });

    $('.btn-report').click(function () {
        if(check == true){
            // send form

            $(this).closest('.wrap-popup').find('.close-btn').click();
            $('.report-success-popup').addClass('open');
            bodyHidden();
        }
    });
    Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone');








    $('.textarea-count textarea').keydown(function (e) {

        if($(this).val().length > 500){
            e.preventDefault();
            return;
        } else {
            $(this).parent().attr('data-count', $(this).val().length);
        }
    });



    $('.open-screenshots').click(function () {
        $('.screenshots-popup').addClass('open');
        bodyHidden();
    });


    $('.example-evidence-popup-btn').click(function () {
        $('.example-evidence-popup').addClass('open');
        bodyHidden();
    });



    $('.clear-cart-p-btn').click(function () {
        $('.if-clear-cart-popup').addClass('open');
        bodyHidden();
    });



    $('.send-request-to-blogger').click(function () {
        $('.request-to-blogger-popup').addClass('open');
        bodyHidden();
    });


    $('.check-request-to-blogger').click(function () {
        $(this).parents('.request-to-blogger__inner').find('button').click();

        var form = $(this).closest('.request-to-blogger__inner').find('form')[0];

        if (form.checkValidity() === false) {
            $(this).next().show();
        } else {
            $(this).next().hide();
            $(this).closest('.wrap-popup').removeClass('open');
            $('.request-to-blogger-success-popup').addClass('open');
        }
    });




    // $('.add-form-advertising').click(function () {
        //  var form = $('.card__form-advertising').html();
        //
        // var newForm = '<div class="card__form-advertising">'+form+'</div>';
        //
        // $(newForm).appendTo(".card__form-advertising-wrap");
        //
        // $('.card__form-advertising').last().find("input").each(function () {
        //     let a = $(this).attr('name')+formCount;
        //     let id = $(this).attr('id')+formCount;
        //     $(this).attr('name', a);
        //     $(this).attr('id', id);
        //     $(this).next('label').attr('for', id);
        // });
        //
        // $('.selectpicker').selectpicker('refresh');
         // $('.card__form-advertising');
    // });


    $('.form-advertising-check').click(function () {
        $(this).closest('.card__tabs-content-i').find('button.hide').click();

        var form = $(this).closest('.card__tabs-content-i').find('form')[0];
        if (form.checkValidity() !== false) {
            $('.card__tabs-i.active').last().next().addClass('active');
            $('.card__tabs-content-i.active').removeClass('active');
            $('.card__tabs-content-i').eq($('.card__tabs-i.active').last().index()).addClass('active');
        }
    });

    $('.form-statistic-check').click(function () {
        $(this).closest('.card__tabs-content-i').find('button.hide').click();

        var form = $(this).closest('.card__tabs-content-i').find('form')[0];
        if (form.checkValidity() !== false) {
            $('.card__tabs-i.active').last().next().addClass('active');
            $('.card__tabs-content-i.active').removeClass('active');
            $('.card__tabs-content-i').eq($('.card__tabs-i.active').last().index()).addClass('active');
        }
    });

    $('.form-verify-check').click(function () {
        $(this).closest('.card__tabs-content-i').find('button.hide').click();

        var form = $(this).closest('.card__tabs-content-i').find('form')[0];
        if (form.checkValidity() !== false) {
            location.href = '/bloggers/payments.html';
        }
    });

    $('.add-brand-btn').click(function () {
        $(this).closest('form').find('button.hide').click();

        var form = $(this).closest('form')[0];
        if (form.checkValidity() === false) {
            $(this).closest('form').find('.error').show();
        } else {
            $(this).closest('form').find('.error').hide();
        }
    });

    $('.check-send-review').click(function () {
        var form = $(this).closest('.send-review__tabs').find('.send-review__content-i.active form')[0];

        if (form.checkValidity() !== false) {
            $(this).closest('.send-review__tap-first').removeClass('active');
            $(this).closest('.send-review__tap-first').next().addClass('active');
        } else {
            $(this).closest('.send-review__tabs').find('.send-review__content-i.active button').click();
        }
    });

    $('.to-enabled-next').click(function () {
        if($(this).parent().next().find('input[type="checkbox"]').attr('disabled') == 'disabled'){
            $(this).parent().next().find('input[type="checkbox"]').removeAttr('disabled');
        } else {
            $(this).parent().next().find('input[type="checkbox"]').attr('disabled', 'disabled');
        }
    });


    $('.send-review__tab-t').click(function () {
        $('.send-review__tab-t').removeClass('active');
        $(this).addClass('active');
        $('.send-review__content-i').removeClass('active');
        $('.send-review__content-i').eq($(this).index()).addClass('active');
    });


    if($( "#slider-range-max" ).length > 0){
        $( function() {
            $( "#slider-range-max" ).slider({
                range: "max",
                min: 1,
                max: 10,
                value: 5,
                slide: function( event, ui ) {
                    $( "#slider-ui-custom" ).val( ui.value );
                }
            });
            $( "#slider-ui-custom" ).val( $( "#slider-range-max" ).slider( "value" ) );
        } );
    }


    $('.send-send-review').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.send-review-success-popup').addClass('open');
        bodyHidden();
    });



    $('.add-answer-icon-active').click(function () {
        $('.send-review').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.popup-mail').click(function () {
        $('.email-send-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.medium-popup-no, .promocode-btn').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-popup-direct').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.email-to-blogger-btn').click(function () {
        $('.email-to-blogger-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.example-stories-btn').click(function () {
        $('.example-stories').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.medium-popup-yes').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-success-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.open-thesis').click(function () {
        $('.thesis-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.open-textarea').click(function () {
        $(this).next().slideToggle();
    });

    $('.hide-answer-info').click(function () {
        $(this).closest('.answer__info').slideUp();
    });

    $('.copy-btn').click(function () {
        $(this).html('Скопировано');
    });

    $('.open-small-popup').click(function () {
        $(this).next().show();
    });

    $('.small-popup-i').click(function () {
        $(this).closest('.small-popup').hide();
    });

    $('.otkaz-small-popup-i').click(function () {
        if($(this).closest('.request__card-bottom').length > 0){
            $(this).closest('.request__card-inner').find('.request__card-title').hide();
            $(this).closest('.request__card-inner').find('.request__card-bottom').hide();
            $(this).closest('.request__card-inner').find('.request__card-content').hide();
            $(this).closest('.request__card-inner').find('.request__changed.otkaz').css('display', 'flex');
        }
    });

    $('.approved-request').click(function () {
        if($(this).closest('.request__card-bottom').length > 0){
            $(this).closest('.request__card-inner').find('.request__card-title').hide();
            $(this).closest('.request__card-inner').find('.request__card-bottom').hide();
            $(this).closest('.request__card-inner').find('.request__card-content').hide();
            $(this).closest('.request__card-inner').find('.request__changed.approved').css('display', 'flex');
        }
    });

    $('.cancel-otkaz').click(function () {
        $(this).closest('.request__card-inner').find('.request__card-title').show();
        $(this).closest('.request__card-inner').find('.request__card-bottom').show();
        $(this).closest('.request__card-inner').find('.request__card-content').show();
        $(this).closest('.request__card-inner').find('.request__changed').hide();
    });



    if($('.owl-carousel').length > 0){
        $('.owl-carousel').owlCarousel({
            margin:15,
            dots: false,
            nav: true
        });
    }

    $('.header__menu-item.has-submenu').click(function () {
        $(this).toggleClass('open');
    });

    $(document).on('click', function (e) {
        if(e.target.closest('.has-submenu') == null){
            $('.header__menu-item.has-submenu.open').removeClass('open');
        }

        if(e.target.closest('.more-btn') == null){
            $('.cart-copy').hide();
            $('.more-btn').removeClass('open');
        }

    });

    $('.cart-btn-select-adv').click(function () {
        $(this).closest('.cart-block__main-col').hide().next().show();
        $(this).closest('.cart-block__main-row').addClass('align-items-start');
    });

    $('.cart-btn-close-adv').click(function () {
        $(this).closest('.cart-block__main-col').hide().prev().show();
        $(this).closest('.cart-block__main-row').removeClass('align-items-start');
    });

    $('.cart-block__main-col .mobile a').click(function (e) {
        e.preventDefault();
        $(this).parent().slideUp();
    });

    $('.cart-block__close-btn').click(function (e) {
        e.preventDefault();
         $(this).closest('.cart-block').slideUp();
         $(this).closest('.cart-block').prev().show();
    });

    $('.cart-block-remove a').click(function (e) {
        e.preventDefault();
         $(this).closest('.cart-block-remove').hide();
         $(this).closest('.cart-block-remove').next().slideDown();
    });

    $('.car-table-tab').click(function () {
        $('.car-table-tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        if(window.innerWidth < 992){
            $(this).closest('.cart-block__rev-table').find('.cart-block__rev-table-mobile').removeClass('active');
            $(this).closest('.cart-block__rev-table').find('.cart-block__rev-table-mobile').eq($(this).index()-1).addClass('active');
        } else {
            $(this).closest('.cart-block__rev-table').find('.site-table ').removeClass('active');
            $(this).closest('.cart-block__rev-table').find('.site-table ').eq($(this).index()-1).addClass('active');
        }
    });

    $('.settings-advertising-active-on').click(function () {
        var active = $(this).closest('.settings-advertising__inner').find('.settings-advertising__top.activity');
        $(this).closest('.settings-advertising__inner').find('.settings-advertising__top.activity').removeClass('activity');
        active.next().addClass('activity');
    });
    $('.settings-advertising-active-off').click(function () {
        var active = $(this).closest('.settings-advertising__inner').find('.settings-advertising__top.activity');
        $(this).closest('.settings-advertising__inner').find('.settings-advertising__top.activity').removeClass('activity');
        active.prev().addClass('activity');
    });

    $('.clear-format').click(function () {
        $(this).closest('.settings-advertising').slideUp();
    });

    $('.copy-url-cart').click(function () {
        $(this).closest('.cart-block__more').find('.cart-copy').show();

    });

    $('.cart-copy').click(function () {
        $(this).hide();
        $('.more-btn').toggleClass('open');

    });

    $('.more-btn').click(function () {
        $(this).toggleClass('open');
    });

    $('.settings-notification__off-btn').click(function () {
        $(this).closest('.settings-notification__on').hide().next().show();
    });
    $('.settings-notification__on-btn').click(function () {
        $(this).closest('.settings-notification__off').hide().prev().show();
    });

    $('.send-re-request-btn').click(function () {
        $('.send-re-request').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.no-customer-no-speck-btn').click(function () {
        $('.no-customer-no-speck').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });

    $('.send-reminder-btn').click(function () {
        $('.send-reminder').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();
    });
});

