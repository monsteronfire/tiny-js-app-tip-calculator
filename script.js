function calculate(event) {
  event.preventDefault();
  var amount = document.querySelector('#amount').value;
  var percentage = document.querySelector('#percentage').value;
  var tipInput = document.querySelector('#tip');
  var totalInput = document.querySelector('#total');
  var tipAmount = amount * (percentage/100);
  var total = Number(amount) + tipAmount;

  tipInput.value = tipAmount.toFixed(2);
  totalInput.value = total.toFixed(2);

  return false;
}

document.querySelector('#calculator').addEventListener('submit', calculate);
