let emptyOnOne = (array) => {
   if (array[0] === 1 || array[array.length - 1] === 1) {
        array = []
    }
    return array
}


console.log(emptyOnOne([2,3,4]))
console.log(emptyOnOne([1,3,4]))
console.log(emptyOnOne([2,3,1]))