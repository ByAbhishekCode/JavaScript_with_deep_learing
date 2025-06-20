const input1 = document.querySelector("#iName");
const input2 = document.querySelector("#iAge");
const name = document.querySelector(".name");
const age = document.querySelector(".age");

const saveData = JSON.parse(localStorage.getItem('saveData')) || {}



input1.addEventListener('input',(e)=>{
    saveData.name = e.target.value
    console.log(e.target.value)
    localStorage.setItem('saveData',JSON.stringify(saveData))
    name.innerText = e.target.value
})

input2.addEventListener('input',(e)=>{
    saveData.age = e.target.value
    console.log(e.target.value)
    localStorage.setItem('saveData',JSON.stringify(saveData))
    age.innerText = e.target.value
})



if(saveData.name){
    name.innerText = saveData.name
}
if(saveData.age){
    age.innerText = saveData.age
}