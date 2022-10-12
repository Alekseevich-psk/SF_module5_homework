(function () {

    const btn = document.querySelector(".main__btn");
    if (!btn) return;

    btn.addEventListener('click', function() {
        this.classList.toggle('click');
    })

})();
