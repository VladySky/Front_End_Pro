let year = +prompt('Скільки тобі років ?');
if (year === 0) {
    alert('Шкода, що Ви не захотіли ввести свій вік');


const city = prompt('В якому місті ти живеш ?');
if (city === null || city.trim() === '') {
    alert('Шкода, що Ви не захотіли ввести своє місто');
} else {
    switch (city) {
        case 'Київ':
            alert(`Тобто тобі ${year} і ти живеш в столиці Київ`);
            break;
        case 'Лондон':
            alert(`Тобто тобі ${year} і ти живеш в столиці Лондон`);
            break;
        case 'Вашингтон':
            alert(`Тобто тобі ${year} і ти живеш в столиці Вашингтон`);
            break;
        default:
            alert(`Тобто тобі ${year} і ти живеш в місті ${city}`);
    }
}

let sport = prompt('Який твій улюблений вид спорту ?');
if (sport === null || sport.trim() === ''){
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
} else {
    switch (sport) {
        case sport = 'Футбол' :
            alert('Круто! Хочеш стати як Роналдо?');
            break;
        case sport = 'Баскетбол' :
            alert('Круто! Хочеш стати як ЛеБрон Джеймс?');
            break;
        case sport = 'Стрільба з луку' :
            alert('Круто! Хочеш стати Робін Гудом?');
            break
        default :
            alert('Я не знаю відомих спортсменів в цьому виді спорту');
            break;
    }
}
