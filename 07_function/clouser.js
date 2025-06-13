// function outer(){
//     let name = 'dada'
//     function inner(){
//         let name = 'papa'
//         console.log(name)
//         function inner2(){
//             console.log(name)
//         }
//         return inner2
//     }
//     return inner()
// }

// let call_Outer = outer
// call_Outer()

function outer(){
    let name = 'abhi'
    let obj = {
        name1 : "ram",
        age :12
    }
    function inner(){
        console.log(name)
        console.log(obj)
    }
    return inner
}
const call = outer()
call()

