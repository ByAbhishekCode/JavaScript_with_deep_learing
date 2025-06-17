const container = document.querySelector('.container')
const card = document.querySelector('.card')
let count = 1

card.addEventListener("click", () =>{
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
    console.log(newCard)
});