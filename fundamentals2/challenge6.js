const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const day1 = arr[0];
    const day2 = arr[1];
    const day3 = arr[2];

    console.log(`${day1} in 1days...${day2} in 2days...${day3} in 3days...`);
  }
};

printForecast([17, 21, 23]);
