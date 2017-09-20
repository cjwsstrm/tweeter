$(function() {
  const MAX_LENGTH = 140;
  $('.new-tweet').on('input', 'textarea', function () {
    const errorClass = 'error';
    const counter = $(this).siblings('.counter');
    const inputLength = $(this).val().length;
    const remainingBudget = MAX_LENGTH - inputLength;
    counter.text(remainingBudget);
    if (remainingBudget < 0) {
      counter.addClass(errorClass);
    } else {
      counter.removeClass(errorClass);
    }
  });

  $('.counter').text(MAX_LENGTH);
});


// if (this.value.length !== 0) {
// }

// if (charCount < 0) {
// }
// console.log(140 - inputLength);
