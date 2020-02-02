var addNumber = function (
//   we want type number for this
num1, 
//   we want type number for this
num2, 
//   we want type boolean for this
status, 
//   we want type string for this
successMessage) {
    if (successMessage === void 0) { successMessage = "the result is"; }
    if (status) {
        return successMessage + " : " + (num1 + num2);
    }
    else {
        throw new Error("status is not true");
    }
};
// we tell Typescript that this variable will store a Number
var number1;
number1 = 25;
var number2 = 25;
var procceed = true;
var message = "the total number is";
var result = addNumber(number1, number2, procceed, message);
console.log(result);
var student = {
    name: "luffy",
    age: 21,
    ability: ["fighting", "eating"]
};
// we tell Typescript this will be an array of strings
var studentAbility;
studentAbility = student.ability;
console.log(studentAbility);
var RANK;
(function (RANK) {
    RANK[RANK["ADMIN"] = 0] = "ADMIN";
    RANK[RANK["ADVISOR"] = 1] = "ADVISOR";
    RANK[RANK["CHEATER"] = 2] = "CHEATER";
})(RANK || (RANK = {}));
//  we add type check to object key
var teacher = {
    name: "jeraiya",
    age: 30,
    role: ["teach", 33],
    rank: RANK.ADVISOR
};
// teacher.role = ["sd"] will cause error needs another number
// teacher.role = [3, 32] will cause error needs string in key 0
console.log(teacher);
if (teacher.rank === RANK.ADVISOR) {
    console.log("rank is Advisor");
}
