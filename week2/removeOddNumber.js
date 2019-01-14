let removeOddNumber=(array)=>{
    let myarray = array.filter(
        (number) =>{
            return number%2!==0
        }
    )
    return myarray
}
console.log(removeOddNumber([1,2,3,4]))