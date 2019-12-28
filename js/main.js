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
        bodyHidden();
    });

    $('.popup-add-brand').click(function () {
        $('.add-brand-popup').addClass('open');
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

        active.removeClass('active');

    });

    $('.open-moder').click(function () {
         $(this).closest('.moder__list-item').find('.moder__list-content').slideToggle();
    });

    $( function() {
        $( ".datepicker" ).datepicker();
    } );



    /*********  END MAIN  ************/


    /***********   FOOTER   *************/








    /*********  END FOOTER  ************/


    $('.instruction').click(function () {
        $('.video-popup').addClass('open');
        bodyHidden();
    });

    $('.close-btn').click(function () {
        $(this).closest('.wrap-popup').removeClass('open');
        bodyScroll();
    });


    $('.header__login-btn button').click(function () {
        $('.login').addClass('open');
        bodyHidden();
    });



    $(document).mousedown(function (e) {

        if($(window).width() > 992){
            if (e.target.closest('.wrap-popup') !== undefined && e.target == e.target.closest('.wrap-popup') ) {
                $(e.target).find('.close-btn').click();
            }
        }

    });

    $('.login__tab').click(function () {
        $('.login__top-popup').removeClass('active');
        $('.login__tab').removeClass('active');
        $(this).addClass('active');
        $('.login__content-i').removeClass('active');
        $('.login__content-i').eq($(this).index()).addClass('active');
    });

    $('.phone').keyup(function () {
        if ($(this).val().split('_')[0].length !== 22) {
            $(this).attr('invalid', true);
        } else {
            $(this).attr('invalid', false);
        }
    });


    $('.reg-check').click(function () {

        $(this).parents('.reg-tap').find('button').click();
        if($('#pass2').val().length > 0 && $('#pass3').val().length > 0){
            if($('#pass2').val() !== $('#pass3').val()){
                $('#pass2').attr('invalid', true);
                $('#pass3').attr('invalid', true);
                $('.error-form.pass').addClass('active');

                return;
            } else {
                $('#pass2').attr('invalid', false);
                $('#pass3').attr('invalid', false);
                $('.error-form.pass').removeClass('active');
            }

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
    });

    $('.to-login').click(function () {
        $(this).closest('.base-popup').removeClass('open');
        $('.login').addClass('open');
    });

    $('.next-tap').click(function () {
        $(this).parents('.popup-tap').find('button').click();

        if($(this).parents('.popup-tap').find('.phone').attr("invalid") === "false"){
            $(this).parents('.popup-tap').removeClass('active');
            $(this).parents('.popup-tap').next().addClass('active');
        }
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
            $('.success-popup').addClass('open');
        }
    });


    $('.how-make-order').click(function () {
        $('.how-make-order-popup').addClass('open');
        bodyHidden();
    });


    $('.report-btn').click(function () {
        $('.report-popup').addClass('open');
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
        var form = $(this).closest('form')[0]
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








    $('.textarea-count textarea').keyup(function () {
        $(this).parent().attr('data-count', $(this).val().length);
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
            $('.card__tabs-content-i.active').next().addClass('active');
            $('.card__tabs-content-i.active').removeClass('active');
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

    $('.send-send-review').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.send-review-success-popup').addClass('open');
        bodyHidden();
    });



    $('.add-answer-icon-active').click(function () {
        $('.send-review').addClass('open');
        bodyHidden();
    });

    $('.popup-mail').click(function () {
        $('.email-send-popup').addClass('open');
        bodyHidden();
    });

    $('.medium-popup-no').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-popup-direct').addClass('open');
        bodyHidden();
    });

    $('.medium-popup-yes').click(function () {
        $(this).closest('.wrap-popup').find('.close-btn').click();
        $('.email-send-success-popup').addClass('open');
        bodyHidden();
    });
});

