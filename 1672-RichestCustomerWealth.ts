//Subptimal solution o(n^2)
const accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

function maximumWealth(accounts: number[][]): number {
  let richestCustomer = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
    }
    if (customerWealth > richestCustomer) {
      richestCustomer = customerWealth;
    }
  }
  return richestCustomer;
}

const result = maximumWealth(accounts);
