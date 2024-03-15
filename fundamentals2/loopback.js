const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
//looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
//loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise${exercise}:Lifting weight repetition ${rep}🏋️‍♂️`);
  }
}
