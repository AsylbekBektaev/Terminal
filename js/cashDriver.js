class CashDriver {
    static checkLastOperation() {
        if (window.location.pathname === '/' || window.location.pathname === '/index.php') {
            Ajax.post(Ajax.URL, {
                "cmd": "info",
                "rep": "",
            }, {
                coin: true,
                timeOut: 2000,
            }).then((result) => {
                if (result.cmd === 'report') {
                    Storage.delete('lastOperation');
                } else if (result.cmd === 'limit' && result.income) {
                    Storage.set('lastOperation', 1);

                    window.location = '/pages/payment.php';
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    static start(number = Number) {
        let account = Storage.getAccount();

        if (account && account.toString()) {
            account = account.toString().trim();
            account = account.replace(/\s+/g, '');
            account = account.replace('+', '');
        }

        CashDriver.amount = 0;
        var data={};
        if(Storage.get('commission2')){
                data = {
                    "account": account,
                    "cmd": "limit",
                    "cmin": 0,
                    "coins": [],
                    "cprocent": parseFloat(Storage.get('commission')) || 0,
                    "ctype": 0,
                    "income": 0,
                    "income_coins": 0,
                    "income_notes": 0,
                    "last_coin": 0,
                    "last_note": 0,
                    "limit": 0,
                    "notes": [],
                    "rep": "none",
                    "service": Storage.getServiceID(),
                    "sname": Storage.get('serviceName'),
                    "tid": "none",
                    "token": Storage.get('token'),
                    "oper_credit": 0,
                    "oper_limit": Storage.get('lim'),
                    "limit_sum": Storage.get('lim'),
                    "commission2": JSON.parse(Storage.get('commission2')),
                    "blockID":Storage.get('blockID')
                };
        }


        let datas = Storage.get('data');

        if (datas) {
            try {
                datas = JSON.parse(datas);

                if (datas.hasOwnProperty('limit')) {
                    if(Storage.get('lim')){
                        var lim=Storage.get('lim'),
                            num=Number.parseInt(lim),


                            matMin=Math.min(num,datas.limit);
                            data.oper_limit=matMin;

                            
                    }
                }
            } catch (e) {
            }
        }


        Ajax.post(Ajax.URL, data, {
            coin: true,
            timeOut: 2000,
        }).then((result) => {



            if (result.income && result.commision >= 0 && result.amount) {

                Payment.updateAmount(result.income);
                Payment.updateCommission(result.commision);
                Payment.updateTotal(result.amount);
            }

            if (result.return_note && result.return_note > 0) {
                MessageBox.setMesssage(Language.locale('your_daily_transaction_limit_is_exceeded_500000'));
                MessageBox.show();
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    static check() {
        Ajax.post(Ajax.URL, {
            "cmd": "info",
            "rep": "none",
        }, {
            coin: true,
            timeOut: 2000,
        }).then((result) => {
            console.log(result);
            if(result){
                    if(result.income){
                        Storage.set('income',result.income);
                    }
                if(result.amount){
                    Storage.delete('AMOUNTSUM');
                    Storage.delete('AMOUNTSUM2');
                    if(!Storage.get('AMOUNTSUM3')){
                    Storage.set('AMOUNTSUM3',result.amount);
                    }
                    console.log(result.amount);
                    console.log(Storage.get('AMOUNTSUM3'));
                    if(result.amount == Storage.get('AMOUNTSUM3')){
                        Storage.set('AMOUNTSUM4',result.amount);
                    }
                    if(result.amount != Storage.get('AMOUNTSUM3') || result.amount > Storage.get('AMOUNTSUM3') ){
                        Storage.set('AMOUNTSUM3',result.amount);
                    }
                }else if(!result.amount){
                    Storage.delete('AMOUNTSUM3');
                    Storage.delete('AMOUNTSUM4');
                    if(!Storage.get('AMOUNTSUM')){
                    Storage.set('AMOUNTSUM',0);
                    }
                    if(Storage.get('AMOUNTSUM')){
                        Storage.set('AMOUNTSUM2',0);
                    }
                }
                if(result.oper_credit > 0){
                    Payment.setLimit(result.oper_credit);
                }else {
                    if(result.oper_limit){
                        Payment.setLimit(result.oper_limit);
                    }else{
                        Payment.setLimit(result.limit);

                    }
                }
            }

            if(result.cmd === 'report'){

            }else if (result.income && result.commision >= 0 && result.amount) {

                Payment.updateAmount(result.income);
                Payment.updateCommission(result.commision);
                Payment.updateTotal(result.amount);
            }

        }).catch((error) => {
            console.error(error);
        });
    }

    static end() {
        Ajax.post(Ajax.URL, {
            "cmd": "report",
            "rep": "none"
        }, {
            coin: true,
            timeOut: 1000,
        }).then((result) => {
            console.log(result);
            if (result.income && result.commision >= 0 && result.amount) {
                Payment.updateAmount(result.income);
                Payment.updateCommission(result.commision);
                Payment.updateTotal(result.amount);
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

CashDriver.amount = 0;
