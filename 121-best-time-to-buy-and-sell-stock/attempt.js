// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

// Wrong logic
function maxProfit(prices) {
  function findSmallestNumbersIndex(prices) {
    let smallest = prices[0];
    prices.forEach((price) => {
      if (smallest > price) {
        smallest = price;
      }
    });
    const indexOfSmallest = prices.indexOf(smallest);
    return [smallest, indexOfSmallest];
  }

  const [smallest, smallestNumbersIndex] = findSmallestNumbersIndex(prices);

  function findNumbersAfterSmallest(prices) {
    return prices.filter((price, index) => {
      return index > smallestNumbersIndex;
    });
  }
  const numbersAfterSmallest = findNumbersAfterSmallest(prices);

  function findBiggestNumberAfterSmallest(numsAfterSmallest) {
    let biggest = 0;
    numsAfterSmallest.forEach((price) => {
      if (biggest < price) {
        biggest = price;
      }
    });
    return biggest;
  }
  const biggestNumber = findBiggestNumberAfterSmallest(numbersAfterSmallest);
  if (biggestNumber !== 0) {
    return biggestNumber - smallest;
  }
  return biggestNumber;
}

maxProfit(prices);
