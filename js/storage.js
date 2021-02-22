class Storage {
    static SaveObLocal(name_text,obj){
        if(name_text && obj){
            Storage.set(name_text, JSON.stringify(obj));
        }
    }
    static getData() {
        let dataLogo = document.querySelector('[data-logo]');

        if (dataLogo) {
            dataLogo.src = window.localStorage.getItem('serviceLogo');
        }

        let dataServiceName = document.querySelector('[data-service]');

        if (dataServiceName) {
            dataServiceName.innerText = window.localStorage.getItem('serviceName');
        }
    }

    static setServiceID(ID) {
        if (ID) {
            window.localStorage.setItem('serviceID', ID);
        }
    }

    static checkCommission() {
        let commission = Storage.get("commission2");

        if (commission) {
            return commission.data;
        }

        return false;
    }

    static setCommission() {
        let check = Storage.checkCommission();
        // if (check && check > 0) {
        //     let commission = document.querySelector('#payment .commission.hide');
        //
        //     if (commission) {
        //         commission.innerText = check + '%';
        //         commission.parentNode.classList.add('color', 'red');
        //         commission.classList.remove('hide');
        //     }
        // }
    }

    static getServiceID() {
        return parseInt(window.localStorage.getItem('serviceID'));
    }

    static getInputs() {
        let dataTypes = document.querySelectorAll('[data-type]');

        if (dataTypes && dataTypes.length) {
            let temp = Array(),
                length = dataTypes.length;

            for (let i = 0; i < length; i++) {
                let item = dataTypes[i];

                temp.push(item.innerText);
            }

            if (temp && temp.length) {
                window.localStorage.setItem('inputs', JSON.stringify(temp));
            }
        }

        return true;
    }

    static getAccount() {
        return JSON.parse(window.localStorage.getItem('inputs'))[0];
    }

    static setAccount() {
        let dataAccount = document.querySelector('[data-account]');

        if (dataAccount) {
            let json = null;

            try {
                json = JSON.parse(window.localStorage.getItem('inputs'));
            } catch (e) {
            }

            if (json) {
                dataAccount.innerText = json[0];
            }
        }
    }

    static setInfoCheckPage() {
        Ajax.post(Ajax.URL, {
            "cmd": "info",
            "rep": "none"
        }, {
            coin: true,
        }).then((result) => {
            if (result.income && result.commision >= 0 && result.amount) {
                let dataTransaction = document.querySelector('[data-transaction]');

                if (dataTransaction) {
                    dataTransaction.innerText = result.tid;
                }

                let dataAmount = document.querySelector('[data-amount]');

                if (dataAmount) {
                    dataAmount.innerText = Helper.format(result.income);
                }

                let dataCommission = document.querySelector('[data-commission]');

                if (dataCommission) {
                    dataCommission.innerText = Helper.format(result.commision);
                }

                let dataTotal = document.querySelector('[data-total]');

                if (dataTotal) {
                    dataTotal.innerText = Helper.format(result.amount);
                }

                let dataDate = document.querySelector('[data-date]');

                if (dataDate) {
                    dataDate.innerText = result.time;
                }

                let dataBIN = document.querySelector('[data-bin]');

                if (dataBIN) {
                    dataBIN.innerText = result.bin;
                }

                let dataTerminal = document.querySelector('[data-terminal]');

                if (dataTerminal) {
                    dataTerminal.innerText = result.terminal;
                }

                let dataAddress = document.querySelector('[data-address]');

                if (dataAddress) {
                    dataAddress.innerText = result.address;
                }
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    static setData() {
        let dataLogo = document.querySelector('[data-logo]');

        if (dataLogo && dataLogo.src) {
            window.localStorage.setItem('serviceLogo', dataLogo.src);
        }

        let dataServiceName = document.querySelector('[data-service]');

        if (dataServiceName && dataServiceName.innerText) {
            window.localStorage.setItem('serviceName', dataServiceName.innerText);
        }
    }

    static clearData() {
        Storage.clear([
            'amount',
            'commission',
            'commissionAmount',
            'inputs',
            'lastOperation',
            'serviceID',
            'serviceLogo',
            'serviceName',
            'total',
            'transaction',
        ]);

        return true;
    }

    static clear(list) {
        if (list instanceof Array) {
            for (let i in list) {
                let item = list[i];

                window.localStorage.removeItem(item);
            }
        }
    }
    static setArray(list){
        if(list instanceof Array){
            for(let i in list){
                window.localStorage.setItem(list[i][0],list[i][1]);
            }
        }
    }

    static set(key, value) {
        if (key && (value || value >= 0)) {
            window.localStorage.setItem(key.toString().trim(), value.toString().trim());

            return true;
        }

        return false;
    }

    static get(key) {
        key = window.localStorage.getItem(key);

        if (key) {
            key = key.toString() && key.toString().trim();
        }

        return key;
    }

    static delete(key) {
        if (key.toString().trim()) {
            window.localStorage.removeItem(key);
        }
    }
}
