const students = [
    {
        name: "abhi",
        age: 18,
    },
    {
        name: "ram",
        age: 21,
    },
    {
        name: "sau",
        age: 16,
    },
    {
        name: "ujj",
        age: 20,
    },
    {
        name: "arpit",
        age: 17,
    },
];


const adultstudents = students.filter(student => student.age >= 18
)

adultstudents.map((student) =>{
    console.log(
    `Hi, my name is :-> ${student.name} and my age (18 or 18+) ${student.age}`
)})

console.log("*************************************************************")


const alladult = students.filter(student => student.age >= 18).map((student) => {
    return `Hi, my name is :-> ${student.name} and my age (18 or 18+) ${student.age}`
})

console.log(alladult.join('\n'))

const adultstudents1 = students.filter(student => student.age >= 18)
adultstudents.map((name) => {console.log(`name is :-> ${name.name} age is :-> ${name.age}`)})

console.log(students.filter((student) => student.age >= 18));


const names = ["abhi", "ujjwal", "saurabh", "arpit", "abhinav", "satish"];

const l = names.filter((name) => { return name.length >= 2})
console.log(l)