let $screen = $("#screen");
let num1 = [];
let num2 = [];
let operand = null;
let solved = false;

function clear() {
  num1 = [];
  num2 = [];
  operand = null;
  solved = false;
  $screen.html('');
}
$(".numpad").click(function() {
  let input = $(this).html();

  if (solved) {
    clear();
  }
  if (!operand) {
    num1.push(input);
    $screen.html(num1.join(''));
  }
  else if (operand) {
    num2.push(input);
    $screen.html(num1.join('') + operand + num2.join(''));
  }
});

function setOperand(symbol) {
  if (!operand) {
    operand = symbol.replace("x", "*").replace("÷", "/");
    $screen.html(num1.join('') + operand);
  }
}

$(".operator").click(function() {
  let input = $(this).html();

  if (solved) {
    num2 = [];
    operand = null;
    solved = false;
  }
  setOperand(input);
});


$('#clear').click(function() {
  clear();
});


$("#equals").click(function() {
  if (num1 && num2 && operand) {
    let n1 = Number(num1.join(''));
    let n2 = Number(num2.join(''));
    let result = null;

    switch (operand) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }

    $screen.html(result);
    num1 = [result];
    num2 = [n2];
    solved = true;
  }
});
