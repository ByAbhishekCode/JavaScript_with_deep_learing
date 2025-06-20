const arr = ["abhi", "ram", "rahul"];
// const h1 = document.querySelector('h1')
// let index = 0
// h1.addEventListener('click',()=>{
//     if(index< arr.length){
//         h1.textContent = arr[index]
//         index++
//     }
//     else{
//         index = 0
//     }
// })

//check arr is same or not 
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

console.log(isSame);  // ✅ true if same elements, false otherwise