//we use the function keyword to declare a function
// An input of a function means a parameter of the function
//Actual value of the parameter is called an argument

//A function to calculate age given a certain birth year
function calAge(birthyear) {
  return 2024 - birthyear;
}
calAge(2001);
console.log(calAge(2001));

//Function expreesion is a function without a name,we use a variable to store the function
//expressions are values thats why we store it in a variable

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
// console.log(calcAge2(2001));
const age2 = calcAge2(2001);
console.log(age2);

//difference between function declaration and function expression
//function declaration can be called before it is defined while function expression cannot be called before it is defined
//function declaration is hoisted while function expression is not hoisted