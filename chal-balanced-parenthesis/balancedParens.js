// Given a string, return true or false depending on whether that string has balanced parens.

// For the purposes of this problem, you only need to worry about parens ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balancedParens = (string) => {
    let openParens = 0
    let closeParens = 0

    for(let i = 0; i < string.length; i++) {
        if(string[i] === '(') {
            openParens += 1
        } else if(string[i] === ')') {
            closeParens += 1
        }
    }

    console.log(openParens === closeParens)
}


balancedParens(sample1) //false 
balancedParens(sample2) //true
balancedParens(sample3) //false
balancedParens(sample4) //true