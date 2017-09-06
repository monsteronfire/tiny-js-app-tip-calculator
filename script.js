function calculate(event) {
  event.preventDefault();
  var billAmount = document.querySelector('#bill-amount').value;
  var percentageTip = document.querySelector('#percentage-tip').value;
  var tipInput = document.querySelector('#tip-amount');
  var totalInput = document.querySelector('#total-payable');
  var tipAmount = billAmount * (percentageTip/100);
  var total = Number(billAmount) + tipAmount;

  tipInput.value = tipAmount.toFixed(2);
  totalInput.value = total.toFixed(2);

  return false;
}

document.querySelector('#calculator').addEventListener('submit', calculate);

var TipCalculator = {

};
