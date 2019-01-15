let password = prompt('what is the password');
let passwordChecker = (password) =>{
    x = 1
    while (x < 3){
        if (password !== 2019 && x === 1){
            console.log('Incorrect,try again')
        }
        else if (password !== 2019 && x ===2){
            console.log('try again')
        }
        else if (password !== 2019 && x ===3){
            console.log('locked')
        }
        else{
            console.log('Passed!')
        }
        x++ 
    }
}

passwordChecker(password)