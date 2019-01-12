const elevator = (floor) => {
    if (floor > 0){
        console.log(`Go to floor ${floor}`)
    }
        console.log(`Going nowhere, ${floor} is not a valid floor.`)
}

console.log(elevator(2))
console.log(elevator('C-suit'))
