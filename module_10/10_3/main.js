(function () {
    const linkServer = "wss://echo-ws-service.herokuapp.com/";

    let socket = new WebSocket(linkServer);
    const status = document.querySelector(".chat__status");
    const btnSend = document.querySelector(".btn--send");
    const btnGeo = document.querySelector(".btn--geo");
    const input = document.querySelector(".chat__form-control");
    const chatInnerBody = document.querySelector(".chat__inner--body");

    if (socket.readyState == 3) updateSocket(socket);

    updateSocket(socket);

    // https://www.openstreetmap.org/#map=8/59.407/34.321

    btnGeo.addEventListener("click", () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
                const link = `<a target="_blank" href="https://www.openstreetmap.org/#map=16/${coords.latitude}/${coords.longitude}">https://www.openstreetmap.org/#map=16/${coords.latitude}/${coords.longitude}</a>`;
                chatInnerBody.insertAdjacentHTML("beforeend", msgUser(link));
                autoScroll();
            });
        }
    });

    function updateSocket(skt) {
        skt = new WebSocket(linkServer);
        status.innerHTML = "Start...";

        btnSend.addEventListener("click", function () {
            if (input.value == "") return;

            skt.send(input.value);
            chatInnerBody.insertAdjacentHTML("beforeend", msgUser(input.value));
            autoScroll();
            input.value = "";
        });

        skt.onopen = function (e) {
            status.innerHTML = "Online";
        };

        skt.onmessage = function (event) {
            status.innerHTML = "Получаем данные от сервера...";

            setTimeout(() => {
                status.innerHTML = "Online";
                chatInnerBody.insertAdjacentHTML("beforeend", answerServer(event.data));
                autoScroll();
            }, 1000);
        };

        skt.onclose = function (event) {
            if (event.wasClean) {
                status.innerHTML = `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`;
            } else {
                updateSocket(socket);
            }
        };

        skt.onerror = function (error) {
            status.innerHTML = `[error] ${error.message}`;
        };
    }

    function autoScroll() {
        chatInnerBody.scrollTo(0, chatInnerBody.scrollHeight);
    }

    function msgUser(value) {
        return `<div class="chat__item-align chat__item-align--user"><div class="chat__item chat__item--user">${value}</div></div>`;
    }

    function answerServer(value) {
        return `<div class="chat__item-align"><div class="chat__item chat__item--server">${value}</div></div>`;
    }
})();
