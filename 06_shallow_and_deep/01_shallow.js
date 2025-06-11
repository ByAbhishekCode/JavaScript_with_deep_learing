const arr = [1,2,3,4,5,6,7,[8,9,10,11]]
const arr1 = [...arr]


// console.log(arr)
// console.log(arr1)

const user = {
    'first-name': 'abhi',
    last_name: 'kumar',
    address : {
        pata: '246A Bamba road kalyanpur',
        pincode: 208017
    }
}

// console.log(user["first-name"])
// console.log(user.address.pincode)

const newUser = {...user}

// console.log(newUser)

newUser.address.pincode = 208060

console.log(user)
console.log(newUser)

const newUserDeep = structuredClone(user)

newUserDeep.address.pincode = 208070

console.log(user)
console.log(newUserDeep)
