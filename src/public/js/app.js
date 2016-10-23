/* global $ */

$(function () {
  $.validator.setDefaults({
    highlight: function (element) {
      let attrId = '#' + $(element).attr('id') + '-feedback'
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error')
      $(attrId).removeClass('glyphicon-ok').addClass('glyphicon-remove')
    },
    unhighlight: function (element) {
      let attrId = '#' + $(element).attr('id') + '-feedback'
      $(element).closest('.form-group').removeClass('has-error').addClass('has-success')
      $(attrId).removeClass('glyphicon-remove').addClass('glyphicon-ok')
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function (error, element) {
      if (element.parent('.input-group').length) {
        error.insertAfter(element.parent())
      } else {
        error.insertAfter(element)
      }
    }
  })
  $('#login').validate({
    rules: {
      username: 'required',
      password: 'required'
    },
    messages: {
      username: {
        required: 'Please enter a username.'
      },
      password: {
        required: 'Please provide a password.'
      }
    },
    submitHandler: function (form) {
      console.log('form', form)
      console.log($('#login').serialize())
      $.ajax({
        url: '/login',
        type: 'post',
        data: $('#login').serialize(),
        success: function (response) {
          console.log('res', response)
        }
      })
      $('#login').submit()
    }
  })
})
