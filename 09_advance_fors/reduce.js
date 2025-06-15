const nums = [1,2,3,4,5,6,7,8,9]

const myNums = []
nums.forEach((num) => {
    num = num + 10
    myNums.push(num)
} )

console.log(myNums)



const newNums = nums.reduce((acc,item) => {
    return acc + item
},0)

console.log(newNums)