const API_URL = "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com"

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        // 0 = UNSET
        // 1 = OPENED
        // 2 = HEADERS_RECIEVED
        // 3 = LOADING
        // 4 = DONE
        const data = JSON.parse(this.response)
        const HTMLRespone = document.querySelector("#app")

        const tpl = data.map(user => `<li>${user.name} ${user.email} </li>`)
        HTMLRespone.innerHTML = `<ul>${tpi}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users` );
xhr.send();