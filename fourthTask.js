let n = +prompt('Enter a number');


for (let i = 2; i <= Math.sqrt(n); i++) {
    if (i % n  == 0) {
        console.log(`${n} просте число`)
    } else {
        console.log(`${n} не просте число`)
        break;
    }
}