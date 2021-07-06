const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, number) => sum + number);
console.log('sum: ', sum);

const product = numbers.reduce((product, number) => product * number);
console.log('product: ', product);

const deposits = account.reduce((deposit, transaction) => {
  if (transaction.type === 'deposit') {
    deposit += transaction.amount;
  }
  return deposit;
}, 0);

const withdrawals = account.reduce((withdrawal, transaction) => {
  if (transaction.type === 'withdrawal') {
    withdrawal += transaction.amount;
  }
  return withdrawal;
}, 0);

const balance = deposits - withdrawals;

console.log('balance: ', balance);

// const returnedAssign = Object.assign()

// const composite = traits.reduce(())
