function counter (){
    let count = 0;
    return function (result){
        count+=result
        return count
    }
}

const result= counter();

console.log(result(4));
console.log(result(6));
console.log(result(10));
console.log(result(27));