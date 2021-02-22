document.addEventListener('DOMContentLoaded', () => {
    Storage.getData();

    Storage.setAccount();
});

class Print {
    static yes() {
        Ajax.post(Ajax.URL, {
            "cmd": "print",
            "rep": "none",
            "lang":Storage.get('lang_2')
        }, {
            coin: true,
        }).then(() => {
        }).catch(() => {
        });

        setTimeout(() => {
            let forward = document.querySelector('.block_button_yes10');

            if (forward && forward.dataset && forward.dataset.href) {
                window.location = forward.dataset.href;
            }
        }, 1000);
    }
}
