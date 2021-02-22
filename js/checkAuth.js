class CheckAuth {
    static check(data) {
        try {
            let login = Storage.get('terminalLogin');

            if (!login) {
                return new Promise((resolve, reject) => {
                    reject(new Error('Login or hash'));
                });
            }

            data = Object.assign(data, {
                terminalLogin: login,
            });

            return Ajax.post(TERMINAL_INDIGO24_DOMAIN + 'api/v2/payment/check', data);
        } catch (e) {
            console.error(e);
        }

        return new Promise((resolve, reject) => {
            reject(new Error('Error'));
        });
    }

    static getAccount() {
        let account = document.querySelector('[data-type]');

        if (account) {
            return account.innerText.replace(/\s+/g, '');
        }
    }

    static forward() {
        let forward = document.querySelector('.button.forward');

        if (forward) {
            if (forward.dataset && forward.dataset.href) {
                window.location = forward.dataset.href;
            }
        }
    }
}
