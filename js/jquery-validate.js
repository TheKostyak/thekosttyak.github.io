$(document).ready(function() {
    $('input[name=phone]').toArray().forEach(function(field) {
        var cleave = new Cleave(field, {
            phone: true,
            phoneRegionCode: 'UA',
            prefix: '+380',
        });
    });
    $("#consultation .feed-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 16
            }
        }
    });
    // ajax
    $('.email-help').submit(function(e) { //when forms have been submited we send the form to server
        e.preventDefault(); // removing default behaviour of the page 

        if (!$(this).valid()) { // if our form failed validation, we end the function
            return; // end the function
        }

        $.ajax({ //send data to server via ajax
            type: "POST", //Post if you send data to the server or GET if you receive data from the server
            url: "mail/email-help.php", // where do we send our request
            data: $(this).serialize() // data which we will send to the server | $(this) means data we are working with | .serialize prepares data for the server
        }).done(function() { //when we end the operation we execute next function
            $(this).find("input").val(""); // .find() searching for whatever we write in the brackets (class or block, etc) | .val - value of our inputs after we send the form  
            $('#consultation').fadeOut(); //hide consultation or order overlay
            $('.overlay, #thanks').fadeIn(); //show thanks window
            $('form').trigger('reset'); // reset all forms 
        });
        return false;
    });

});