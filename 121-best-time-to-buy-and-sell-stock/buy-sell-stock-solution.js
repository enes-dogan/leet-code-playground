const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let currentBuy = prices[0];
  let maxProfit = 0;

  prices.forEach((price) => {
    const currentProfit = price - currentBuy;

    if (currentProfit < 0) {
      currentBuy = price;
      return;
    }

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  });

  return maxProfit;
}

const result = maxProfit(prices);

console.log(`RESULT: ${result}`);
