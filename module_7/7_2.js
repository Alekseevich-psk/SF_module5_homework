// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
    name: "Andrew",
    age: 30,
};

console.log(checkValueObj("name", obj));

function checkValueObj(string, obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key) && key == string) {
            return true;
        }
        return false;
    }
}
