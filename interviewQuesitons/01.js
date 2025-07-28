const arrayhai = [1, 2, 3, 4];
const unarray = "1,2,3,4";
console.log(arrayhai == unarray); //true

const [y] = arrayhai;
console.log(y); // upr vale se connected hai

arrayhai.length = 0;
console.log(arrayhai); //this is give blank array

// let fname = 'ahse ua'
// let lname = 'bihkkmr'

// function addStringAlter(str1,str2){
//     let maxLength = Math.max(str1.length,str2.length)
//     let addStringAlter = ''
//     for(let i = 0; i<maxLength;i++)
//     {
//         if(i<str1.length){
//             addStringAlter += str1[i]
//         }
//         if(i<str2.length){
//             addStringAlter += str2[i]
//         }
//     }
//     console.log(addStringAlter)
// }

// addStringAlter(fname,lname)

// ye sting me greated word dega

let sentence = "abhi is good boy but beacuse";

let longestWord = sentence.split(" ").reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
}, "");

console.log("Longest word is:", longestWord); //beacuse

//merge array

let string = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 0],
];
let merged = [];

for (let i = 0; i < string.length; i++) {
  let innerArray = string[i];
  for (let j = 0; j < innerArray.length; j++) {
    merged.push(innerArray[j]);
  }
}
// Another Mehtod For Array 

const mergedNewMethoed = string.reduce((acc,curr)=>{
  return acc.concat(curr)
},[])


console.log(mergedNewMethoed); // ✅ [1,2,3,4,5,6,7,8,9,0]
console.log(merged); // ✅ [1,2,3,4,5,6,7,8,9,0]



const unsortarr = [4,56,23,46,124,78]
unsortarr.sort((a,b)=> a - b)
console.log(unsortarr)