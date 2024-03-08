//are always stored in a variable since they are expressions
const calAge = (birthyear) => 2037 - birthyear;
const age3 = calAge(2001);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2024 - birthyear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
  //   return retirement;
};
console.log(yearsUntilRetirement(2001, "Lucy"));
console.log(yearsUntilRetirement(2005, "Sandy"));
