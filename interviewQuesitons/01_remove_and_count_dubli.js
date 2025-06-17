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
// console.log(countFrequency("aaaaaaabbccc")); // { a: 1, b: 2, c: 3 }

function removeDuplicates(arr) {
  let unique = [];

  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// revered string 

let revedstring = 'bobe'

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
console.log(arr == arr1)
console.log(arr === arr1)


