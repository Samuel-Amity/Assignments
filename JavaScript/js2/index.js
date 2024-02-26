let num = parseInt(prompt("Enter a 4-digit number: "));

if (num < 1000 || num > 9999) {
    console.log("Please enter a valid 4-digit number.");
} else {
    let originalNumber = num;
    let sum = 0;
    
    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, 4);
        num = Math.floor(num / 10);
    }
    
    if (sum === originalNumber) {
        console.log(originalNumber, "is an Armstrong number.");
    } else {
        console.log(originalNumber, "is not an Armstrong number.");
    }
}
