$(document).ready(function () {

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS){
        $('.page-wrap').addClass('ios');
    }
    /***********   HEADER   *************/

    $('.close-banner').click(function () {
      $(this).closest('.top-banner').addClass('close');
      $(this).closest('.top-banner').slideUp(function () {
          $(this).closest('.top-banner').addClass('hide-banner');
          $(this).closest('.top-banner').removeClass('close');
      });
    });

    function openMobileMenu() {
      $('.mobile-menu__inner').addClass('open');
      $('.mobile-menu__btn-burger').addClass('open');
      $('body').css('overflow', 'hidden');
      if(iOS && $(window).width() < 500){
          $('body').css('position', 'fixed');
      }
    }
    function closeMobileMenu() {
      $('.mobile-menu__inner').removeClass('open');
      $('.mobile-menu__btn-burger').removeClass('open');
      $('body').css('overflow', 'visible');
        $('body').css('position', 'initial');
    }

    $(document).on('click', '.mobile-menu__btn-burger.btn', function () {
        $('.mobile-menu__inner').addClass('open');
        $('.mobile-menu__btn-burger').addClass('open');
        $('.header-mobile-btn-close').click();
        $('body').css('overflow', 'hidden');
        $('body').css('position', 'initial');
    });

    $(document).on('click', '.mobile-menu__btn-burger.btn', function () {
        // closeHeaderCloseBtn();
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
            closeMobileMenu();
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
        //of transition effect
        // $('.header-mobile-btn-close').addClass('opening');
        $('.header__cart-btn').hide();
        //of transition effect
        // setTimeout(function () {
        //     $('.header-mobile-btn-close').addClass('open');
        // }, 200);
        $('.header-mobile-btn-close').addClass('open');
    }

    function closeHeaderCloseBtn () {
        $('body').css('overflow', 'visible');
        $('body').css('position', 'initial');
        $('.header-mobile-btn-close').removeClass('open');
        $('.header__cart-btn').show();
        //of transition effect
        // setTimeout(function () {
        //     $('.header-mobile-btn-close').removeClass('opening')
        //     $('.header__logo-link').show();
        // },300);

        $('.header__logo-link').show();

        $('.close-btn').click();//for login mobile popup
    }

    function closeHomeFilter () {
        // $('.home-top').addClass('closing');
        // setTimeout(function () {
        //     $('.home-top').removeClass('open').removeClass('closing');
        // }, 300);
        $('.home-top').removeClass('open')
    }
    function openSelectTitle () {
        $('.mobile-main-popup__select-head').addClass('open');
    }
    function closeSelectTitle () {
        $('.mobile-main-popup__select-head').removeClass('open');
    }

    $('.mobile-main-popup__select-head').click(function () {
        $(this).removeClass('open');
    });

    $('.filter-btn').click(function () {
        $('.home-top').addClass('open');
        openHeaderCloseBtn();
        var el = $('.home-form form .home-form__left');


        addFooterPopup(el);

        if(iOS){
            $('body').css('position', 'fixed');
        }
    });

    $('.header-mobile-btn-close').click(function () {

        if($('.home-top.open').length > 0 && $('.home-form__left').find('.bootstrap-select.show').length > 0){

        } else {
            closeHomeFilter();
            closeHeaderCloseBtn();
        }


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
            var title = $(this).siblings('label').text().length > 0 ? $(this).siblings('label').text() : $(this).parent().siblings('label').text();
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

    $(document).on('click', '.dropdown-menu', function (e) {
        if($(this).closest('.home-form__mobile-head-count').length > 0){
            return;
        }
        if(window.innerWidth < 992){
            $('.header-mobile-btn-close').click();
            closeSelectTitle();
        }
    });


    $('.popup-access').click(function (e) {
        e.preventDefault();
        $('.access-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.popup-add-brand').click(function () {
        $('.add-brand-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
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

        checkFooterPopupClick();
    });

    $('.cart-block__top-mobile .blogger-cart__statistics-btn a').click(function (e) {
        e.preventDefault();
        // $('.cart-screenshots-popup').addClass('open');
        // openHeaderCloseBtn();
        //
        // checkFooterPopupClick();

        $('.screenshots-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
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

    function cardTabsBackBtn(actualContent, actualTabs) {
        actualContent.removeClass('active');
        actualContent.prev().addClass('active');
        actualTabs.removeClass('active');
        actualTabs.prev().addClass('active');

        $("html, body").animate({ scrollTop: 0 }, "800");
    }

    $(document).on('click', '.form-statistic-back', function(e){
        var actualContent = $(this).closest('.card__tabs-content-i');
        var actualTabs = $('.card__tabs-i.active');

        cardTabsBackBtn(actualContent, actualTabs);
    });

    $('.moder-req-next').click(function () {
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        var content = $(this).closest('.moder__inner');
        if(active.hasClass('next-info')){

            var dataInfo = active.attr('data-info');
            var info = '.moder__content-info-' + dataInfo;


            content.find(info).addClass('active');
        } else if (active.hasClass('moder__content-info')){
            var dataInfo2 = active.attr('data-info-c');
            var info2 = '.moder__content-i[data-info="'+dataInfo2+'"]';
            content.find(info2).next().next().addClass('active');
        } else {
            active.next('.moder__content-i').addClass('active');
        }

        if(active.index()+1 > 0){
            $(this).prev().show();
        }

        if ($(this).parent().hasClass('moder__bottom-mobile-right')) {
            if(active.next().hasClass('moder__content-info')){
                active.next().removeClass('active');
                $(this).parent().find('span').html(active.index()+1);
            } else {
                active.removeClass('active');
                $(this).parent().find('span').html(active.next().index()+1);
            }

            return;
        }

        if(active.next('.moder__content-i').index() == content.find('.moder__content-i').last().index()-1){

            if($(this).parent().hasClass('back-show')){
                $(this).addClass('disabled');
            } else {
                $(this).hide();
                $(this).next().show();
            }

        }

        active.removeClass('active');

    });

    $('.moder-req-prev').click(function (e) {
        e.preventDefault();
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        if( active.prev().length > 0){
            active.prev().addClass('active');
            active.removeClass('active');
            
            if ($(this).parent().hasClass('moder__bottom-mobile-right')) {
                $(this).parent().find('span').html(active.index());
                return;
            }

            if($(this).hasClass('show')){
                $(this).next().next().next().hide();
                $(this).next().next().show();
                $(this).next().next().removeClass('disabled');
            } else {
                $(this).next().next().hide();
                $(this).next().show();
            }
        }



        if(active.index()-1 == 0){
            $(this).hide();
        }
    });

    $('.moder-req-last').click(function () {
        if($(this).closest('.moder__content-tap').length > 0){
            $(this).closest('.moder__content-i').removeClass('active');
            $(this).closest('.moder__content').find('.moder__content-i').last().addClass('active');
            $(this).closest('.moder__content').next('.moder__bottom').css({"opacity":"0", "pointer-events":"none"});
            return;
        }
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        $(this).closest('.moder__inner').find('.moder__content-i').last().addClass('active');
        active.removeClass('active');
        $(this).closest('.moder__bottom').css({"opacity":"0", "pointer-events":"none"});
    });


    $('.moder-req-close').click(function (e) {
        e.preventDefault();
        var active = $(this).closest('.moder__inner').find('.moder__content-i.active');
        active.prev().addClass('active');
        active.removeClass('active');
        $(this).closest('.moder__inner').find('.moder__bottom').css({"opacity":"1", "pointer-events":"initial"});
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
        console.log(cart);
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
         if($(this).closest('.minimize').hasClass('slide-hide')){
             $(this).closest('.minimize').find('.settings').slideUp();
         } else {
             $(this).closest('.minimize').find('.settings').slideDown();
         }
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
        checkWidth();
    });

    $('.close-btn').click(function () {
        $(this).closest('.wrap-popup').removeClass('open');
        bodyScroll();
    });

    $('.open-login').click(function (e) {
        e.preventDefault();
        $('.login').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
        }

        checkFooterPopupClick();
        // bodyHidden();
    });

    $('.header__login-btn button, .login-btn').click(function () {
        $('.login').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
            $('.mobile-menu__inner').click();
        }
        bodyHidden();

        checkFooterPopupClick();

        // if ($(window).width() < 500) {
        //     var el = $('.wrap-popup.open .wrap-popup__inner');
        //     addFooterPopup(el);
        // }
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

    $(document).click(function (e) {


        if($(window).width() < 992){
            if (e.target.closest('.custom-dropout__more-btn') == null  ) {
                $('.custom-dropout.custom-dropout__more-btn').removeClass('open');
            }
        }
    });

    $('.login__tab').click(function () {
        var wrap = $(this).closest('.wrap-popup');
        if(wrap.length > 0){
            wrap.find('.login__top-popup').removeClass('active');
            wrap.find('.login__tab').removeClass('active');
            $(this).addClass('active');

            wrap.find('.login__content-i').removeClass('active');
            wrap.find('.login__content-i').eq($(this).index()).addClass('active');
            console.log($(this).index());
        } else {
            $('.auth .login__tab').removeClass('active');
            // $('.login__top-popup').removeClass('active');

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

            if($(this).closest('.wrap-popup').length === 0){
                $(this).closest('.wrap-popup__inner').addClass('no-tabs');
            }
        }
    });

    $('.reg-type-register__btn .reg-next').click(function () {
        $(this).parents('.reg-tap').removeClass('active');
        $(this).parents('.reg-tap').next().addClass('active');
    });


    $('.add-mail-btn').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.add-mail-popup').addClass('open');
        checkWidth();
    });


    $('.mobile-auth__right-link').click(function () {
        $('.mobile-auth__right-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
        }
        checkWidth();
    });




    $('.reg-prev').click(function () {
        $(this).parents('.reg-tap').removeClass('active');
        $(this).parents('.reg-tap').prev().addClass('active');

        if($(this).closest('.wrap-popup').length === 0 && $(this).closest('.wrap-popup__inner').hasClass('no-tabs')){
            $(this).closest('.wrap-popup__inner').removeClass('no-tabs');
        }
    });

    $('.code-link').click(function (e) {
        e.preventDefault();
        $(this).addClass('code-link-open');
    });

    $('.reg-last').click(function () {
         // if($('#code').val() == 1111){
             // $('.login__tab').first().click();
             $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.accept-mail-popup').addClass('open');

        checkWidth();
         // }


        if($(this).closest('.wrap-popup').length === 0 && $(this).closest('.wrap-popup__inner').hasClass('no-tabs')){
            $(this).closest('.wrap-popup__inner').removeClass('no-tabs');
        }
    });

    $('.forgot-pass').click(function () {
        $(this).closest('.base-popup').removeClass('open');
        $('.recovery-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn ();
        }
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

                $(form).find('.error-form').removeClass('active');

                var tap = $(this).closest('.login__tabs-wrap').find('.tap-count');
                tap.html(parseInt(tap.html())+1);
            } else {
                $(form).find('.error-form').addClass('active');
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
        checkWidth();
    });

    $('.no-recklam-btn .btn, .exit-popup').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
    });

    $('.open-send-penalty-popup').click(function () {
        $('.send-penalty-popup').addClass('open');
    });

    $('.how-make-order').click(function () {
        $('.how-make-order-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });


    $('.report-btn').click(function () {
        $('.report-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });


    function bodyHidden(){
        $('body').addClass('padding');
        $('body').css('overflow', 'hidden');
    }
    function bodyScroll(){
        $('body').removeClass('padding');
        $('body').css('overflow', 'visible');

        if(iOS){
            $('body').css('position', 'static');
        }
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
            checkWidth();
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
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });


    $('.example-evidence-popup-btn').click(function () {
        $('.example-evidence-popup').addClass('open');
        // bodyHidden();
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });



    $('.clear-cart-p-btn').click(function () {
        $('.if-clear-cart-popup').addClass('open');
        // checkWidth();
    });



    $('.send-request-to-blogger').click(function () {
        $('.request-to-blogger-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.check-request-to-blogger').click(function (e) {
        e.preventDefault();
        $(this).parents('.request-to-blogger__inner').find('button').click();

        var form = $(this).closest('.request-to-blogger__inner').find('form')[0];

        if (form.checkValidity() === false) {
            $(this).next().show();
        } else {
            $(this).next().hide();
            $(this).closest('.wrap-popup').removeClass('open');
            $('.accept-mail-popup').addClass('open');
        }
    });

    $('.request-to-blogger__toggle').click(function (e) {
        e.preventDefault();
        console.log(123);
        $(this).closest('.request-to-blogger__right').find('.request-to-blogger__txt').toggleClass('open');
    });


    $('.accept-mail-settings-link').click(function (e) {
        e.preventDefault();
        $('.accept-mail-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.accept-mail-settings-link--popup').click(function (e) {
        e.preventDefault();
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.accept-mail-popup').addClass('open');
        checkWidth();
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

    $('.add-form-advertising').click(function () {
        $('.card__form-advertising-wrap.hide-adv').first().slideDown().removeClass('hide-adv');
        $('.card__title').find('.form-advertising-check').show();
    });

    $('.clear-adv-format').click(function () {
        $(this).closest('.card__form-advertising-wrap').addClass('hide-adv').slideUp();
        $('.card__title').find('.form-advertising-check').hide();
    });

    $('.form-advertising-check').click(function () {
        $(this).closest('.card__tabs-content-i').find('button.hide').click();

        var form = $(this).closest('.card__tabs-content-i').find('form')[0];
        if (form.checkValidity() !== false) {
            $('.card__tabs-i.active').last().removeClass('active').next().addClass('active');
            $('.card__tabs-content-i.active').removeClass('active');
            $('.card__tabs-content-i').eq($('.card__tabs-i.active').last().index()).addClass('active');
        } else {
            $(this).prev('.red').show();
        }
    });

    $('.form-statistic-check').click(function () {
        $(this).closest('.card__tabs-content-i').find('button.hide').click();

        var form = $(this).closest('.card__tabs-content-i').find('form')[0];
        if (form.checkValidity() !== false) {
            $('.card__tabs-i.active').last().removeClass('active').next().addClass('active');
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
            $(this).closest('.wrap-popup').find('.close-btn').click();
            $('.moder-brand-popup').slideDown();
            $('.moder-brand-popup').removeClass('hide-banner');
            // setTimeout(function () {
            //     $('.deactivate-banner').slideDown();
            // }, 30);
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


    $('.send-review-back').click(function () {
        $(this).closest('.send-review__tap-second').removeClass('active');
        $(this).closest('.send-review__tap-second').prev().addClass('active');
    });

    $('.send-review-exit').click(function () {
        closePopup($(this));
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

        // console.log($(this).index())
        // var barter = $('.barter');
        // if($(this).index()==1){
        //     barter.show();
        //     barter.prev().hide();
        // } else {
        //     barter.hide();
        //     barter.prev().show();
        // }
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
        checkWidth();
    });



    $('.add-answer-icon-active').click(function () {
        $('.send-review').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
        // bodyHidden();
    });

    $('.popup-mail').click(function () {
        $('.email-send-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
        // bodyHidden();
    });

    $('.popup-mail-mobile').click(function () {
        $('.email-send-popup-mobile').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.email-send__second').click(function () {
        var inner = $(this).closest('.medium-popup__inner');
        inner.find('.email-send-txt.first').hide();
        flex(inner.find('.email-send-txt.second'));
        inner.find('.email-send__bottom.first').hide();
        flex(inner.find('.email-send__bottom.second'));
    });

    $('.email-send__third').click(function () {
        var inner = $(this).closest('.medium-popup__inner');
        inner.find('.email-send-txt.second').hide();
        inner.find('.email-send-txt.third').show();
        inner.find('.email-send__bottom.second').hide();
        flex(inner.find('.email-send__bottom.third'));
    });

    $('.medium-popup-no, .promocode-btn, .answer-mobile__promo-link').click(function (e) {
        e.preventDefault();
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-popup-direct').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }

        checkWidth();
        // bodyHidden();
    });

    $('.email-to-blogger-btn').click(function () {
        $('.email-to-blogger-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.example-stories-btn').click(function () {
        $('.example-stories').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        bodyHidden();

        checkFooterPopupClick();
    });

    $('.medium-popup-yes').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-success-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.open-thesis').click(function () {
        $('.thesis-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
        $('.thesis-btn-to-blogger').removeClass('show');
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

    $('.copy-btn-moderation').click(function (e) {
        e.preventDefault();
        $(this).html('E-mail скопирован');
        $(this).addClass('copied btn btn-secondary')
    });

    $('.open-small-popup').click(function () {
        $(this).next().show();
        if ($(window).width() < 500) {
            var el = $('.otkaz-small-popup-items');
            addFooterPopup(el);
        }
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



    if($('.owl-carousel').length > 0 && $(window).width() > 768){
        $('.same-bloggers__carousel').owlCarousel({
            margin:0,
            dots: false,
            nav: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items:1,
                },
                // breakpoint from 768 up
                768 : {
                    items:2,
                },
                992 : {
                    items:3,
                }
            }
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

        if(e.target.closest('.small-popup') == null && !e.target.closest('.open-small-popup')){
            $('.small-popup').hide();
        }

    });

    $('.cart-btn-select-adv').click(function () {
        $(this).closest('.cart-block__main-col').hide().next().show();
        $(this).closest('.cart-block__main-row').addClass('align-items-start visible-row');
        $(this).closest('.cart-block__main-table').find('.cart-block__main-row:not(.visible-row)').hide();
        $(this).closest('.cart-block__main-table').next('.cart-block__main-info').hide();

        var btnCount = $('.send-request-to-blogger span');
        if(parseInt(btnCount.html()) == 1){
            btnCount.show();
            btnCount.html(parseInt(btnCount.html()) + 1);
        } else {
            btnCount.html(parseInt(btnCount.html()) + 1);
        }
    });

    $('.cart-btn-close-adv').click(function () {
        $(this).closest('.cart-block__main-col').hide().prev().show();
        $(this).closest('.cart-block__main-row').removeClass('align-items-start visible-row');
        $(this).closest('.cart-block__main-table').find('.cart-block__main-row:not(.visible-row)').show();
        $(this).closest('.cart-block__main-table').next('.cart-block__main-info').show();

        var btnCount = $('.send-request-to-blogger span');
        if(parseInt(btnCount.html()) == 2){
            btnCount.hide();
            btnCount.html(parseInt(btnCount.html()) - 1);
        } else {
            btnCount.html(parseInt(btnCount.html()) - 1);
        }
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
            $(this).closest('.cart-block__rev-table').find('.cart-block__rev-table-mobile').eq($(this).index()).addClass('active');
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
        if($(this).closest('.settings-advertising').find('.settings-advertising-clear-popup').length > 0){
            $(this).closest('.settings-advertising').addClass('settings-advertising--clear');
        } else {
            $(this).closest('.settings-advertising').slideUp();
        }
    });

    $('.settings-advertising-clear-back').click(function () {
        $(this).closest('.settings-advertising').removeClass('settings-advertising--clear');
    });

    $('.settings-advertising-clear-ok').click(function () {
        $(this).closest('.settings-advertising').slideUp();
    });

    $('.mobile-clear-format').click(function () {
        $(this).closest('.mobile').next('.settings-advertising').find('.clear-format').click();
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

    $('.send-remind-btn').click(function () {
        $('.send-remind-popup').addClass('open');
    });

    $('.settings-notification__off-btn').click(function () {
        $(this).closest('.settings-notification__on').hide().next().show();
    });
    $('.settings-notification__on-btn').click(function () {
        $(this).closest('.settings-notification__off').hide().prev().show();
    });

    $('.send-re-request-btn').click(function () {
        $('.send-re-request').addClass('open');
        checkWidth();
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }

    });

    function closePopup(el) {
        if($('.header-mobile-btn-close.open').length > 0){
            $('.header-mobile-btn-close.open').click();
        } else {
            el.closest('.wrap-popup').find('.close-btn').click();
        }

    }

    function checkWidth(){
        if($('body').height() > $(window).height()){
            bodyHidden();
        }

        if(iOS && $(window).width() < 500){
            $('body').css('position', 'fixed');

            // $('body').scrollTo($(window)[0].scrollY - 1);
        }
        setTimeout(function () {
            checkFooterPopupClick();
        }, 10);
    }

    $('.no-customer-no-speck-btn').click(function () {
        $('.no-customer-no-speck').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
       checkWidth();
    });

    $('.settings__change-link').click(function () {
        $('.change-phone-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.settings__change-pass-link').click(function (e) {
        e.preventDefault();
        $('.change-pass-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.send-reminder-btn').click(function () {
        $('.send-reminder').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.settings__change-account a').click(function (e) {
        e.preventDefault();
        $('.change-pr-acc-popup').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.card__statistic-link').click(function () {
        $(this).closest('.card__statistic-block').find('.card__statistic-link').toggle(0);
        $(this).closest('.card__statistic-block').find('.card__statistic-title').toggle(0);
        $(this).closest('.card__statistic-block').find('.card__statistic-sub-title').toggle(0);
        $(this).closest('.card__statistic-block').find('.card__statistic-field').toggle(0);
    });

    $('.accept-mail-next').click(function () {


         if($('.accept-mail-wrap .red.hide').length == 0){
             $(this).closest('.wrap-popup').find('.close-btn').click();
             $('.request-to-blogger-success-popup').addClass('open');

             closePopup($(this));
         }
        $('.accept-mail-wrap .red').removeClass('hide');
    });

    $('.accept-mail-no-mail').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.accept-mail-popup-2').addClass('open');
        checkWidth();
    });

    $('.accept-mail-send').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.request-to-blogger-success-popup').addClass('open');

        closePopup($(this));
    });

    $('.no-ogp').click(function () {
        $('.card__verify-right-block--ogp').slideUp();
    });

    $('.ogp').click(function () {
        $('.card__verify-right-block--ogp').slideDown();
    });
    $('.open-rework-textarea').click(function () {
        $(this).closest('.card__form-advertising-textarea').addClass('hide').prev().removeClass('hide');
    });

    $(document).on('click', '.moder__content-actions-r .dropdown-menu li a', function () {
        if($(this).find('span').html()== 'Заблокировать'){
            $('.blocked-popup').addClass('open');
            if(window.innerWidth < 500){
                openHeaderCloseBtn();
            }
            checkWidth();
        }

    });
    
    
    $('.deactivate-banner-btn').click(function (e) {
        e.preventDefault();

        $('.active-blog-card').html() == 'Деактивировать' ?  $('.active-blog-card').html('Активировать') :  $('.active-blog-card').html('Деактивировать');

        $('.deactivate-banner-btn').html() == 'Деактивировать' ? $('.deactivate-banner-btn').html('Активировать') : $('.deactivate-banner-btn').html('Деактивировать');
        $('.active-blog-card-txt').hasClass('active') ?
            $('.active-blog-card-txt').removeClass('active').hide().next().show() :
            $('.active-blog-card-txt').addClass('active').show().next().hide();

        $('.deactivate-banner').removeClass('hide-banner');
        setTimeout(function () {
            $('.deactivate-banner').slideDown();
        }, 30);
    });
    
    $('.access-btn').click(function () {
        $(this).hide().next().show();
    });


    // footer in popup
    function addFooterPopup(el) {
        $('.footer.active-popup').remove(); //delete all popup s footer

        var footer = $('.main + .footer').clone();
        if(el.find('.footer').length == 0 ){
            if(el.find('.scroll').length > 0){
                el.find('.mCSB_container').append(footer);
            } else {
                el.append(footer);
            }
            el.find('.footer').addClass('active-popup');
        }
    }
    function checkFooterPopupClick() {
        if ($(window).width() < 500) {
            var el = $('.wrap-popup.open .wrap-popup__inner');
            addFooterPopup(el);
        }
    }

    $('.info__txt').click(function (e) {
        e.preventDefault();
    });

    $('.type-blogger-card-popup-btn .btn').click(function () {
        $(this).parent().find('.btn').removeClass('btn-primary custom-btn');
        $(this).parent().find('.btn').addClass('btn-outline-secondary');
        $(this).addClass('btn-primary custom-btn');
        $(this).removeClass('btn-outline-secondary');
        if($(this).hasClass('full')){
            $('.type-blogger-card-popup-txt').hide();
            $('.type-blogger-card-popup-txt.full').show();

            $('.blogger-cart__mob-short').removeClass('open');
            $('.blogger-cart__mob-long').removeClass('close');
        } else {
            $('.blogger-cart__mob-short').addClass('open');
            $('.blogger-cart__mob-long').addClass('close');

            $('.type-blogger-card-popup-txt').hide();
            $('.type-blogger-card-popup-txt:not(.full)').show();
        }

        $(this).closest('.wrap-popup').find('.close-btn').click();
    });


    $(document).on('click', '.settings-advertising-add-mobile', function(e){
        $(this).next('.page-block').find('.settings-advertising-add').click();
    });



    $('.moder-complaint-reject').click(function () {
        $(this).closest('.moder__inner').find('.moder__content-end.reject').addClass('open');
        $(this).closest('.moder__inner').find('.moder__content').addClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom').addClass('hide');
    });


    $('.moder__content-end.reject').click(function (e) {
        e.preventDefault();
        $(this).closest('.moder__inner').find('.moder__content-end.reject').removeClass('open');
        $(this).closest('.moder__inner').find('.moder__content').removeClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom').removeClass('hide');
    });


    $('.moder-complaint-approve').click(function () {
        $(this).closest('.moder__inner').find('.moder__content-end.approve').addClass('open');
        $(this).closest('.moder__inner').find('.moder__content').addClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom').addClass('hide');
        $(this).closest('.moder__inner').find('.moder__name--withBtn .moder-complaint-approve').addClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom-mobile').addClass('hide');
    });


    $('.moder__content-end.approve').click(function (e) {
        e.preventDefault();
        $(this).closest('.moder__inner').find('.moder__content-end.approve').removeClass('open');
        $(this).closest('.moder__inner').find('.moder__content').removeClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom').removeClass('hide');
        $(this).closest('.moder__inner').find('.moder__name--withBtn .moder-complaint-approve').removeClass('hide');
        $(this).closest('.moder__inner').find('.moder__bottom-mobile').removeClass('hide');
    });

    $('.moder-filter').click(function () {
        $('.moderation-filter').addClass('open');
    });

    $(document).on('click', '.moderation-filter.open', function (e) {
        if(e.target.classList[0] == 'moderation-filter'){
            $('.moderation-filter').removeClass('open');
        }
    });
    
    $('.request-mobile__otkaz-btn').click(function () {
        $(this).closest('.answer-mobile-table-i').find('.answer-mobile__otkaz').show();
    });

    $('.request-mobile__otkaz-btn-cnsl').click(function () {
        $(this).closest('.answer-mobile-table-i').find('.answer-mobile__otkaz').hide();
    });
    
    $('.blogger-cart__reviews a, .reviews-popup-btn, .mobile-home-table__bottom a:first-child').click(function () {
        $('.blogger-mob-rev-popup').addClass('open');
        openHeaderCloseBtn();
    });

    $('.email-to-blogger-popup .email-send__bottom a').click(function () {
        if(!$('.email-to-blogger-popup .email-send__bottom').hasClass('active')){
            $('.email-to-blogger-popup .email-send__bottom a').toggleClass('btn-outline-secondary custom-btn custom-btn-gold');
        }
        $('.email-to-blogger-popup .email-send__bottom').addClass('active');
    });

    function flex(e){
        e.css('display', 'flex');
    }

    
    $('.link-reg-prototype').click(function () {
        $('.check-register').addClass('open');
        if(window.innerWidth < 500){
            openHeaderCloseBtn();
        }
        checkWidth();
    });

    $('.reg-type-register__btn-more').click(function () {
        $(this).find('span').toggle();
        $(this).closest('.reg-type-register__btn-more').next().toggle();
        $(this).closest('.check-register').toggleClass('open-txt');
    });

    $(document).on('click', '.thesis-popup-btn .copy-btn', function(e){
        $(this).siblings('.thesis-btn-to-blogger').addClass('show');
    });

});

