const arr = [1, 2, 3, 4, 4, 0, null, undefined, "string"];

checkArr(arr);

function checkArr(arr) {
    const arrEvenNum = [];
    const arrOddNum = [];
    const arrZero = [];

    arr.forEach((el) => {
        switch (true) {
            case el % 2 == 0 && !isNaN(el) && el > 0:
                arrEvenNum.push(el);
                break;
            case el % 2 !== 0 && !isNaN(el) && el > 0:
                arrOddNum.push(el);
                break;
            case el == 0 && !isNaN(el):
                arrZero.push(el);
                break;
        }
    });

    console.log('Четных элеменов - ' + arrEvenNum.length + ';');
    console.log('Нечетных элеменов - ' + arrOddNum.length + ';');
    console.log('Нулей - ' + arrZero.length + ';');
}
