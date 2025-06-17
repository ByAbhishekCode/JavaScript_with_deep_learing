const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

// console.log(h1)

for(let i = 2; i <= 1000; i++)
    {
        let add = card.cloneNode()
        add.innerText = i
        container.append("hi mai hu na")
    }
