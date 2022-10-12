(function () {
    const parent = document.querySelector(".main");
    if (!parent) return;

    const btn = parent.querySelector(".main__btn");
    const btnRemove = parent.querySelector(".main__remove");

    const res = document.querySelector(".main__res");
    if (!res) return;

    btnRemove.addEventListener("click", function () {
        if (!this) return;
        if (btn.classList.contains("click")) {
            btn.classList.toggle("click");
            res.innerHTML = "";
        }
    });

    btn.addEventListener("click", function () {
        if (!this) return;
        this.classList.toggle("click");
        res.innerHTML = getSizeWindow();
    });

    function getSizeWindow() {
        return "Ширина" + "-" + document.documentElement.clientWidth + " / " + "Высота" + "-" + document.documentElement.clientHeight;
    }
})();
