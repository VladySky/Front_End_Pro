function toMultiply(number){
    return function(number1) {
        return number * number1
    }
}

console.log(toMultiply(6)(100))