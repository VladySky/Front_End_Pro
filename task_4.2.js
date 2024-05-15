let number = +prompt("Введіть тризначне число:");
let a = Math.floor(number / 100); // перша цифра
let b = Math.floor((number % 100) / 10); // друга цифра
let c = number % 10; // третя цифра

// Перевірка, чи всі цифри однакові
if (a === b && b === c) {
    console.log("Всі цифри однакові.");
} else {
    console.log("Не всі цифри однакові.");
}

// Перевірка, чи є серед цифр однакові
switch (true) {
    case (a === b && a === c):
        console.log("Всі цифри однакові.");
        break;
    case (a === b || a === c || b === c):
        console.log("Серед цифр є однакові.");
        break;
    default:
        console.log("Серед цифр немає однакових.");
        break;
}