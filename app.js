function printMessage(name, age, smokes) {
    if (age < 18 && !smokes) {
        console.log(`Молодець ${name}! Гарний приклад для своїх однолітків.`);
    } else if (age < 18 && smokes) {
        console.log(`${name}, а твої батьки знають про це?`);
    } else if (age >= 18 && !smokes) {
        console.log(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
    } else if (age >= 18 && smokes) {
        console.log(`Що ж ${name}, це твій вибір. Але я не радив би курити.`);
    }
}

let name = prompt("Як вас звати?");

let age = parseInt(prompt("Скільки вам років?"));
while (isNaN(age) || age <= 0) {
    age = parseInt(
        prompt("Будь ласка, введіть коректний вік. Скільки вам років?")
    );
}

let smokes = confirm("Ви курите?");

printMessage(name, age, smokes);
