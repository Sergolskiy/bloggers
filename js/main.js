$(document).ready(function () {

    /***********   HEADER   *************/








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


    /*********  END MAIN  ************/


    /***********   FOOTER   *************/








    /*********  END FOOTER  ************/


    $('.instruction').click(function () {
        $('.video-popup').addClass('open');
    });

    $('.close-btn').click(function () {
        $(this).closest('.wrap-popup').removeClass('open');
    });


    $('.header__login-btn button').click(function () {
        $('.login').addClass('open');
    });



    $(document).click(function (e) {

        if($(window).width() > 992){
            if (e.target.closest('.wrap-popup') !== undefined && e.target == e.target.closest('.wrap-popup') ) {
                $(e.target).find('.close-btn').click();
            }
        }

    });

    $('.login__tab').click(function () {
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

    Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone');
});

