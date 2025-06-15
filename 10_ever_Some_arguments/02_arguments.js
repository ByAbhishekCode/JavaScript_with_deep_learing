
function argu(){
        let arr = Array.from(arguments);
        let sum = arr.reduce((acc, item) => {
            return acc+item
        },0)
        console.log(sum)
            
}

argu(23,45,456,3,4567,354,76,34)