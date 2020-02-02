// Function RETURN TYPE

// this func will return String
const add = function(num1: number, num2: number): string {
  return num1.toString() + num2.toString();
};

console.log(add(23, 33));

// void will return nothing
const consoleSomething = function(): void {
  console.log("something");
};

consoleSomething();

//  FUNCTION TYPE
// we tell Typescript we will assign a function to this variable
// with two parameter of number
// and return a string
let addSomething: (x: number, b: number) => string;
addSomething = add;
console.log(addSomething(33, 333));
