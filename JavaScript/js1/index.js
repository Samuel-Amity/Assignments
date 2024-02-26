let num = Int(prompt("Enter a number: "));
let factorial = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else if (num === 0) {
    console.log("The factorial of 0 is 1");
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log("The factorial of", num, "is", factorial);
}
