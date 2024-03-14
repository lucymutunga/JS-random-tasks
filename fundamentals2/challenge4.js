const Mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const John = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
Mark.calcBMI();
John.calcBMI();
console.log(John.bmi, Mark.bmi);
Mark.bmi > John.bmi
  ? console.log(
      `${Mark.fullname}'s BMI (${Mark.bmi}) is higher than ${John.fullname}'s(${John.bmi})`
    )
  : console.log(
      `${John.fullname}'s BMI (${John.bmi}) is higher than ${Mark.fullname}'s(${Mark.bmi})`
    );
