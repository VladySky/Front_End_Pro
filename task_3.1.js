const number = 4;
console.log('type:', typeof number);

const string = "Hi, John";
console.log('type:',typeof string);

const bool = true;
console.log('type:',bool);

const exampNull = prompt('Just cancel that');
console.log(exampNull) // фактично в консоль логі буде Null,але як тайп оф це показати неможливо мені здається,тому що це переводиться в об'єкт

const undef = 45;
console.log(typeof undefi);

const arr = [];
console.log(Array.isArray(arr));


function showMessage() {
    alert('Всім привіт!');
}

console.log(typeof function() {});