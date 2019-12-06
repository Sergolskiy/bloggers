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
});

