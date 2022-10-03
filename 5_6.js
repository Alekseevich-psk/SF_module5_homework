const arr = [1, 2, 3, 4, 4, 5];
const subArr = [1, 1, 1];

checkArr(arr);
checkArr(subArr);

function checkArr(arr) {
    let flagArr;

    for (let i = 1; i < arr.length; i++) {
        arr[i] === arr[i - 1] ? (flagArr = true) : (flagArr = false);
    }

    flagArr ? console.log("Четкий массив") : console.log("Массив с низкой социальной ответсвенностью");
}
