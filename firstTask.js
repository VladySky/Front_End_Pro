let result = '';

for (let i=20; i<=30; i+=0.5){
    result +=i;
    if(i<30){
        result += ', '
    } else if (i==30){
        result+='.'
    }
}
console.log(result)