var maxProfit = function (prices) {

    let left = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > left && (prices[i] - left > profit)) profit = prices[i] - left;
        if (prices[i] < left) left = prices[i];
    }
    return profit;
};

console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4]));
console.log(maxProfit(prices = [7, 6, 4, 3, 1]));
console.log(maxProfit(prices = [2, 1, 4]));
console.log(maxProfit(prices = [2, 4, 1])); // 2 4