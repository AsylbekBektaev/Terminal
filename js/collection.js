class Collection {
    static init() {
        this.setEvent();
        this.Inputs_values();
    }

    static setEvent() {
        this.eventFinish();
        this.button_collection();
    }

    static eventFinish() {
        let buttonBack = document.querySelector('.button.back');

        if (!buttonBack) {
            return false;
        }

        buttonBack.addEventListener('click', () => {
            buttonBack.classList.add('hide');

            Ajax.post(Ajax.URL, {
                "cmd": "end",
                "rep": "",
            }, {
                coin: true,
                timeOut: 2000,
            }).then((result) => {
                if(result){

                    var mas= [
                        'collection_id'
                    ];
                    Storage.clear(mas);
                }
            }).catch((error) => {
                console.error(error);
            });

            setTimeout(() => {
                window.location = '/';
            }, 1000);
        });
    }

    static back() {
        Storage.delete('collection_login');
        Storage.delete('status');
        Storage.delete('L_token');
        Storage.delete('PUT');
        window.location = '/';
    }

    static Inputs_values() {
        let button = document.querySelector('.collection_block_button');
        if (button) {
            button.addEventListener('click', () => {
                Load.Show();
                let blockShow=document.querySelector('.block_LoadingPage'),
                    blockShowIMG=document.querySelector('.block_LoadingPage .block_animation_Loading');
                blockShow.style.background='rgba(252, 252, 252, 0.9)';
                blockShowIMG.style.opacity='1';Load.Anim2();
                let inputs = document.querySelectorAll('input');
                let array_value_inputs = [];

                if (inputs[0]) {
                    array_value_inputs[0] = inputs[0].value;
                }
                if (inputs[1]) {
                    array_value_inputs[1] = inputs[1].value;
                }
                var login = array_value_inputs[0];
                var pas = array_value_inputs[1];
                if(!login.length || pas.trim() === ''){
                    MessageBox.setMesssage('Enter login or password');
                    MessageBox.setState('error');
                    MessageBox.show();
                    setTimeout(Load.noShow,1000);

                    return false;
                }
                if ((array_value_inputs[0]) && (array_value_inputs[1])) {
                    var adress = 'api/v2/collector/login';

                    Ajax.post(TERMINAL_INDIGO24_DOMAIN + adress, {
                        login: login,
                        password: pas
                    }).then((result) => {
                        if(result){
                            console.log(result);
                            console.log(result["sucess"]);
                            console.log(result["role"]);
                            console.log(result["token"]);

                            if(result["sucess"] === true){
                                Load.Anim();
                                console.log("sucess_OK");
                                if(result["role"] === 'administrator' || 'collector' || 'engineer') {
                                    console.log("role_OK");
                                    if (result["role"]) {
                                        Storage.set('status', result["role"]);
                                        Collection.status = true;
                                        console.log("Col.status_OK");

                                    }
                                    if (!Storage.get('L_token')) {
                                        Storage.set('L_token', result["token"]);
                                        Collection.token = true;
                                        console.log("Col.token_OK1");
                                    } else {

                                        if (result["L_token"] !== Storage.get('L_token')) {
                                            Storage.set('L_token', result["token"]);
                                            Collection.token = true;console.log("Col.token_OK2");

                                        }
                                    }

                                    if (Collection.status !== false) {
                                        console.log("Col.status_TRUE");
                                        if (Collection.token !== false) {
                                            console.log("Col.token_TRUE");
                                            if (Collection.status === true && Collection.token === true) {
                                                Storage.set('collection_login', login);
                                                window.location = '/pages/collectINFO.php';
                                            }
                                        }
                                    }


                                }
                            }else{
                                MessageBox.setState('error');
                                MessageBox.setMesssage('Error ' + result.code);
                                MessageBox.show();
                                setTimeout(Load.noShow,1000);
                                Load.Anim2();
                            }
                        }else {
                            MessageBox.setState('error');
                            MessageBox.setMesssage('Error ' + result.code);
                            MessageBox.show();
                            setTimeout(Load.noShow,1000);
                            Load.Anim2();
                        }
                    
                        }).catch((error) => {
                        LoadingPage.hide();
                        console.error(error);
                    });

                }
            });
        }
    }

    static button_collection() {
         let del_log=document.querySelector('.ter_log_delete');
        let block9=document.querySelector('.block_collection_buttons9');
        if(del_log){
            del_log.addEventListener('click',()=>{
                block9.style.display='block';
            });
        }
        let del_log_yes=document.querySelector('.block_button_yes9');

        if(del_log_yes){
            del_log_yes.addEventListener('click',()=>{
                let blockBorder=document.querySelector('.block_collection_buttons9 .block_button_yes_and_no'),
                    yes=document.querySelector('.block_button_yes9'),
                    no=document.querySelector('.block_button_no9'),
                    text=document.querySelector('.block_collection_buttons9 h1'),
                    header=document.querySelector('.fs0'),
                    sectionCuestion=document.querySelector('.block_collection_buttons9'),
                    img=document.querySelector('.block_collection_buttons9 img');
                    header.style.display='none';
                    sectionCuestion.top='0';
                    sectionCuestion.style.top='0';
                    sectionCuestion.style.height='100%';
                    img.style.top='41%';
                    blockBorder.style.display='none';
                    text.style.opacity='0';

                if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector'||Storage.get('status') === 'engineer'){
                    Storage.delete('terminalLogin');
                    if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector'||Storage.get('status') === 'engineer'){
                        window.location='/layouts/rebooting_collector.php';
                    }
                }
            });
        }
        let del_log_no=document.querySelector('.block_button_no9');
        if(del_log_no){
            del_log_no.addEventListener('click',()=>{
                block9.style.display = 'none';
            });
        }


        let button_reboot_computer=document.querySelector('.reboot_computer');

        let block8=document.querySelector('.block_collection_buttons8');
        if(button_reboot_computer){
            button_reboot_computer.addEventListener('click',()=>{
                block8.style.display='block';
            });
        }
        let button_reboot_computer_yes=document.querySelector('.block_button_yes8');

        if(button_reboot_computer_yes){
            button_reboot_computer_yes.addEventListener('click',()=>{
                if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector'||Storage.get('status') === 'engineer'){
                    Ajax.get('/layouts/driver_reboot_down.php',{reboot_computer:'reboot_computer'}, {
                        coin: true,
                        timeOut: 3000,
                    }).then((result) => {
                        console.log(result);
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            });
        }
        let button_reboot_computer_no=document.querySelector('.block_button_no8');
        if(button_reboot_computer_no){
            button_reboot_computer_no.addEventListener('click',()=>{
                block8.style.display = 'none';
            });
        }



        let button_driver_on=document.querySelector('.driver_on');

        let block7=document.querySelector('.block_collection_buttons7');
        if(button_driver_on){
            button_driver_on.addEventListener('click',()=>{
                block7.style.display='block';
            });
        }
        let button_driver_on_yes=document.querySelector('.block_button_yes7');

        if(button_driver_on_yes){
            button_driver_on_yes.addEventListener('click',()=>{

                if(Storage.get('status') === 'administrator'||Storage.get('status') === 'engineer'){

                    let block_load=document.querySelector('.block_LoadingPage');
                    block_load.style.display='block';
                    Load.Anim2();
                    if(Storage.get('noCoinNV10')){
                        var data={
                            noCoinNV10:'noCoinNV10'
                        };
                    }else if(Storage.get('CoinNV10')){
                        var data={
                            CoinNV10:'CoinNV10'
                        };
                    }else if(Storage.get('NOco')){
                        var data={
                            noCoinUP:'noCoinUP'
                        };
                    }else{
                        var data={
                            driver_on:'driver_on'
                        };
                    }
                    Ajax.get('/layouts/driver_reboot_down.php',data, {
                        coin: true,
                        timeOut: 3000,
                    }).then((result) => {
                        console.log(result);

                        if(result === 'driver_on_ok' || result === 'noCoinUP_ok' || result === 'CoinNV10_OK' || result === 'noCoinNV10_OK'){
                            Load.Anim();
                            setTimeout(()=>{
                                block7.style.display='none';
                            },2000);
                        }
                    }).catch((error) => {
                        console.error(error);
                    });

                }
            });
        }
        let button_driver_on_no=document.querySelector('.block_button_no7');
        if(button_driver_on_no){
            button_driver_on_no.addEventListener('click',()=>{
                block7.style.display = 'none';
            });
        }


        let button_driver_off=document.querySelector('.driver_off');

        let block6=document.querySelector('.block_collection_buttons6');
        if(button_driver_off){
            button_driver_off.addEventListener('click',()=>{
                block6.style.display='block';
            });
        }
        let button_driver_off_yes=document.querySelector('.block_button_yes6');

        if(button_driver_off_yes){
            button_driver_off_yes.addEventListener('click',()=>{
                if(Storage.get('status') === 'administrator'||Storage.get('status') === 'engineer'){
                    let block_load=document.querySelector('.block_LoadingPage');
                    block_load.style.display='block';
                    Load.Anim2();
                    Ajax.get('/layouts/driver_reboot_down.php',{driver_off:'driver_off'}, {
                        coin: true,
                        timeOut: 3000,
                    }).then((result) => {
                        console.log(result);

                        if(result === 'driver_off_ok'){
                            Load.Anim();
                            setTimeout(()=>{
                                block6.style.display='none';
                            },2000);
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            });
        }
        let button_driver_off_no=document.querySelector('.block_button_no6');
        if(button_driver_off_no){
            button_driver_off_no.addEventListener('click',()=>{
                block6.style.display = 'none';
            });
        }



        let button_driver_rebooting=document.querySelector('.driver_rebooting');
        let block_reboot_driver=document.querySelector('.block_collection_buttons4');
        if(button_driver_rebooting){
            button_driver_rebooting.addEventListener('click',()=>{
                block_reboot_driver.style.display='block';
            });
        }
        let button_driver_rebooting_yes=document.querySelector('.block_button_yes4');

        if(button_driver_rebooting_yes){
            button_driver_rebooting_yes.addEventListener('click',()=>{
                if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector' || Storage.get('status') === 'engineer'){

                    let block_load=document.querySelector('.block_LoadingPage');
                    block_load.style.display='block';

                    Load.Anim2();
                    if(Storage.get('noCoinNV10')){
                        var data={
                            rebNV10noCoin:'rebNV10noCoin'
                        };
                    }else if(Storage.get('CoinNV10')){
                        var data={
                            rebNV10Coin:'rebNV10Coin'
                        };
                    }else if(Storage.get('NOco')){
                        var data = {
                            noCoin:'noCoin'
                        };
                    }else{
                        var data = {
                            down:'down'
                        };
                    }
                    console.log(data);

                    Ajax.get('/layouts/driver_reboot_down.php',data, {
                        coin: true,
                        timeOut: 3000,
                    }).then((result) => {
                        console.log(result);
                        if( result ===  'reboot_noCoin_ok' || result ===  'driver_reboot_ok' || result === 'CoinNV10reboot_OK' || result === 'rebNV10noCoin_ok'){
                           console.log(result);
                            Load.Anim();
                            setTimeout(()=>{
                                block_reboot_driver.style.display='none';
                            },2000);

                        }
                    }).catch((error) => {
                        console.error(error);
                    });

                }
            });
        }


        let button_driver_rebooting_no=document.querySelector('.block_button_no4');
        if(button_driver_rebooting_no){
            button_driver_rebooting_no.addEventListener('click',()=>{
                block_reboot_driver.style.display = 'none';
            });
        }



        let button_rebooting=document.querySelector('.button_rebooting');

        let block3=document.querySelector('.block_collection_buttons3');
        if(button_rebooting){
            button_rebooting.addEventListener('click',()=>{
                block3.style.display='block';
            });
        }
        let button_rebooting_yes=document.querySelector('.block_button_yes3');
        
        if(button_rebooting_yes){
            button_rebooting_yes.addEventListener('click',()=>{
                let blockYESNO=document.querySelector('.block_collection_buttons3 .block_button_yes_and_no'),
                    text=document.querySelector('.block_collection_buttons3 h1'),
                    igs=document.querySelector('.block_collection_buttons3 img'),
                    sectionBlock=document.querySelector('.block_collection_buttons3');
                sectionBlock.style.top='0';
                sectionBlock.style.height='100%';
                igs.style.top='40%';
                blockYESNO.style.display='none';
                text.style.display='none';
                if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector' ||Storage.get('status') === 'engineer'){
                    setTimeout(()=>{
                        window.location='/layouts/rebooting_collector.php';
                    },500);
                }
            });
         }
         let button_rebooting_no=document.querySelector('.block_button_no3');
         if(button_rebooting_no){
            button_rebooting_no.addEventListener('click',()=>{
                    block3.style.display = 'none';
            });
         }

        let button_seting=document.querySelector('.button_seting');    
        let block2 = document.querySelector('.block_collection_buttons2');
        if (button_seting) {
            button_seting.addEventListener('click', () => {
                if(Storage.get('status') === 'administrator' ||Storage.get('status') === 'engineer'){
                    block2.style.display = 'block';
                }
            });
         }
         let button_seting_yes=document.querySelector('.block_button_yes2');
         if(button_seting_yes){
            button_seting_yes.addEventListener('click',()=>{
                if(Storage.get('status') === 'administrator' || Storage.get('status') === 'engineer'){
                    window.location='/pages/seting_info.php';
                 }
            });
         }                                                                                                    
         let button_seting_no=document.querySelector('.block_button_no2');
         if(button_seting_no){
            button_seting_no.addEventListener('click',()=>{
                    block2.style.display = 'none';
            });
         }
        let button = document.querySelector('.class_16');
        let block = document.querySelector('.block_collection_buttons');
        if (button) {
                button.addEventListener('click', () => {
                    if(Storage.get('status') === 'administrator' || Storage.get('status') === 'collector'){
                        block.style.display = 'block';
                    }
                });
        }
        
        let but_yes = document.querySelector('.block_button_yes');
        if (but_yes) {
            but_yes.addEventListener('click', () => {
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                if(Storage.get('Log')){
                    fetch("http://localhost:3018/cashbox-status/", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            result = JSON.parse(result);
                            if (result["status"] === 'out') {
                                window.location = '../pages/casete.php';
                            } else if (result["status"] === 'in') {
                                window.location = '../pages/BOX.php';
                            }
                        })
                        .catch(error => console.log('error', error));
                }else {
                    var data = {};
                    if (Storage.get('collection_login')) {
                        data = {
                            "cmd": "collection",
                            "rep": "",
                            "pin": '0000',
                            "login": Storage.get('collection_login'),
                            "lang":Storage.get('lang')
                        };
                    }

                    Ajax.post(Ajax.URL,data, {
                        coin: true,
                        timeOut: 4000,
                    }).then((result) => {
                        console.log(result);
                        if(result.cmd === 'report' && result.rep === 'ACK'){
                            window.location='../pages/check_collection.php';
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }, {once: true});
        }
        let but_no = document.querySelector('.block_button_no');
        if (but_no) {
            but_no.addEventListener('click', () => {
                block.style.display = 'none';
            });
        }

    }

    static collectionEnd() {
        Ajax.post(Ajax.URL, {
            "cmd": "end",
            "rep": "",
        }, {
            coin: true,
            timeOut: 2000,
        }).then((result) => {
            if(result){
               
                var mas= [
                    'collection_id'
                  ]; 
                Storage.clear(mas);
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
Collection.status=false;
Collection.token=false;
document.addEventListener('DOMContentLoaded', () => {
    Collection.init();
});
