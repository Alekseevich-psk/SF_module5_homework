// var 1

const arr = [777, "String", true, undefined];

console.log(typeof arr[randomInt(4)]);

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

// var 2

let x = "";

switch (typeof x) {
    case "number":
        alert("x — число");
        break;
    case "string":
        alert("x —cтрока");
        break;
    case "boolean":
        alert("x — логическое значение");
        break;
    default:
        alert("Тип x не определён");
}
