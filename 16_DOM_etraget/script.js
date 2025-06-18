const inputBox = document.querySelector('input')
const paragrahp = document.querySelector('p')
const form = document.querySelector('form')

// inputBox.addEventListener('dblclick',(e)=>{
//     console.log("clicked")
// })
// inputBox.addEventListener('click',(e)=>{
//     console.log("clicked")
// })

// inputBox.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     let data = e.target.value
//     paragrahp.innerText = data
// })

inputBox.addEventListener('change',(e)=>{
    console.log('change')
    let data = e.target.value
    paragrahp.innerText = data
})
inputBox.addEventListener('focus',(e)=>{
    console.log('focus')
  
})
inputBox.addEventListener('blur',(e)=>{
    console.log('blur')
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e)
    const formdata = new FormData(form)

    for (const key of formdata.entries()) {
        console.log(key)
    }
    
})