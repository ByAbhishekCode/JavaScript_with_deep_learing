// ye code dono pe kam karega mtlb number or string dono pe
function countFrequency(str) {
  let freq = {};

  for (let char of str) {
    if (freq[char]) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

// Example:
console.log(countFrequency("22666888")); // { a: 1, b: 2, c: 3 }

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


// revered string 

let a12 = 121
let revedstring = String(a12);

let splitsrting = revedstring.split('').reverse().join('')
console.log(splitsrting)
if(revedstring===splitsrting)
{
  console.log(revedstring,'is palendrome')
}
else
{
  console.log('It is not palendorme')
}


let arr = [1,2,3,4,5]
let arr1 = [1,2,3,4,5]
// console.log(arr == arr1)
// console.log(arr === arr1)

// revesed number
let a = 1234

function revesrd(num){
  let numstore = []
  let toChange = String(num)
  numstore = toChange.split('').reverse().join('')
  console.log(numstore)
}
revesrd(a)


  // console.log(a1)
  // console.log(b1)
  var a1 = b1 = 10

console.log( '3' + 12 - '5')