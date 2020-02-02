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
// we tell Typescript we will assign a function to this variable
// with two parameter of number
// and return a string
var addSomething;
addSomething = add;
console.log(addSomething(33, 333));
var addHandler = function (num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
};
addHandler(2333, 32, function (number) {
    console.log(number);
});
