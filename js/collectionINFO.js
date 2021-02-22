document.addEventListener('DOMContentLoaded', () => {
    CollectionINFO.collectINFO();
    CollectionINFO.Status_end_buttons();
    CollectionINFO.Terminal_models_name();
    CollectionINFO.StatusDrivers();
});

class CollectionINFO {

    static StatusDrivers(){
        var block=document.querySelector('.class_2_4'),
            kup=block.querySelector('.model_info_KUP_block .block_kup .block_kup_2 .statusColor'),
            print=block.querySelector('.model_info_print_block .block_print .statusColor2'),
            coin=block.querySelector('.model_info_print_block .block_print .statusColor3');
        kup.style.cssText='background-color:red;border:solid 1px red;';
        coin.style.cssText='background-color:red;border:solid 1px red;';
        print.style.cssText='background-color:red;border:solid 1px red;';
        Ajax.get('http://localhost:3018/device-status/', {}, {
            coin: true,
            timeOut: 3000,
        }).then((result) => {
            console.log(result);
            if(result){
                    if(result["cash"] === 1){
                        kup.style.cssText='background-color:green;border:solid 1px green;';
                    }else{
                        kup.style.cssText='background-color:red;border:solid 1px red;';
                    }
                    if(result["coin"] === 1){
                        coin.style.cssText='background-color:green;border:solid 1px green;';
                    }else{
                        coin.style.cssText='background-color:red;border:solid 1px red;';
                    }
                    if(result["printer"] === 1){
                        print.style.cssText='background-color:green;border:solid 1px green;';
                    }else{
                        print.style.cssText='background-color:red;border:solid 1px red;';
                    }
            }

        }).catch((error) => {
            console.error(error);
        });
    }
    static Status_end_buttons(){
        if(Storage.get('status')){
            const collection_button=document.querySelector('.class_16');
            const technical_button=document.querySelector('.button_seting');
            const rebooting_button=document.querySelector('.button_rebooting');
            const driver_rebooting=document.querySelector('.driver_rebooting');
            const driver_off=document.querySelector('.driver_off');
            const driver_on=document.querySelector('.driver_on');
            const reboot_computer=document.querySelector('.reboot_computer');
            const del_log=document.querySelector('.ter_log_delete');

            const block_coins=document.querySelector('.class_2');
            const block_notes=document.querySelector('.class_2_2');
            const block_term=document.querySelector('.class_2_4');

            switch(Storage.get('status')) {
                case 'administrator':
                    collection_button.style.display='block';
                    collection_button.style.opacity='1';

                    technical_button.style.display='block';
                    technical_button.style.opacity='1';

                    rebooting_button.style.top='0';
                    driver_rebooting.style.top='100px';
                    driver_off.style.top='200px';
                    driver_on.style.top='300px';
                    reboot_computer.style.top='400px';
                    del_log.style.top='500px';
                    break;
                case 'collector':
                    collection_button.style.display='block';
                    collection_button.style.opacity='1';


                    technical_button.style.display='none';
                    technical_button.style.opacity='0';


                    rebooting_button.style.top='0';
                    driver_rebooting.style.top='100px';
                    driver_off.style.top='200px';
                    driver_off.style.display='none';
                    driver_on.style.display='none';
                    driver_on.style.top='300px';
                    reboot_computer.style.top='200px';
                    del_log.style.top='300px';


                    break;
                case 'engineer':
                    collection_button.style.display='none';
                    collection_button.style.opacity='0';


                    technical_button.style.display='block';
                    technical_button.style.opacity='1';



                    rebooting_button.style.top='0';
                    driver_rebooting.style.top='100px';
                    driver_off.style.top='200px';
                    driver_on.style.top='300px';
                    reboot_computer.style.top='400px';
                    del_log.style.top='500px';

                    block_notes.style.display='none';
                    block_coins.style.display='none';
                    block_term.style.marginLeft="52%";
                    break;
                default:
                    collection_button.style.display='none';
                    collection_button.style.opacity='0';


                    technical_button.style.display='none';
                    technical_button.style.opacity='0';


                    rebooting_button.style.display='none';
                    driver_rebooting.style.display='none';


                    break;
            }
        }
    }
    static Terminal_models_name(){
        Ajax.get(Ajax.URL_4, {status:'update'}, {
            coin: true,
            timeOut: 4000,
        }).then((result) => {
            let kupmod=document.querySelector('[data-kupmod]'),
            kup_number=document.querySelector('[data-kupnumber]'),
            print=document.querySelector('[data-printmod]'),
            coin=document.querySelector('[data-coinmod]'),
            resol=document.querySelector('[data-resolmod]'),
            vpn=document.querySelector('[data-vpnmod]');

            if(result){
                kupmod.innerText=result.cash_driver.name;
                kup_number.innerText=result.cash_driver.capacity;
                print.innerText=result.printer;
                coin.innerText=result.coin_acceptor;
                resol.innerText=result.in_size;
                vpn.innerText=result.vpn_ip;
            }
        })
        .catch((error) => {
            LoadingPage.hide();
            console.error(error);
        });
    }
    static collectINFO() {

        Ajax.get(Ajax.URL_3, {})
            .then((result) => {
                    console.log(result );
                let coin_5 = document.querySelector('[data-5]');
                let coin_10 = document.querySelector('[data-10]');
                let coin_20 = document.querySelector('[data-20]');
                let coin_50 = document.querySelector('[data-50]');
                let coin_100 = document.querySelector('[data-100]');
                let coin_200 = document.querySelector('[data-200]');

                
                 coin_5.innerText = result['5'];
                 coin_10.innerText = result['10'];
                 coin_20.innerText = result['20'];
                 coin_50.innerText = result['50'];
                 coin_100.innerText = result['100'];
                 coin_200.innerText = result['200_m'];

                let coins_kol=document.querySelector('[data-coin-kol]');
                let coins_total=document.querySelector('[data-coin-total]');

                coins_kol.innerText= result['coins_pcs'];
                coins_total.innerText=result['coins_total'];

                let kup_200 = document.querySelector('[data-200-kup]');
                let kup_500 = document.querySelector('[data-500-kup]');
                let kup_1000 = document.querySelector('[data-1000-kup]');
                let kup_2000= document.querySelector('[data-2000-kup]');
                let kup_5000 = document.querySelector('[data-5000-kup]');
                let kup_10000 = document.querySelector('[data-10000-kup]');
                let kup_20000 = document.querySelector('[data-20000-kup]');

                 kup_200.innerText = result['200_k'];
                 kup_500.innerText = result['500'];
                 kup_1000.innerText = result['1000'];
                 kup_2000.innerText = result['2000'];
                 kup_5000.innerText = result['5000'];
                 kup_10000.innerText = result['10000'];
                 kup_20000.innerText = result['20000'];

                let kup_kol=document.querySelector('[data-kup-kol]');
                let kup_total=document.querySelector('[data-kup-total]');

                kup_kol.innerText=result['notes_pcs'];
                kup_total.innerText=result['notes_total'];

                 let total=document.querySelector('[data-money-total]');
                total.innerText=result['amount_total'];


            })
            .catch((error) => {
                LoadingPage.hide();
                console.error(error);
            });
    }
}
