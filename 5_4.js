const i = getRndInteger(0, 100);
console.log(i);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}