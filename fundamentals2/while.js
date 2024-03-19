//The while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting Weights repetition${rep}🏋️‍♂️`);
// }
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting Weights repetition ${rep}🏋️‍♂️`);
  rep++;
}

//rollling a dice and stopping at 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`lOOP is about to end....`);
}
