const data = require("./stocks.json");

const totalValue = (stocks) => {
  let total = 0;

  stocks.forEach((stock) => {
    total += stock.close;
  });
  return Number(total.toFixed(2));
};

const maxProfits = (prices) => {
  let profits = [];
  let max = 0;
  let bestProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const current = prices[i];
    const next = prices[i + 1];
    const difference = next - current;
    profits.push(difference);
  }
  for (const profit of profits) {
    max = Math.max(0, max + profit);

    bestProfit = Math.max(bestProfit, max);
  }
  if (bestProfit < 0) return 0;

  return bestProfit;
};

console.log(totalValue(data))
console.log(maxProfits([7,1,5,3,6,4]))
console.log(maxProfits([7,6,4,3,1]))
