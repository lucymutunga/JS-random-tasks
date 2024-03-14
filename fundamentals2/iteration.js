//for loop keeps running while the condition is true
//for loop has 3 parts("variable with initial count,logical condition,increaing/decreasin the counter")

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting Weights repetition ${rep}🏋️‍♂️`);
}
const jonasArray = [
  "jonas",
  "Schemedtman",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];
//Reading from jonasArray
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  // filling the types array
  types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
