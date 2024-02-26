let age = parseInt(prompt("Enter your age: "));
let nationality = prompt("Are you Indian? (yes/no): ").toLowerCase();

if (age >= 18 && nationality === "yes") {
    console.log("You are eligible to cast your vote.");
} else {
    console.log("You are not eligible to cast your vote.");
}
