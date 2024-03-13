const jonas = {
  firstName: "Jonas",
  lastName: "schemedman",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //Any function attached to an object is called a method
  //this is a keyword for the object calling the method.
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    },and he has ${this.hasDriversLicense ? "a" : "no"} License}`;
  },
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

//Adding new properties to the object
jonas.location = "portugal";
jonas["twitter"] = "@jonasschemedtman";
console.log(jonas);
//challenge
//"Jonas has 3 friends ,and his best friend is called Michael";
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends ,and his best friend is called ${jonas.friends[0]}.`
);

//object methods
console.log(jonas.calcAge());
console.log(jonas.getSummary());
