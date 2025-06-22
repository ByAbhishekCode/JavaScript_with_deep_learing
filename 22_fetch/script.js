fetch("https://dummyjson.com/users")
.then((res)=>  res.json())
.then((data)=> console.log(data))


fetch("https://dummyjson.com/products/add",{
    method: 'POST',
    body: JSON.stringify({
        title: 'abhi',
        hero: 'like superman'
    })
}).then((res => res.json()))
.then(console.log)