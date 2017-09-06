//function calculate(event) {
  //event.preventDefault();
  //var billAmount = document.querySelector('#bill-amount').value;
  //var percentageTip = document.querySelector('#percentage-tip').value;
  //var tipInput = document.querySelector('#tip-amount');
  //var totalInput = document.querySelector('#total-payable');
  //var tipAmount = billAmount * (percentageTip/100);
  //var total = Number(billAmount) + tipAmount;

  //tipInput.value = tipAmount.toFixed(2);
  //totalInput.value = total.toFixed(2);

  //return false;
//}

//document.querySelector('#calculator').addEventListener('submit', calculate);

var TipCalculator = {
  getBillAmount: function () {
    return document.querySelector('#bill-amount').value;
  },

  setBillAmount: function (event) {
    return event.target.value;
  },

  handleBillAmountChange: function () {
    document.querySelector('#bill-amount').addEventListener('keyup', this.setBillAmount);
  },

  getPercentageTip: function () {
    return document.querySelector('#percentage-tip').value;
  },

  tipInput: function () {
    return document.querySelector('#tip-amount');
  },

  totalInput: function () {
    return document.querySelector('#total-payable');
  },

  tipAmount: function () {
    return this.getBillAmount() * (this.getPercentageTip() / 100);
  },

  getTotal: function () {
    return parseFloat(this.getBillAmount()) + this.tipAmount();
  },

  printTip: function (inputElement, calculatedValue) {
    inputElement.value = calculatedValue.toFixed(2);
  }


};

TipCalculator.handleBillAmountChange();
