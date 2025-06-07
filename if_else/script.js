const name = prompt("Enter the name") || "abhi";
const age = prompt("Etner the age") || 19;

console.log(`Name:-> ${name}`);
console.log(`Name:-> ${age}`);

if (age > 18 && age <= 22) {
  console.log(`${name} Go for Bike Ride`);
} else if (age > 23 && age <= 50) {
  console.log(`${name} Go for the Car Ride`);
} else if (age > 50 && age >= 100) {
  console.log(`${name} Stay Home Safe Home`);
}

console.log("End ");
