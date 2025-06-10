const user1= {
    name: 'abhi',
    "last-Name": 'kumar'
}

// console.log(user1['last-Name'])

const user2 =  user1
// console.log(user1)
// console.log(user2);

// console.log(user1.name='anuj')
// console.log(user1);
// console.log(user2);

const symbo1 = Symbol("key1")
const symbo2 = Symbol("key1");

const forSym = {
    name : 'abhi',
    'last Name ' : 'kumar',
    f_name : 'p.kumar',
    symbo1: "key1",
    [symbo1]: "key1",
    [symbo2]: 'key2',

}
console.log(forSym.f_name)
console.log(symbo1 == symbo2)
console.log(forSym['last Name ']);
console.log(forSym.symbo1);
console.log("******************type of for symbole****************");
console.log(typeof forSym.symbo1);
console.log("******************end****************");
console.log(forSym[symbo2])
console.log("******************type of for symbole****************");
console.log(typeof forSym[symbo2]);

console.log(forSym);
console.table(forSym)
