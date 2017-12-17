$(function(){
   $('#contact-form button[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/petrivnm@gmail.com", 
            method: "POST",
            data: {
                name: $('#inputName').val(),
                email: $('#inputEmail').val(),
                feedback: $('#textareaMessage').val()
            },
            dataType: "json"
        })
         .done( () => $('#thank-dialog').attr('open', 'open') )
         .fail( () => $('#error-dialog').attr('open', 'open') );    
    }
}


