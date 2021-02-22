Storage.getData();

Storage.setAccount();

Storage.delete('lastOperation');

let dataName = document.querySelector('[data-name]');

if (dataName) {
    let name = null;

    try {
        let json  = JSON.parse(Storage.get('data'));
        name = json.name;
    } catch (e) {
    }

    if (name) {
        dataName.innerText = name;
    }
}

window.onbeforeunload = () => {
    Storage.delete('dataName');
};
