// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(isSum50); // "true" all values calculate to 50

const sum50 = n1 + n2 + n3 + n4;
console.log(`all the numbers are equal to ${sum50} `);

console.log(n1 % 5); //divisible by 5
console.log(n2 % 5); //divisible by 5
console.log(n3 % 5); //divisible by 5
console.log(n4 % 5); //divisible by 5
console.log(`all the numbers are ${isSum50} and divisible by 5 `);

// console.log(isSum50); // this operation is true

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(isTwoOdd); //true
console.log(n1 % 2); // true
console.log(n2 % 2); // true
console.log(n3 % 2); // true
console.log(n4 % 2); // true

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
console.log(n1 > 25); //  not larger than 25
console.log(n2 > 25); // not larger than 25
console.log(n3 > 25); // not larger than 25
console.log(n4 > 25); // false
console.log(n3 < 25); // true 25 is larger than n3

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

console.log(isUnique); //true
console.log(n1 != n2); //true
console.log(n1 != n3); //true
console.log(n1 != n4); //true

if (n1 != n2) {
  console.log("this is a true statement");
} else if (n1 != n3) {
  console.log("this is a true statement");
}

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Practical Math road trip gas calculation

let miles = 1500;
let fuel = 175;
let perGallon = 3;

//How many gallons of fuel will you need for the entire trip?
console.log(miles / 55); // 27.28
console.log(miles / 60); // 25
console.log(miles / 75); // 20

// let perGallonCost = milesPerHour * perGallon;
// console.log(perGallonCost); //you will need 75 gallons
// console.log(milesPerHour);

//Will your budget be enough to cover the fuel expense?
const per55 = 55; // best budget
const per60 = 60;
const per75 = 75;

console.log(per55 * 3);
console.log(per60 * 3);
console.log(per75 * 3);

// How long will the trip take, in hours?
let milesPerHour = miles / 60;
console.log(milesPerHour); // 25 hours
