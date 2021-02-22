document.addEventListener('DOMContentLoaded', () => {
    Storage.getData();

    Storage.setAccount();

    Payment.login_terminal();
    Payment.ClickINfoIMg();
    if (!Storage.get('lastOperation')) {
        Storage.set('lang_2',Storage.get('lang'));
        CashDriver.start();
    }

        CashDriver.interval = setInterval(() => {
            CashDriver.check();
        }, 1000);
    Payment.interval2 = setInterval(() => {
        Payment.Timer();
    }, Payment.TT);
});

class Payment {

    static Timer() {
        if(Storage.get('AMOUNTSUM') === Storage.get('AMOUNTSUM2') || Storage.get('AMOUNTSUM3') === Storage.get('AMOUNTSUM4')) {
            Payment.minute = 1000;
            Payment.second = 16;
        }else{
            Payment.minute = 0;
            Payment.second = 0;
        }
        if (Payment.minute > 0) {
            var minTimer=setTimeout(() => {
                var Section=document.querySelector('.timer_payment'),
                    block=Section.querySelector('.blockTimer'),
                    butNO=block.querySelector('.timer_no'),
                    butYES=block.querySelector('.timer_yes');
                if(butNO){
                    butNO.addEventListener('click',()=>{
                        Payment.minute=0;
                        Payment.second=0;
                        clearInterval(sectimer);
                        clearInterval(minTimer);
                        block.style.display='none';
                        Section.style.display='none';
                        if(Storage.get('income') >= Storage.get('SumMin') && Storage.get('income') <= Storage.get('SumMax')){
                            Payment.next('/');
                        }else if(Storage.get('AMOUNTSUM') || Storage.get('AMOUNTSUM2')){
                            if (CashDriver.interval) {
                                clearInterval(CashDriver.interval);

                                Ajax.post(Ajax.URL, {
                                    "cmd": "report",
                                    "rep": "ACK",
                                }, {
                                    coin: true,
                                    timeOut: 2000,
                                }).then((result) => {
                                }).catch((error) => {
                                    console.error(error);
                                });
                            }


                            let back = document.querySelector('.button.back');

                            if (back) {
                                back.classList.add('hide');
                                back.style.display = 'none';

                                CashDriver.end();
                                Payment.RequestSignalBack("back",'/','api/v2/payment/unblock');
                                Storage.clear([
                                    'TOK',
                                    'blockID',
                                    'commission2',
                                    'lim',
                                    'commission',
                                    'tokenID',
                                    'SumMin',
                                    'SumMax',
                                    'AMOUNTSUM',
                                    'AMOUNTSUM2',
                                    'AMOUNTSUM3',
                                    'AMOUNTSUM4',
                                    'TIMER',
                                    'income'
                                ]);
                                window.location='/';
                            }
                        }
                    });
                }
                if(butYES){
                    butYES.addEventListener('click',()=>{
                        Payment.minute=0;
                        Payment.second=0;
                        clearInterval(sectimer);
                        clearInterval(minTimer);
                        block.style.display='none';
                        Section.style.display='none';
                    });
                }

                if(block && Section){
                    block.style.display='block';
                    Section.style.display='block';

                    if(Payment.second > 15){
                        var text=block.querySelector('.timerAmount');
                        if(text){
                            var sectimer=setInterval(()=>{
                                --Payment.second;
                                if(Payment.second === 0){
                                    Payment.minute=0;
                                    Payment.second=0;
                                    clearInterval(sectimer);
                                    clearInterval(minTimer);
                                    block.style.display='none';
                                    Section.style.display='none';
                                    if(Storage.get('income') >= Storage.get('SumMin') && Storage.get('income') <= Storage.get('SumMax')){
                                        Payment.next('/');
                                    }else if(Storage.get('AMOUNTSUM') || Storage.get('AMOUNTSUM2')){
                                        if (CashDriver.interval) {
                                            clearInterval(CashDriver.interval);

                                            Ajax.post(Ajax.URL, {
                                                "cmd": "report",
                                                "rep": "ACK",
                                            }, {
                                                coin: true,
                                                timeOut: 2000,
                                            }).then((result) => {
                                            }).catch((error) => {
                                                console.error(error);
                                            });
                                        }


                                        let back = document.querySelector('.button.back');

                                        if (back) {
                                            back.classList.add('hide');
                                            back.style.display = 'none';

                                            CashDriver.end();
                                            Payment.RequestSignalBack("back",'/','api/v2/payment/unblock');
                                            Storage.clear([
                                                'TOK',
                                                'blockID',
                                                'commission2',
                                                'lim',
                                                'commission',
                                                'tokenID',
                                                'SumMin',
                                                'SumMax',
                                                'AMOUNTSUM',
                                                'AMOUNTSUM2',
                                                'AMOUNTSUM3',
                                                'AMOUNTSUM4',
                                                'TIMER',
                                                'income'
                                            ]);
                                            window.location='/';
                                        }
                                    }
                                }
                                if(Payment.second > -1 && Payment.second < 16){
                                    text.innerText = Payment.second;
                                }
                            },1000);
                        }
                    }
                }
            }, Payment.minute);
        }
    }

    static ClickINfoIMg(){
        let imgInfo=document.querySelector('.image_info_limit');
        imgInfo.addEventListener('click',()=>{
            let block=document.querySelector('.info_img_block');
            block.style.display='block';
            setTimeout(()=>{
                block.style.display='none';
            },5000);
        });
    }
    static login_terminal(){
        let login=Storage.get('terminalLogin');
        let info=document.querySelector('[data-info]');
        info.innerText=login;
    }
    static setAmount(value) {
        let payment = Payment.get();

        if (payment) {
            let amount = payment.querySelector('#amount');

            if (amount) {
                amount.innerText = Helper.format(value);

                Payment.hideInfo();
            }
        }
    }

    static setTotal(value) {
        let payment = Payment.get();

        if (payment) {
            let total = payment.querySelector('#total');

            if (total) {
                total.innerText = Helper.format(value);
            }
        }
    }

    static get() {
        let payment = document.getElementById('payment');

        if (payment) {
            return payment;
        } else {
            return false;
        }
    }

    static setNextButton() {
        let back = document.querySelector('.button.back'),
            forward = document.querySelector('.button.forward'),
            login_terminal_block=document.querySelector('.login_terminal_style');

        if (back && forward && login_terminal_block) {
            back.classList.add('hide');
            forward.classList.remove('hide');
            login_terminal_block.style.margin='240px 0 0 195px';
        }
    }

    static back() {
        if (CashDriver.interval) {
            clearInterval(CashDriver.interval);

            Ajax.post(Ajax.URL, {
                "cmd": "report",
                "rep": "ACK",
            }, {
                coin: true,
                timeOut: 2000,
            }).then((result) => {
            }).catch((error) => {
                console.error(error);
            });
        }


        let back = document.querySelector('.button.back');

        if (back) {
            back.classList.add('hide');
            back.style.display = 'none';

            CashDriver.end();
            Payment.RequestSignalBack("back",'/','api/v2/payment/unblock');
            Storage.clear([
                'TOK',
                'blockID',
                'commission2',
                'lim',
                'commission',
                'tokenID',
                'SumMin',
                'SumMax',
                'AMOUNTSUM',
                'AMOUNTSUM2',
                'AMOUNTSUM3',
                'AMOUNTSUM4',
                'TIMER',
                'income'
            ]);
        }
        return true;
    }
    static RequestSignalBack(status, path,url){
        if(Storage.get('TOK') !== '' && Storage.get('terminalLogin') !== ''){
            
            var adres=url,
                data={};
            if(status !== ''){
                data={
                    tokenID:Storage.get('TOK'),
                    terminalLogin:Storage.get('terminalLogin'),
                    blockID:Storage.get('blockID')
                };
            }
            
            
            Ajax.post(TERMINAL_INDIGO24_DOMAIN + adres, data)
            .then((result) => {
                setTimeout(() => {
                   window.location = path;
                }, 1000);
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    static next(url) {
        if (CashDriver.interval) {
            clearInterval(CashDriver.interval);
        }

        let forward = document.querySelector('.button.forward');

        if (forward) {

            forward.classList.add('hide');
            forward.style.display = 'none';

            CashDriver.end();
            setTimeout(() => {
                Storage.clear([
                    'TOK',
                    'blockID',
                    'commission2',
                    'lim',
                    'commission',
                    'tokenID',
                    'SumMin',
                    'SumMax',
                    'AMOUNTSUM',
                    'AMOUNTSUM2',
                    'AMOUNTSUM3',
                    'AMOUNTSUM4',
                    'TIMER',
                    'income'
                ]);
                if(url === '/'){
                    window.location = url;
                }else {
                    window.location = forward.dataset.href;
                }
                }, 1000);
        }
    }

    static hideInfo() {
        let payment = Payment.get();

        if (payment) {
            let info = payment.querySelector('.infoImage');

            if (info) {
                info.parentNode.classList.add('hide');
            }
        }
    }

    static updateAmount(amount) {
        Payment.setAmount(amount);
        if(amount > 0){
            var button = document.querySelector('.button.back');
            if(button){
                button.style.display='none';
            }
        }
        if(amount >= parseInt(Storage.get('SumMin')) && amount <= parseInt(Storage.get('SumMax'))) {
                Payment.setNextButton();
        }

        if (parseFloat(CashDriver.amount) !== parseFloat(amount)) {
            CashDriver.amount = amount;

            Payment.logging(amount);
        }
    }

    static updateCommission(amount) {
        Payment.setCommission(amount);
    }

    static updateTotal(amount) {
        Payment.setTotal(amount);
    }


    static setLimit(value) {
        let limit = document.getElementById('limit');

        if (limit) {
            limit.innerText = Helper.format(value);
        }
    }

    static setCommission(value) {
        let commission = document.getElementById('commission');

        if (commission && value) {
            value = Helper.format(value);

            commission.innerText = value;
        }
    }

    static logging(amount) {
        let inputs = Storage.get('inputs').replace(/\s+/g, '');

        let data = {
            serviceName: Storage.get('serviceName').trim(),
            amount,
            data: inputs,
        };

        // Ajax.post('/pages/logging.php', data).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.error(error);
        // });
    }
}
Payment.minute=0;
Payment.second=0;
Payment.TT=105000;
