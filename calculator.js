var readlineSync = require(`readline-Sync`);

console.log("Welcome to the best calculator you will ever use")

var firstNum = readlineSync.questionInt("Enter your first number  ");
var secondNum = readlineSync.questionInt("Enter your second number ");
var userOperation = readlineSync.question("Please enter the operation you wish to use ( add, sub, mul, div): ");



function myAddition(num1, num2){
    return num1 + num2;
}
function mySubtraction(num1, num2){
    return num1 - num2;
}
function myMultiplication(num1, num2){
    return num1 * num2;
}
function myDivision(num1, num2){
    return num1 / num2;
}

function myCalculator(number1, number2, enteredOperation){



        
if (enteredOperation == "add"){
    console.log("Adding Number-1:", + number1 +  "  with Number 2:", + number2 + "  results in", + myAddition(number1, number2));
} else if (enteredOperation == "sub") {
    console.log("Subtracting Number 1:", + number1 + "   and Number 2", + number2 + "  results in", + mySubtraction(number1, number2));
} else if (enteredOperation == "mul") {
    console.log("Multipling Number 1:", + number1 + "   and Number 2:", + number2 + "  results in", + myMultiplication(number1, number2));
} else if (enteredOperation == "div") {
    console.log("Deviding Number 1:", + number1 + "   and Number 2:", + number2 + "  results in", + myDivision(number1, number2));
} else{
    console.log("Unknown Operation. Please try again!");
}
}
myCalculator(firstNum, secondNum, userOperation);