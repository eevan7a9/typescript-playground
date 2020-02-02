const addNumber = function(
  //   we want type number for this
  num1: number,
  //   we want type number for this
  num2: number,
  //   we want type boolean for this
  status: boolean,
  //   we want type string for this
  successMessage: string = "the result is"
) {
  if (status) {
    return `${successMessage} : ${num1 + num2}`;
  } else {
    throw new Error("status is not true");
  }
};
// we tell Typescript that this variable will store a Number
let number1: number;
number1 = 25;
const number2 = 25;
const procceed = true;
const message = "the total number is";

const result = addNumber(number1, number2, procceed, message);
console.log(result);

const student = {
  name: "luffy",
  age: 21,
  ability: ["fighting", "eating"]
};
// we tell Typescript this will be an array of strings
let studentAbility: string[];
studentAbility = student.ability;

console.log(studentAbility);

// better way of holding a predefined value
enum Rank {
  ADMIN,
  ADVISOR,
  CHEATER
}
//  we add type check to object key
const teacher: {
  name: string;
  age: number;
  role: [string, number];
  rank: number;
} = {
  name: "jeraiya",
  age: 30,
  role: ["teach", 33],
  rank: Rank.ADVISOR
};
// teacher.role = ["sd"] will cause error needs another number
// teacher.role = [3, 32] will cause error needs string in key 0
console.log(teacher);
if (teacher.rank === Rank.ADVISOR) {
  console.log("rank is Advisor");
}

//  UNION TYPES
const combine = function(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedNumber = combine(34, 22);
console.log(combinedNumber); // 56
const combinedString = combine("Dragon", 32);
console.log(combinedString); // Dragon32
