const arrayhai = [1, 2, 3, 4];
const unarray = "1,2,3,4";
// console.log(arrayhai == unarray); //true

const [y] = arrayhai;
// console.log(y); // upr vale se connected hai

// arrayhai.length = 0
//console.log(arrayhai)     //this is blank array for it

// function addStringAlter(str1,str2){
//     let maxLenght = Math.max(str1.length,str2.length)
//     let addedString = "";
//     for(let i = 0 ; i< maxLenght;i++)
//     {
//         if(i<str1.length)
//         {
//             addedString += str1[i];
//         }
//         if(i<str2.length)
//         {
//             addedString += str2[i];
//         }
//         console.log(addedString);
//     }
// }

// let name3 = 'abhiram'
// let name4 = 'kumarhai'
// addStringAlter(name3, name4);

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

console.log("Longest word is:", longestWord);

//merge array 

let string = [[1,2],[3,4],[5,6],[7,8],[9,0]];
let merged = [];

for (let i = 0; i < string.length; i++) {
  let innerArray = string[i];
  for (let j = 0; j < innerArray.length; j++) {
    merged.push(innerArray[j]);
  }
}

console.log(merged); // ✅ [1,2,3,4,5,6,7,8,9,0]
