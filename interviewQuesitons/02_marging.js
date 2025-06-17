// this program for adding two sting and also for alternative

const name1 = "abhishek12345";
const name2 = "ujjwal";

function addStringAlter(str1, str2)
{
    let maxLenght = Math.max(str1.length,str2.length)
    let addedString = ''
    for(let i = 0 ; i < maxLenght; i++)
    {
        if(i< str1.length)
        {
            addedString += str1[i]
        }
        if(i< str2.length)
        {
            addedString += str2[i]
        }
    }
    console.log(addedString)
}

addStringAlter(name1,name2)