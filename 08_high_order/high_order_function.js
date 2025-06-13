// function a(b){
//     console.log(b)
//     console.log(typeof b)
//     b()
// }

// a(()=>{let c = 10
//     console.log(c)})

function a(b){
    b()
}

function sayHii(){
    console.log('hiiiiii')
}

a(sayHii)

// const newa = sayHii
// newa.age = 12

// newa(sayHii)
// console.log(newa.age)
// console.log(sayHii)