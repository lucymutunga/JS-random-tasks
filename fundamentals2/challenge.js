//functions
function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
