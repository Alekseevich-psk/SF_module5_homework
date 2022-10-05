printNumWithTimer(10, 20);

function printNumWithTimer(num1, num2) {
    const refreshId = setInterval(() => {
        num1 < num2 ? (num1+=1, console.log(num1)) : clearInterval(refreshId);
    }, 1000);
}
