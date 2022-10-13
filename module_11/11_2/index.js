export const raiseToDegree = (x, n) => {
    if(x < 0) return "Error! Введено отрицательное число";
    if(x == 0) return "Error! Невозможности деления на ноль";

    return `Успех операции - ${x ** n}`;
};

// console.log(raiseToDegree(1, 4));


