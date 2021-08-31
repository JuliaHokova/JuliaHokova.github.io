const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.progress__percent'),
      rectangles = document.querySelectorAll('.progress__rectangle span');

percent.forEach( (item, i) => {
    rectangles[i].style.width = item.innerHTML;
});

$(document).ready(function() {
    $('.contacts__form').validate( {
        rules: {
            name: "required",
            phone: "required",
            checkbox: "required"
        },
        messages: {
            name: "",
            phone: "",
            checkbox: ""
        }
    });

    $('input[name=phone]').mask("+38 (099) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
    
            $('form').trigger('reset');
        });
        return false;
    });
});








