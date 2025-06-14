const names = ['abhi','ujjwal','saurabh','arpit','abhinav','satish']

for (const name of names) {
    const perticalulname = name 
    for (const character of perticalulname) {
        // console.log(character)
    }
    // console.log(' ')
}


const personDetails = {
    firstName: 'abhi',
    lastName: 'kumar',
    age: 21,
    city: "kanpur"
}

const detail = Object.values(personDetails)
for (const persond of detail) {
    // console.log(persond)
}


for (const key in personDetails) {
    console.log(key,":", personDetails[key])
}