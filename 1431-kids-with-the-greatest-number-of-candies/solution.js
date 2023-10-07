// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

function biggestNumber(candies) {
  let biggest = candies[0];
  candies.forEach(number => {
    if (number > biggest) {
      biggest = number;
    }
  });
  return biggest;
}

function kidsWithCandies(candyArr, extra) {
  const biggest = biggestNumber(candies);
  return candyArr.map(number => number + extra >= biggest);
}

kidsWithCandies(candies, extraCandies);