const arr = ['abhi','ram','rahul']

const h1 = document.querySelector('h1')
let index = 0
h1.addEventListener('click',()=>{
    if(index< arr.length){
        h1.textContent = arr[index]
        index++
    }
    else{
        index = 0 
    }
})