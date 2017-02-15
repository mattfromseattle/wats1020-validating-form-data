// Checks to see if the page is ready for code to be executed.
$(document).on('ready', function () {
  // Form validation rules to check fields of document.
  $('#order-form').validate({
    submitHandler: function (form) {
      // When form is submitted, entered values and fields are validated against rules below.
      form.submit();
    },
    rules: {
      "your-name": {
        required: true,
        maxlength: 128
      },
      "your-address": {
        required: true
      },
      "your-city": {
        required: true
      },
      "your-state": {
        required: true,
        maxlength: 2
      },
      "your-zip": {
        required: true,
        maxlength: 5,
        digits: true
      },
      "card-holder-name": {
        required: true,
        maxlength: 128
      },
      "card-number": {
        required: true,
        creditcard: true
      },
      "expiry-month": {
        required: true,
        minlength: 2
      },
      "expiry-year": {
        required: true,
        minlength: 4
      },
      "cvv": {
        required: true,
        maxlength: 3,
        digits: true
      },
      "shipping-method": {
        required: true
      },
      "comments": {
        required: true,
        maxlength: 500
      }
    }

  });
});