// Написать функцию, которая создает пустой объект, но без прототипа.

console.log(createNullProtoObj());

function createNullProtoObj() {
    return Object.create(null);
}