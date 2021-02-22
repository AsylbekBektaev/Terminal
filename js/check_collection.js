document.addEventListener('DOMContentLoaded', () => {
    Check_collection.init();
    Check_collection.closePages_check_collection();
});

class Check_collection {
    static closePages_check_collection(){
        setInterval(()=>{
           Check_collection.count--;
           let count=document.querySelector('[data-count]');
           count.innerText=Check_collection.count;
        },1000);
     setTimeout(()=>{
        let section = document.querySelector('.section_check_collection');
        if (!section) {
            return false;
        }
        section.classList.add('hide');
        Check_collection.infoSendMail();
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
        window.location='/';
     },1000 * 15);
    }
    static init() {
        Check_collection.info_pages();
       
        let buttonBack = document.querySelector('.check_collection_end_button');

        if (!buttonBack) {
            return false;
        } 
            
        buttonBack.addEventListener('click', () => {
            let section = document.querySelector('.section_check_collection');

            if (!section) {
                return false;
            }
            section.classList.add('hide');
            buttonBack.classList.add('hide');

            Check_collection.infoSendMail();
            var text='c' , text2='ollection',
            text3=text.toUpperCase() + text2;
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
            }, 500);
        });
    }
    static info_pages(){
        Ajax.get(Ajax.URL_5,{}, {
            coin: true,
            timeOut: 2000,
        }).then((result) => {
            console.log(result);
 
            if(result){
                let _5 = document.querySelector('[data-5_2]'),
                _10 = document.querySelector('[data-10_2]'),
                _20 = document.querySelector('[data-20_2]'),
                _50 = document.querySelector('[data-50_2]'),
                _100 = document.querySelector('[data-100_2]'),
                coins_200 = document.querySelector('[data-200_2]'),
                 _coins_kol = document.querySelector('[data-coin-kol_2]'),
                 _coins_total = document.querySelector('[data-coin-total_2]');
    
            _5.innerText=result['collection_history']['total_collection']['5'];
            _10.innerText=result['collection_history']['total_collection']['10'];
            _20.innerText=result['collection_history']['total_collection']['20'];
            _50.innerText=result['collection_history']['total_collection']['50'];
            _100.innerText=result['collection_history']['total_collection']['100'];
            coins_200.innerText=result['collection_history']['total_collection']['200_m'];
    
            _coins_kol.innerText=result['collection_history']['total_collection']['coins_pcs'];
            _coins_total.innerText=result['collection_history']['total_collection']['coins_total'];
    
            
            let _200_kup = document.querySelector('[data-200-kup_2]'),
             _500_kup = document.querySelector('[data-500-kup_2]'),
             _1000_kup = document.querySelector('[data-1000-kup_2]'),
             _2000_kup = document.querySelector('[data-2000-kup_2]'),
             _5000_kup = document.querySelector('[data-5000-kup_2]'),
             _10000_kup = document.querySelector('[data-10000-kup_2]'),
             _20000_kup = document.querySelector('[data-20000-kup_2]'),
             _notes_kol = document.querySelector('[data-kup-kol_2]'),
             _notes_total = document.querySelector('[data-kup-total_2]');
    
            _200_kup.innerText=result['collection_history']['total_collection']['200_k'];
            _500_kup.innerText=result['collection_history']['total_collection']['500'];
            _1000_kup.innerText=result['collection_history']['total_collection']['1000'];
            _2000_kup.innerText=result['collection_history']['total_collection']['2000'];
            _5000_kup.innerText=result['collection_history']['total_collection']['5000'];
            _10000_kup.innerText=result['collection_history']['total_collection']['10000'];
            _20000_kup.innerText=result['collection_history']['total_collection']['20000'];
    
            _notes_kol.innerText=result['collection_history']['total_collection']['notes_pcs'];
            _notes_total.innerText=result['collection_history']['total_collection']['notes_total'];

             let login=document.querySelector('[data-login]');
                login.innerText=result['collection_history']['total_collection']['inkass_login'];


                if(result['collection_history']['total_collection']['last_inkass'] === '' || result['collection_history']['total_collection']['last_inkass'] === undefined || result['collection_history']['total_collection']['last_inkass'] === null) {
                    let time = document.querySelector('[data-time]');
                    time.innerText = '';
                }else{
                    let time = document.querySelector('[data-time]');
                    time.innerText = result['collection_history']['total_collection']['last_inkass'];
                }

            let date=document.querySelector('[data-date]');
            date.innerText=result['collection_history']['total_collection']['time'];
    
            let amount_total=document.querySelector('[data-money-total_2]');
             amount_total.innerText = result['collection_history']['total_collection']['amount_total'];
            
             let iin=document.querySelector('[data-iin]');
             iin.innerText = result['collection_history']['total_collection']['bin'];
            
            let terminal=document.querySelector('[data-terminal]');
             terminal.innerText = result['collection_history']['total_collection']['terminal'];
            
             let adress=document.querySelector('[data-adress]');
               adress.innerText = result['collection_history']['total_collection']['address'];
            
             let phone=document.querySelector('[data-phone]');
              phone.innerText = '+7 771 408 24 24';

             Storage.set('collection_id',result['collection_history']['collection_id']);
            }


        }).catch((error) => {
            console.error(error);
        });
      
           

    }

    static infoSendMail(){
        // var data={
        //     "token":Storage.get('token_login'),
        //     "id":Storage.get('id_login'),
        //     "terminalCollectionId":Storage.get('collection_id')
        // };
        //  Ajax.post(TERMINAL_INDIGO24_DOMAIN + 'api/v2/incassator/info/send',data, {
        //     coin: true,
        //     timeOut: 2000,
        // }).then((result) => {
        // }).catch((error) => {
        //     console.error(error);
        // });
    }
}
Check_collection.count=15;