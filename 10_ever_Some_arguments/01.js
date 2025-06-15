// let passwords = ["abc123", "hello123", "123456"];

// let containsNumber = (str) => /\d/.test(str); // regex: number check

// let anyPasswordHasNumber = passwords.some(containsNumber); // true
// let allPasswordsHaveNumber = passwords.every(containsNumber); // true
// console.log(anyPasswordHasNumber);
// console.log(allPasswordsHaveNumber);

let marks = [10, 25, 45, 80];

let passed = marks.some(mark => mark >= 33);

console.log(passed); // ✅ true — kyunki kuch students pass hain (45, 80)
let allPassed = marks.every(mark => mark >= 33);

console.log(allPassed); // ✅ true — sab pass hain