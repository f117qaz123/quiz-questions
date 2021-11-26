const fs = require("fs");

const data = fs.readFileSync('data.json', 'utf-8');

const calculateTotalValue = (arr) => {
  let totalValue = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    totalValue += arr[i].value;
  }
  return totalValue;
}

calculateTotalValue(JSON.parse(data));
