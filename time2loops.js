const times2loop = (number,times) =>{
    for (let count = 0;count<times;count++){
        number *= 2
    }
    return number
}

console.log(times2loop(4,5))
