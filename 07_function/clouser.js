function outer(){
    let name = 'dada'
    function inner(){
        let name = 'papa'
        console.log(name)
        function inner2(){
            console.log(name)
        }
        return inner2
    }
    return inner()
}

let call_Outer = outer
call_Outer()