let fizzBuzz = (number)=>{
    if (number%15===0){
        console.log('fizzBuzz')
    }
    else if (number%5===0){
        console.log('Buzz')
    }
    else if (number%3===0){
        console.log('fizz')
    }
    else{
        console.log('fB')
    }
}
fizzBuzz(1)
fizzBuzz(9)
fizzBuzz(15)
fizzBuzz(25)
fizzBuzz(45)