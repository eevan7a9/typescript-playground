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

// ENUM & TUPIL *************************************************************************
// better way of holding a predefined value
enum Rank {
  Admin,
  Advisor,
  Cheater
}
//  we add type check to object key
const teacher: {
  name: string;
  age: number;
  //   role as tupil
  role: [string, number];
  rank: number;
} = {
  name: "jeraiya",
  age: 30,
  role: ["teach", 33],
  rank: Rank.Advisor
};
// teacher.role = ["sd"] will cause error needs another number
// teacher.role = [3, 32] will cause error needs string in key 0
console.log(teacher);
if (teacher.rank === Rank.Advisor) {
  console.log("rank is Advisor");
}

//  UNION TYPES with ALIAS & LITERAL TYPES *******************************************************************
type Combinable = number | string;
type ConversionDescriptor = "number" | "string";

const combine = function(
  input1: Combinable,
  input2: Combinable,
  conversionAs: ConversionDescriptor
) {
  let result: Combinable;
  if (
    (typeof input1 == "number" && typeof input2 == "number") ||
    conversionAs == "number"
  ) {
    result = parseInt(input1.toString()) + parseInt(input2.toString());
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedNumber = combine(34, 22, "number");
console.log(combinedNumber); // 56
const combinedString = combine("Dragon", 32, "string");
console.log(combinedString); // Dragon32

// UNKNOWN
let inputUser: unknown;
let food: any;
let toBeAssigned: string;
inputUser = "tacco";
food = "burger";
toBeAssigned = food;
// toBeAssigned = inputUser; error unknown cant be directly assigned to other variable
if (typeof inputUser === "string") {
  toBeAssigned = inputUser;
}
console.log(toBeAssigned);
