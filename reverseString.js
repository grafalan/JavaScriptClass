let reverseString = (string) => {
    reverseString = string.split('').reverse().join('')
    return reverseString
}
console.log(reverseString('hello there'))