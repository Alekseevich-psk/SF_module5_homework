const raiseToDegree = (x, n) => {
    if (x <= 0) throw new Error("Ошибка! Только натуральные положительные числа!");
    return x ** n;
};

console.log(raiseToDegree(2, 4));