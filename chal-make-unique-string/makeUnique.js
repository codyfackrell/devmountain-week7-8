const makeUnique = (string) => {
    let newString = ''

    for(let i = 0; i < string.length; i++) {
        if(newString.includes(string[i]) === false) {
            newString += string[i]
        } 
    }
    console.log(newString)
}

makeUnique('helloworld')
makeUnique('iwanttoclimbamountain')