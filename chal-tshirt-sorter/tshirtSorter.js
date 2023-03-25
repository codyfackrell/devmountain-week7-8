const tshirtSorter = (string) => {
    let small = ''
    let medium = ''
    let large = ''

    for(let i = 0; i < string.length; i++) {
        if(string[i] === 's') {
            small += 's'
        } else if (string[i] === 'm') {
            medium += 'm'
        } else if(string[i] === 'l') {
            large += 'l'
        }
    }

    console.log(small + medium + large)
}



tshirtSorter('smllms')
tshirtSorter('smlmslmslmsmmmmsllslslslsmlslslmslm')