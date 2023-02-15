// Define an array of stock prices
const stockPrices: number[] = [10, 7, 5, 8, 11, 9];

// Define a function to calculate the moving average for a given number of periods
function calculateMovingAverage(prices: number[], numPeriods: number): number[] {
  const movingAverages = [];
  for (let i = numPeriods - 1; i < prices.length; i++) {
    const sum = prices.slice(i - numPeriods + 1, i + 1).reduce((total, num) => total + num);
    const average = sum / numPeriods;
    movingAverages.push(average);
  }
  return movingAverages;
}

// Calculate the 50-day moving average
const fiftyDayMA = calculateMovingAverage(stockPrices, 50);

// Calculate the 200-day moving average
const twoHundredDayMA = calculateMovingAverage(stockPrices, 200);

// Determine the trading signal based on the crossover of the moving averages
if (fiftyDayMA[fiftyDayMA.length - 1] > twoHundredDayMA[twoHundredDayMA.length - 1]) {
  console.log("Buy signal");
} else {
  console.log("Sell signal");
}