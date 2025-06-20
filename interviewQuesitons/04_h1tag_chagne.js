//phle se h1 me kuch text hai or ab jb jb click kare tb tb h1 ka text change ho
// const arr = ["abhi", "ram", "rahul"];
// const h1 = document.querySelector("h1");
// let index = 0;
// h1.addEventListener("click", () => {
//   if (index < arr.length) {
//     h1.textContent = arr[index];
//     index++;
//   } else {
//     index = 0;
//   }
// });

//check arr is same or not  bot working string and number
const arr1 = [5, 6, 7, 8];
const arr2 = [8, 5, 6, 7];

// Step 1: Check length first
let isSame = arr1.length === arr2.length; // give true thats way it will not give like isSame = true

if (isSame) {
  // Step 2: Sort and compare
  const sorted1 = [...arr1].sort(); //first sort then it will create shallow copy
  const sorted2 = [...arr2].sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      isSame = false;
      break;
    }
  }
}

// console.log(isSame); // ✅ true if same elements, false otherwise

// ye code dono pe kam karega mtlb number or string dono pe
// Function to count the frequency of each character/digit in a string or number
function countFrequency(str) {
  // Step 1: If input is a number, convert it to string so we can loop through characters
  str = str.toString();

  // Step 2: Create an empty object to store frequency counts
  let freq = {};

  // Step 3: Loop through each character in the string
  for (let char of str) {
    // Step 4: If this character already exists in freq, increase its count
    if (freq[char]) {
      freq[char] += 1; // increment the count
    } else {
      // Step 5: If it's the first time seeing this character, set count to 1
      freq[char] = 1;
    }
  }

  // Step 6: Return the final frequency object
  return freq;
}

// Example:
console.log(countFrequency(232932889)); // { a: 1, b: 2, c: 3 }

//remove dublicate form array
function removeDuplicates(arr) {
  let unique = [];

  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// revered string pallandorme

let a12 = 121;
let revedstring = String(a12); //here number change into string

let splitsrting = revedstring.split("").reverse().join("");
console.log(splitsrting);
if (revedstring === splitsrting) {
  console.log(revedstring, "is palendrome");
} else {
  console.log("It is not palendorme");
}

// revesed number number or string dono pe kam karega
let a = 1234;

function revesrd(num) {
  let numstore = [];
  let toChange = String(num); //change number to string
  numstore = toChange.split("").reverse().join(" "); //dekh agr '' space hoga to phir space dega phir revese karega then join karega ' ' space ke sath like 4 3 2 1
  console.log(numstore);
}
revesrd(a);

// this program for adding two sting,numbers and also for alternative

const name1 = 1234;
const name2 = 56789;

const name3 = name1.toString();
const name4 = name2.toString();

function addStringAlter(str1, str2) {
  let maxLenght = Math.max(str1.length, str2.length);
  let addedString = "";
  for (let i = 0; i < maxLenght; i++) {
    if (i < str1.length) {
      addedString += str1[i];
    }
    if (i < str2.length) {
      addedString += str2[i];
    }
  }
  console.log(addedString);
}

addStringAlter(name3, name4);

//give grater than 3 value
let arry1 = [4, 3, 5, 2, 6, 8, 1, 2];
let graterarry = arry1.filter((num) => {
  //filter give a new array
  return num > 3;
});
console.log(graterarry);

//swaping a number

let p = 2;
let q = 4;
p = p * q; // 2 * 4 =  8
q = p / q; // 8 / 4 = 2
p = p / q; // 8 / 2 = 4
console.log(p, q);

//write a program for sting first letter captlization

let nonCap = "abhi kumar shakya";

function captlization(name) {
  let result = name.charAt(0).toUpperCase() + name.slice(1);
  console.log(result);
}

captlization(nonCap);

// Sort Integer Array with Negatives (Without .sort()) if used for sting then in function add let a = split('') and last return join('') or sari swap a me hoge or number value me arr me ho rhe hai
function customSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let numbers = [5, -3, 0, 2, -7, 8, 1];
console.log(customSort(numbers)); // Output: [-7, -3, 0, 1, 2, 5, 8]


//Given an array like [1, 13, 12, 5, 100], find a combination of elements that add up to 17, and show the indices of the elements used.
let arr = [1, 13, 12, 5, 100];
let target = 17;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(
        `Found: ${arr[i]} (index ${i}) + ${arr[j]} (index ${j}) = ${target}`
      );
      return;
    }
  }
}