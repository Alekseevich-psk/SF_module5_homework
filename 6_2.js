const maxValueCheckNum = 1000;
const testValue = 1;

checkNum(testValue);

// for (let i = 1; i <= 50; i++) {
//     checkNum(i);
// }

function checkNum(num) {
    if (num < 0 || num > maxValueCheckNum || isNaN(num)) {
        console.error(`Введенное число - ${num}, не подходит под условия задачи!`);
        return;
    }

    if (num === 0) {
        console.error("Глупышка, на 0 делить нельзя!");
        return;
    }

    for (let i = 1; i <= num; i++) {
        if ((num % i === 0 && num !== i && i !== 1) || num == 1) {
            console.log(`Число '${num}' cоставное`);
            return;
        }
    }

    console.log(`Число '${num}' простое`);
}
