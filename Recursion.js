// Scenario: You are working on an encryption system for a messaging app. You need to perform some 
// recursive operations on strings and numbers.
// Sub-questions: a. Write a recursive function sumDigits(n) that takes a number and returns the 
// sum of its digits. Example: sumDigits(123) → 6.


function sumDigits(n){
    let tostring  = String(n).split("")
    let total = 0
    for (let i = 0; i<tostring.length; i++){
        total += parseInt(tostring[i])

    }
    return total
}
console.log(sumDigits(234))


// b. Write a recursive function power(base, exponent) that calculates base^exponent. Example: power(2, 3) → 8.

function power(base, exponent){
    return base ** exponent
}

console.log(power(2, 3))


// c. Write a recursive function reverseWords(sentence) that reverses the order of words in a  string. Example: "Hello world" → "world Hello".

function reverseWords(sentence){
    let newArr = sentence.split(" ")
    return newArr.reverse().join(" ")
    
}   

console.log(reverseWords("Hello World"))



// e. Convert the sumDigits(n) function to an iterative version. Compare the performance of both the recursive and iterative approaches when handling large numbers.