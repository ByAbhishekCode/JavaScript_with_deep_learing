const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// const fistImgege = document.querySelector('img')
const element = document.createElement('img')
console.log(element)
// for(let i = 2 ; i <= 100 ; i++)
// {
//     let create = fistImgege.cloneNode()
//     create.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.appendChild(create)
// }
for(let i = 1 ; i <= 100 ; i++)
{
    let create = element.cloneNode()
    create.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    let addtext = create.innerText = `hii it is ${i}`
    
    console.log(create)
    container.appendChild(addtext)
}