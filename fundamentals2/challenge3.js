const calcAge = function (birthyear) {
  return 2037 - birthyear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge([years.length - 1]),
];
console.log(ages);

//methods
const friends = ["Michael", "Stephen", "Peter"];
friends.push("Jay");
console.log(friends);
//adding element at the bigining of ana element
friends.unshift("john");
console.log(friends);
console.log(friends.indexOf("John"));
//Remove elements
friends.pop(); //the last one
console.log(friends);
friends.shift(); //the first one
//method includes...returns true if its in the arrays and false if not
console.log(friends.includes("Stephen"));
console.log(friends.includes("Bob"));
if (friends.includes("Peter")) {
  console.log("Peter is in your circle");
}

//Building  a tip Calculator
/* Rule:Tip 15% of the bill if the bill value is between 50 and 300,
and if the calue is different ,the tip is 20%.*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const tip = calcTip(100);
console.log(tip);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] - 1 + tips[2]];
console.log(total);
