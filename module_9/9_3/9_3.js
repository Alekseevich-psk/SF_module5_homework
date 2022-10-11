(function () {
    const parent = document.querySelector(".main");
    if (!parent) return;

    const input = parent.querySelector(".main__input");
    const erorr = parent.querySelector(".main__error");
    const xhrErorr = parent.querySelector(".main__q-error");
    const res = parent.querySelector(".main__q-success");
    const spinner = parent.querySelector(".main__spinner-border");
    const btn = parent.querySelector(".main__btn");

    btn.addEventListener("click", () => {
        if (!btn) return;

        if (input.value == "") {
            erorr.innerHTML = "Вы не ввели число";
            return;
        }

        if (input.value <= 0 || input.value > 10) {
            erorr.innerHTML = "Введенное число не попадает под условия задачи";
            return;
        }

        q(`https://jsonplaceholder.typicode.com/todos/${input.value}`, "GET");
    });

    function q(url, metod) {
        var xhr = new XMLHttpRequest();

        xhr.open(metod, url, false);

        xhr.send();

        spinner.style.display = "block";

        if (xhr.status != 200) {
            xhrErorr.innerHTML = xhr.status + xhr.statusText;
        } else {
            setTimeout(() => {
                spinner.style.display = "none";
                res.innerHTML = xhr.responseText;
            }, 1000);
        }
    }
})();
