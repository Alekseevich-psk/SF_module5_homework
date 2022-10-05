const arr = ["яблоко", "груша", "апельсин"];

console.log('Итого: ' + arr.length);

arr.forEach((el, i) => {
    console.log((i + 1) + " " + el);
})
