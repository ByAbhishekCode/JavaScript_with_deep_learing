const img = document.querySelector('img')
const button = document.querySelector('button')


button.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {img.src = json.message;});
    console.log('hi')
    
}) 