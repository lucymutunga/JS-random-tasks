function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `${firstName} You are ${age},born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh,and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}
const firstName = "Jonas";
calcAge(1991);
//calcAge is in a global scope
//firtName is a global variable and can be execeuted in the parent function calcAge through variable lookup.
