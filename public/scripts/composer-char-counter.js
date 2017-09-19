$(function() {
  $('.new-tweet').on('input', 'textarea', function () {
    const counter = $(this).closest('form').find('.counter');
    const inputLength = $(this).val().length;
    const remainingBudget = 140 - inputLength;
    counter.text(remainingBudget);
    if (remainingBudget < 0) {
      $('.counter').css('color', 'red');
    }
    else $('.counter').css('color', '#244751');
  });
});


// if (this.value.length !== 0) {
// }

// if (charCount < 0) {
// }
// console.log(140 - inputLength);
