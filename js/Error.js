class Error {
    static init() {

    }
}

document.addEventListener('DOMContentLoaded', () => {
    let terminalID = Storage.get('terminalLogin'),
        element = document.querySelector('.terminalID');

    if (element) {
        terminalID = terminalID.substr(0, 3) + ' ' + terminalID.substr(3, 3) + ' ' + terminalID.substr(6, 3);

        element.innerText = terminalID;
    }
});
