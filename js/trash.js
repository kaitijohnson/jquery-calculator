$(document).ready(function() {
  let $screen = $('#screen');
  let displayText = $screen.text();
  let operand = null;
  let solved = false;
  let num1 = [];
  let num2 = [];

$('.buttons').on('click', function() {
  let input = $(event.target).text()
    if (solved) {
      clear();
    }
    if (input !== $('.operator')) {
      num1.push(input);
      displayText = num1.join('');
      $screen.text(displayText)
      console.log(displayText, num1)
    } else {
      num2.push(input);
      displayText = num1.join('') + operand + num2.join('');
      $screen.text(displayText);
    }
  //   if (input === $('.operator'))
  // // if (input >= 0 && input < 10) {
  // //
  // // displayText += input
  // // $screen.text(displayText);
  // // }
  // // else if (input === '+') {
  // //   currentOperator = '+';
  // //
  // //   displayText += input;
  // //   $screen.text(input);
  // //   console.log(currentOperator);
  // // }
  // //
  // // else if (input === 'C') {
  // //   displayText = '';
  // //   $screen.text('');
  // //
  // // // } else if (input === '=') {
  // // //   displayText = $($screen.text).parseInt.val(input);
  // // //   // console.log(displayText);
  // // }

});

});
