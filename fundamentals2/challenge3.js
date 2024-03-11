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
