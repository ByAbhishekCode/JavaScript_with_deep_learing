const arry = [1, 2, [3, 4, [5, 6, [6, 7], [8, 9], [10, 11], [12, 13]]]];
const arry1 = [14, 15, [16, 17, [18, 19, [20, 21, [22, 23]]]]];

const allarry = [...arry, ...arry1].flat(Infinity);
// console.log(allarry)

// console.log(arry)

// const str = 'abhishek '
// const str1 = 'ram kumar'
// const strspred = [...str, ...str1]
// // console.log(strspred)

// const user1 = {
//     user: 'abhi',
//     age : 21,
//     location : {
//         city: 'kanpur',
//         pincode: 208017,
//         friends:{
//             first_friend_name : 'ram',
//             second_friend_name: 'abhi',
//             friends_locataion: {
//                 first_location: "kanpur",
//                 second_friend_name: "luckonw"
//             }
//         }
//     }
// }

// const user2 =  {
//     user: 'shyam',
//     age : 101,
//     location : {
//         city: 'USA',
//         pincode: 329,
//         friends:{
//             first_friend_name : 'shalim',
//             second_friend_name: 'abdul',
//             friends_locataion: {
//                 first_location: "Dubai",
//                 second_friend_name: "pakistan"
//             }
//         }
//     }
// }

// const userAll = {...user1,...user2}.flat(Infinity)

const user3  = {
    name: 'abhi',
    age: 12,
    addrese: {
        location:'kanpur',
        pincode : 208017
    }
}

const {name, age,addrese : {pincode : patanumber , location}} = user3
console.log(name,age,patanumber,location)

