const shiftLetters = (string) => {
    let num = Number(string[0])

    let decodedStr = ''

    for(let i = 1; i < string.length; i++) {
        let strValue = string[i].charCodeAt() + num
        decodedStr += String.fromCharCode(strValue)
    }
    console.log(decodedStr)
}

shiftLetters('2afccpq')
shiftLetters('2fcjjm')