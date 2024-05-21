let array = [1,true,'hey amigo', 3, false, 8,true,12];

function checkValue (array){
    let numb= []
    for (let i=0; i<array.length; i++){
        if(typeof array[i]=== 'number'){
            numb.push(array[i])
        }
    }
    console.log(numb)

    function chekNumbers(numb){
        let number=0;
        let count=0;
        for(let i=0; i<numb.length; i++){
            number+=numb[i];
            count++
        }
        console.log(number / count);
    }
    chekNumbers(numb)
}
checkValue(array)