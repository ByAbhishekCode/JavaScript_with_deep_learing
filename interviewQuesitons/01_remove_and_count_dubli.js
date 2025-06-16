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
console.log(countFrequency("aaaaaaabbccc")); // { a: 1, b: 2, c: 3 }

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