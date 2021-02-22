document.addEventListener('DOMContentLoaded', () => {
    Seting.select_kup_model();
    Seting.Restart();
});

class Seting {

    static exit() {
        if(Storage.get('PUT')){
            window.location='/';
        }
    }

    static Restart() {

        if (Storage.get('PUT')) {
            this.array_data_seting.length = 0;
            let exit_button=document.querySelector('.button_izm');
            if(exit_button){
                exit_button.style.display='block';
                exit_button.style.opacity='1';
                exit_button.disabled=false;
            }
        } else {
            let exit_button=document.querySelector('.button_izm');
            if(exit_button){
                exit_button.style.display='none';
                exit_button.style.opacity='0';
                exit_button.disabled=true;
            }
            this.array_data_seting.length = 0;
            let kup = document.getElementsByName('kup_model');
            for (let i = 0; i < kup.length; i++) {
                kup[i].checked = false;
            }
            let print = document.getElementsByName('print_model');
            for (let i = 0; i < print.length; i++) {
                print[i].checked = false;
            }
            let coins = document.getElementsByName('coins_model');
            for (let i = 0; i < coins.length; i++) {
                coins[i].checked = false;
            }
            let window = document.getElementsByName('window_model');
            for (let i = 0; i < window.length; i++) {
                window[i].checked = false;
            }
            let model_number = document.getElementsByName('model_number');
            for (let i = 0; i < model_number.length; i++) {
                model_number[i].checked = false;
                model_number[i].disabled = true;
                model_number[i].parentNode.style.backgroundColor = '#e9e9e9';
            }
        }
    }

    static select_kup_model() {
       if (Storage.get('PUT')) {
            let model_numbers = document.getElementsByName('model_number');
            for (let i = 0; i < model_numbers.length; i++) {
               
                    model_numbers[i].disabled = true;
                    model_numbers[i].hidden = true;
                    model_numbers[i].dataset.key = '0';
                
            }
            let clear_button=document.querySelector('.button_sbor');
            clear_button.style.opacity='0';
            clear_button.style.display='none';
            clear_button.disabled=true;
            
            



            Ajax.get(Ajax.URL_4, {status:'update'}, {
                coin: true,
                timeOut: 1000,
            }).then((result) => {
                if (result) {
			console.log(result);
                    let vpn_block=document.querySelector('.vpn_block');
                    vpn_block.innerText=result.vpn_ip;
                    let tt1 = result.cash_driver.name;
                    let tt2= result.cash_driver.capacity;
                    let kups_models = document.getElementsByName('kup_model');
                    for (let i = 0; i < kups_models.length; i++) {
                        if (tt1 === kups_models[i].value) {
                            let sp = kups_models[i].previousElementSibling;
                            var test1 = sp.innerText;
                            let parent=sp.parentNode;
                            let parent_2=parent.parentNode;
                            let next=parent_2.nextSibling;
                            let next_2=next.nextSibling;
                            let childs=next_2.children;
                            for(let i=0;i<childs.length;i++){
                                if(childs[i].innerText === tt2){
                                    var test2=childs[i].innerText;
                                }
                            }
                        }
                    }

                    let tt3=result.printer;
                    let printers=document.getElementsByName('print_model');
                    for(let i=0;i<printers.length;i++){
                        if(tt3  === printers[i].value){
                            let sp = printers[i].previousElementSibling;
                            var test3 = sp.innerText;
                        }
                    }

                        let tt4=result.coin_acceptor;
                        let coin_aceptor=document.getElementsByName('coins_model');
                        for(let i=0;i<coin_aceptor.length;i++){
                            if(tt4  === coin_aceptor[i].value){
                                let sp = coin_aceptor[i].previousElementSibling;
                                var test4 = sp.innerText;
                            }
                        }


                    let tt5=result.in_size;
                    let in_size=document.getElementsByName('window_model');
                    for(let i=0;i<in_size.length;i++){
                        if(tt5 === in_size[i].value){
                            let sp = in_size[i].previousElementSibling;
                            var test5=sp.innerText;
                        }
                    }

                    let p_text = document.querySelectorAll('p');

                    for (let i = 0; i < p_text.length; i++) {
                        if (p_text[i].innerText === test1) {
                            let next_1 = p_text[i].nextSibling;
                            let input = next_1.nextSibling;
                            input.checked = true;
                            let parent = input.parentNode;
                            let kup_block = parent.parentNode;
                            let kup_b = kup_block.parentNode;
                            let kup = kup_b.children;
                            for (let i = 0; i < kup.length; i++) {
                                if (kup_block.className === kup[i].className) {
                                    let text = kup[i].nextSibling;
                                    let blocks_number_model = text.nextSibling;
                                    let chil = blocks_number_model.children;
                                    for (let i = 0; i < chil.length; i++) {
                                        if (chil[i].innerText === test2) {
                                            chil[i].children[0].checked = true;
                                        }
                                    }

                                }
                            }
                        }
                        if (p_text[i].innerText === test3) {
                            let next_1 = p_text[i].nextSibling;
                            let input = next_1.nextSibling;
                            input.checked = true;
                        }
                        if (p_text[i].innerText === test4) {
                            let next_1 = p_text[i].nextSibling;
                            let input = next_1.nextSibling;
                            input.checked = true;
                        }
                        if (p_text[i].innerText === test5) {
                            let next_1 = p_text[i].nextSibling;
                            let input = next_1.nextSibling;
                            input.checked = true;
                        }
                    }
                    let model_num = document.getElementsByName('model_number');

                    for (let i = 0; i < model_num.length; i++) {
                        if (model_num[i].checked === true) {
                            model_num[i].dataset.key = '1';
                            let lab = model_num[i].parentNode;
                            lab.style.display = 'block';
                            lab.style.backgroundImage = 'url(\'/img/d1d1d1.png\')';
                            lab.style.backgroundSize = "100%";
                            lab.style.backgroundRepeat = "no-repeat";
                        }
                        if (model_num[i].dataset.key === '1') {
                            let parent = model_num[i].parentNode;
                            let blok = parent.parentNode;
                            let child = blok.children;
                            for (let i = 0; i < child.length; i++) {
                                child[i].children[0].disabled = false;
                            }
                        }
                    }
                    for (let i = 0; i < p_text.length; i++) {
                        if (p_text[i]) {
                            let next_1 = p_text[i].nextSibling;
                            let input = next_1.nextSibling;
                            if (input.checked === true) {
                                input.dataset.key = '1';
                                input.style.backgroundImage = 'url(\'/img/tick.png\')';
                                input.style.backgroundSize = "60%";
                                input.style.backgroundRepeat = "no-repeat";
                            }
                        }
                    }
                    let print = document.getElementsByName('print_model');
                    print.forEach(function (e) {
                        e.addEventListener("click", function () {
                            if (e.checked) {
                                if (e.type === 'radio') {
                                    let print_mod = document.getElementsByName('print_model');
                                    for (let i = 0; i < print_mod.length; i++) {
                                        if (print_mod[i].dataset.key === '1') {
                                            print_mod[i].checked = false;
                                            print_mod[i].style.backgroundImage = '';
                                            print_mod[i].dataset.key = '0';
                                        }
                                    }
                                }
                            }
                        });
                    });
                    let coins = document.getElementsByName('coins_model');
                    coins.forEach(function (e) {
                        e.addEventListener("click", function () {
                            if (e.checked) {
                                if (e.type === 'radio') {
                                    let coins_mod = document.getElementsByName('coins_model');
                                    for (let i = 0; i < coins_mod.length; i++) {
                                        if (coins_mod[i].dataset.key === '1') {
                                            coins_mod[i].checked = false;
                                            coins_mod[i].style.backgroundImage = '';
                                            coins_mod[i].dataset.key = '0';
                                        }
                                    }
                                }
                            }
                        });
                    });
                    let windows = document.getElementsByName('window_model');
                    windows.forEach(function (e) {
                        e.addEventListener("click", function () {
                            if (e.checked) {
                                if (e.type === 'radio') {
                                    let windows_mod = document.getElementsByName('window_model');
                                    for (let i = 0; i < windows_mod.length; i++) {
                                        if (windows_mod[i].dataset.key === '1') {
                                            windows_mod[i].checked = false;
                                            windows_mod[i].style.backgroundImage = '';
                                            windows_mod[i].dataset.key = '0';
                                        }
                                    }
                                }
                            }
                        });
                    });

                    let button_put = document.querySelector('.button_got');
                    button_put.addEventListener('click', () => {
                        let kup = document.getElementsByName('kup_model');
                        for (let i = 0; i < kup.length; i++) {
                            if (kup[i].dataset.key === '1') {
                                this.array_data_seting[0] = kup[i].value;
                            } else if (kup[i].dataset.key === '0' && kup[i].checked) {
                                this.array_data_seting[0] = kup[i].value;
                            }
                        }
                        let model_number = document.getElementsByName('model_number');
                        for (let i = 0; i < model_number.length; i++) {
                            if (model_number[i].dataset.key === '1') {
                                this.array_data_seting[1] = model_number[i].value;
                            } else if (model_number[i].dataset.key === '0' && model_number[i].checked) {
                                this.array_data_seting[1] = model_number[i].value;
                            }
                        }
                        let print = document.getElementsByName('print_model');
                        for (let i = 0; i < print.length; i++) {
                            if (print[i].dataset.key === '1') {
                                this.array_data_seting[2] = print[i].value;
                            } else if (print[i].dataset.key === '0' && print[i].checked) {
                                this.array_data_seting[2] = print[i].value;
                            }
                        }
                        let coins = document.getElementsByName('coins_model');
                        for (let i = 0; i < coins.length; i++) {
                            if (coins[i].dataset.key === '1') {
                                this.array_data_seting[3] = coins[i].value;
                            } else if (coins[i].dataset.key === '0' && coins[i].checked) {
                                this.array_data_seting[3] = coins[i].value;
                            }
                        }
                        let windows = document.getElementsByName('window_model');
                        for (let i = 0; i < windows.length; i++) {
                            if (windows[i].dataset.key === '1') {
                                this.array_data_seting[4] = windows[i].value;
                            } else if (windows[i].dataset.key === '0' && windows[i].checked) {
                                this.array_data_seting[4] = windows[i].value;
                            }
                        }
                            console.log('click по кнопке');
                         if ((this.array_data_seting[0] && this.array_data_seting[1] && this.array_data_seting[2] && this.array_data_seting[3] && this.array_data_seting[4]) !== undefined || null || "" || 0) {
                             console.log('выбраны все апараты');
                             let vpn=document.querySelector('.vpn_block').innerText;
                             var Kup2=this.array_data_seting[0].trim(),
                                 kupModel2=this.array_data_seting[1].trim(),
                                 printer2=this.array_data_seting[2].trim(),
                                 coin2=this.array_data_seting[3].trim(),
                                 sizes2=this.array_data_seting[4].trim();
                            var data = {
                                cash_driver: {
                                    name:Kup2,
                                    capacity:kupModel2
                                },
                                coin_acceptor:coin2,
                                printer:printer2,
                                in_size: sizes2,
                                vpn_ip:vpn,
                            };
                             let block_load=document.querySelector('.block_LoadingPage');
                             block_load.style.display='block';
                             console.log('подготовка к отправке данных к айдару');
                            Ajax.post(Ajax.URL_4 + '?status=update', data, {
                                coin: true,
                                timeOut: 1000,
                            }).then((result) => {

                                if(result.status === "success"){
                                    console.log('отправка данных айдару прошла успешно');

                                    var par= {
                                        terminalID: Storage.get('terminalID'),
                                        drivers:JSON.stringify(
                                            {
                                                "cash":`${Kup2} ${kupModel2}`,
                                                "coin":coin2,
                                                "printer":printer2,
                                                "screen":sizes2
                                            }),
                                        _token: '0a#c53SMI!w_@'
                                    };
                                    console.log('отправка данных айбеку подготовка');
                                    Ajax.post(TERMINAL_INDIGO24_DOMAIN + 'api/v2/terminal/drivers/update', par)
                                        .then((result) => {
                                        console.log(result);
                                        if(result.success === true){
                                            console.log('отправка данных айбеку прошла успешно');
                                            if(coin2 === 'none' && Kup2 === 'nv10'){
                                                Storage.delete('Log');
                                                console.log(' coin:none  kup:nv10');
                                                var data={
                                                    rebNV10noCoin:'rebNV10noCoin'
                                                };
                                                Storage.delete('CoinNV10');
                                                Storage.delete('NOco');
                                                Storage.set('noCoinNV10','noCoinNV10');

                                            }else if (coin2 !== 'none' && Kup2 === 'nv10'){
                                                Storage.delete('Log');
                                                console.log(' coin:!none  kup:nv10');
                                                var data={
                                                    rebNV10Coin:'rebNV10Coin'
                                                };
                                                Storage.delete('noCoinNV10');
                                                Storage.delete('NOco');
                                                Storage.set('CoinNV10','CoinNV10');
                                            }

                                            if(coin2 === 'none' && Kup2 !== 'nv10'){
                                                if(Kup2 === 'mfl' || Kup2 === 'mei'){
                                                    Storage.set('Log',Kup2);
                                                }else{
                                                    Storage.delete('Log');
                                                }
                                                console.log(' coin:none  kup:!nv10');
                                                var data={
                                                    noCoin:'noCoin'
                                                };
                                                Storage.delete('CoinNV10');
                                                Storage.delete('noCoinNV10');
                                                Storage.set('NOco','NOco');

                                            }
                                            if(coin2 !== 'none' && Kup2 !== 'nv10'){
                                                if(Kup2 === 'mfl' || Kup2 === 'mei'){
                                                    Storage.set('Log',Kup2);
                                                }else{
                                                    Storage.delete('Log');
                                                }
                                                console.log(' coin:!none  kup:!nv10');
                                                var data={
                                                    down:'down'
                                                };
                                                Storage.delete('NOco');
                                                Storage.delete('CoinNV10');
                                                Storage.delete('noCoinNV10');
                                            }
                                            console.log('перезагрузка драйвера');
                                            Ajax.get('/layouts/driver_reboot_down.php',data, {
                                                coin: true,
                                                timeOut: 4000,
                                            }).then((result) => {
                                                console.log(result);
                                                if (result === 'reboot_noCoin_ok'  || result ===  'driver_reboot_ok' || result === 'CoinNV10reboot_OK' || result === 'rebNV10noCoin_ok') {
                                                    Load.Anim();
                                                    console.log('перезагрузка драйвера успешно');

                                                    setTimeout(()=>{
                                                        window.location = '/pages/collectINFO.php';
                                                    },1000*3);
                                                }
                                            }).catch((error) => {
                                                console.error(error);
                                            });


                                        }
                                    }).catch((error) => {
                                        console.error(error);
                                    });
                                }
                            }).catch((error) => {
                                console.error(error);
                            });
                        }

                    });
                }

            }).catch((error) => {
                console.error(error);
            });
        }
        if(!Storage.get('PUT')){
            let vpn_block=document.querySelector('.vpn_block');
            let parent=vpn_block.parentNode;
            let name_block=parent.previousElementSibling;
            name_block.innerHTML='';
            vpn_block.style.display='none';
            let but=document.querySelector('.button_got');
            but.style.marginLeft="535px";
           
        }else if(Storage.get('PUT')){
            let margin_buttons=document.querySelector('.button_got');
            margin_buttons.style.margin="0 30px 0 290px";
            let vpn_block=document.querySelector('.vpn_block');
            let paren=vpn_block.parentNode;
            let sibil=paren.previousElementSibling;
            sibil.innerText='VPN';
            vpn_block.style.display='block';
        }


        let kup = document.getElementsByName('kup_model');
        kup.forEach(function (e) {
            e.addEventListener("click", function () {
                if (e.checked) {
                    if (e.type === 'radio') {
                        let model_numbers = document.getElementsByName('model_number');
                        let kup_mod = document.getElementsByName('kup_model');
                        for (let i = 0; i < kup_mod.length; i++) {
                            if (kup_mod[i].dataset.key === '1') {
                                kup_mod[i].checked = false;
                                kup_mod[i].style.backgroundImage = '';
                                kup_mod[i].dataset.key = '0';

                                let parent = kup_mod[i].parentNode;
                                let kup_block = parent.parentNode;
                                let text = kup_block.nextSibling;
                                let block_numbers_models = text.nextSibling;
                                let label = block_numbers_models.children;
                                for (let i = 0; i < label.length; i++) {
                                    label[i].style.backgroundImage = '';
                                    label[i].children[0].disabled = true;
                                    label[i].children[0].dataset.key = '0';
                                }
                            }
                        }
                        for (let i = 0; i < model_numbers.length; i++) {

                            if (model_numbers[i].dataset.key === '1') {

                                model_numbers[i].parentNode.dataset.key = '0';
                                model_numbers[i].parentNode.style.backgroundImage = '';
                            }
                            model_numbers[i].disabled = true;
                            model_numbers[i].checked = false;
                            model_numbers[i].parentNode.style.backgroundColor = '#e9e9e9';
                        }
                        let block_flex = e.parentNode;
                        let model_block = block_flex.parentNode;
                        let kup_models = model_block.parentNode;
                        let kup_model = kup_models.children;

                        for (let i = 0; i < kup_model.length; i++) {
                            if (model_block.className === kup_model[i].className) {
                                let text = kup_model[i].nextSibling;
                                let block_number = text.nextSibling;
                                let input_1 = block_number.children[0].children[0];
                                let input_2 = block_number.children[1].children[0];
                                let input_3 = block_number.children[2].children[0];
                                input_1.disabled = false;
                                input_2.disabled = false;
                                input_3.disabled = false;
                            }
                        }
                    }
                }
            });
        });

        let check = document.getElementsByName('model_number');
        for (let i = 0; i < check.length; i++) {
            check[i].addEventListener('change', (e) => {

                for (let i = 0; i < check.length; i++) {
                    check[i].dataset.key = '0';
                }
                let target = e.target;
                let parent = target.parentNode;
                let blocks = parent.parentNode;
                let blocks_child = blocks.children;
                if (!blocks_child[0].children[0].checked) {
                    blocks_child[0].style.backgroundImage = '';
                    blocks_child[0].style.backgroundColor = '#e9e9e9';
                }
                if (!blocks_child[1].children[0].checked) {
                    blocks_child[1].style.backgroundImage = '';
                    blocks_child[1].style.backgroundColor = '#e9e9e9';
                }
                if (!blocks_child[2].children[0].checked) {
                    blocks_child[2].style.backgroundImage = '';
                    blocks_child[2].style.backgroundColor = '#e9e9e9';
                }
                if (target.checked && target.type === 'radio') {
                    target.parentNode.style.backgroundColor = '#d1d1d1';
                }
            });
        }

    }

    static Ready_data() {
        if (!Storage.get('PUT')) {

        console.log('click button');
            let kup = document.getElementsByName('kup_model');
            for (let i = 0; i < kup.length; i++) {
                if (kup[i].checked) {
                    this.array_data_seting[0] = kup[i].value;
                }
            }
            let model_number = document.getElementsByName('model_number');
            for (let i = 0; i < model_number.length; i++) {
                if (model_number[i].checked) {
                    this.array_data_seting[1] = model_number[i].value;
                }
            }
            let print = document.getElementsByName('print_model');
            for (let i = 0; i < print.length; i++) {
                if (print[i].checked) {
                    this.array_data_seting[2] = print[i].value;
                }
            }
            let coins = document.getElementsByName('coins_model');
            for (let i = 0; i < coins.length; i++) {
                if (coins[i].checked) {
                    this.array_data_seting[3] = coins[i].value;
                }
            }
            let windows = document.getElementsByName('window_model');
            for (let i = 0; i < windows.length; i++) {
                if (windows[i].checked) {
                    this.array_data_seting[4] = windows[i].value;
                }
            }


        if ((this.array_data_seting[0] && this.array_data_seting[1] && this.array_data_seting[2] && this.array_data_seting[3] && this.array_data_seting[4]) !== undefined || null || "" || 0) {
            console.log('все апараты выбраны');
            var Kup=this.array_data_seting[0].trim(),
                kupModel=this.array_data_seting[1].trim(),
                printer=this.array_data_seting[2].trim(),
                coin=this.array_data_seting[3].trim(),
                sizes=this.array_data_seting[4].trim();
                var data = {
                    cash_driver: {name: Kup, capacity:kupModel},
                    coin_acceptor:coin,
                    printer:printer,
                    in_size: sizes,
                    vpn_ip:"none"
                }
            console.log('отправка данных апарата айдару');
                let block_load=document.querySelector('.block_LoadingPage');
                    block_load.style.display='block';
                Ajax.post(Ajax.URL_2, data, {
                    coin: true,
                    timeOut: 1000,
                }).then((result) => {
                    console.log(result);

                    if (result.status === 'success') {
                        console.log('статус удачно');
                        var par= {
                            terminalID:Storage.get('terminalID'),
                            drivers:JSON.stringify(
                                {
                                    "cash":`${Kup} ${kupModel}`,
                                    "coin":coin,
                                    "printer":printer,
                                    "screen":sizes
                                }),
                             _token:'0a#c53SMI!w_@'
                        }
                        console.log('отправка данных апарата айбеку');
                        Ajax.post(TERMINAL_INDIGO24_DOMAIN + 'api/v2/terminal/drivers/update', par)
                            .then((result) => {
                                console.log(result);
                                if(result.success === true){
                                    console.log('удачно айбеку отправлено');
                                    if(coin === 'none' && Kup === 'nv10'){
                                        Storage.delete('Log');
                                        console.log('coin:none  kup:nv10');
                                        var data={
                                            rebNV10noCoin:'rebNV10noCoin'
                                        };
                                        Storage.delete('CoinNV10');
                                        Storage.delete('NOco');
                                        Storage.set('noCoinNV10','noCoinNV10');

                                    }else if (coin !== 'none' && Kup === 'nv10'){
                                        Storage.delete('Log');
                                        console.log('coin:!none  kup:nv10');
                                        var data={
                                            rebNV10Coin:'rebNV10Coin'
                                        };
                                        Storage.delete('NOco');
                                        Storage.delete('noCoinNV10');
                                        Storage.set('CoinNV10','CoinNV10');
                                    }

                                    if(coin === 'none' && Kup !== 'nv10'){
                                        if(Kup === 'mfl' || Kup === 'mei'){
                                            Storage.set('Log',Kup);
                                        }else{
                                            Storage.delete('Log');
                                        }
                                        console.log('coin:none  kup:!nv10');
                                        var data={
                                            noCoin:'noCoin'
                                        };
                                        Storage.delete('CoinNV10');
                                        Storage.delete('noCoinNV10');
                                        Storage.set('NOco','NOco');
                                    }
                                    if(coin !== 'none' && Kup !== 'nv10'){
                                        if(Kup === 'mfl' || Kup === 'mei'){
                                            Storage.set('Log',Kup);
                                        }else{
                                            Storage.delete('Log');
                                        }
                                        console.log('coin:!none  kup:!nv10');
                                        var data={
                                            down:'down'
                                        };
                                        Storage.delete('NOco');
                                        Storage.delete('CoinNV10');
                                        Storage.delete('noCoinNV10');
                                    }


                                    Ajax.get('/layouts/driver_reboot_down.php',data, {
                                        coin: true,
                                        timeOut: 1000,
                                    }).then((result) => {
                                        console.log(result);
                                        if (result === 'reboot_noCoin_ok'  || result ===  'driver_reboot_ok' || result === 'rebNV10noCoin_ok' || result === 'CoinNV10reboot_OK') {
                                            Load.Anim();


                                            setTimeout(()=>{
                                                window.location = '/';
                                            },1000*3);
                                        }
                                    }).catch((error) => {
                                        console.error(error);
                                    });

                                }
                            }).catch((error) => {
                            console.error(error)
                            });

                        }
                }).catch((error) => {
                    console.error(error);
                });



        }
        }
    }
}

Seting.array_data_seting = [];
