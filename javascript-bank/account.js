/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

// Account.prototype.getBalance = function () {
//   var totalDeposit = 0;
//   var totalWithdrawals = 0;
//   for (var i = 0; i < this.transactions.length; i++) {
//     if ()
//   }
// };
