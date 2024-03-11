const calcAverage = (a, b, c) => (a + b + c) / 3;
const doAverage = calcAverage(85, 54, 71);
const koAverage = calcAverage(23, 34, 27);
console.log(doAverage, koAverage);
//checkWinner

function checkWinner(koAverage, doAverage) {
  if (koAverage >= 2 * doAverage) {
    console.log(`Koalas win (${koAverage} vs. ${doAverage})`);
  } else if (doAverage >= 2 * koAverage) {
    console.log(`Dolphins win (${doAverage} vs ${koAverage})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(koAverage, doAverage);
