// Function RETURN TYPE
// this func will return String
var add = function (num1, num2) {
    return num1.toString() + num2.toString();
};
console.log(add(23, 33));
// void will return nothing
var consoleSomething = function () {
    console.log("something");
};
consoleSomething();
//  FUNCTION TYPE
var addSomething;
addSomething = add;
console.log(addSomething(33, 333));
