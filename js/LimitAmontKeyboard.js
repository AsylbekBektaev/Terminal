document.addEventListener('DOMContentLoaded', () => {
    LimitAmontKeyboard.init();
});
class LimitAmontKeyboard {
    static init(){
        LimitAmontKeyboard.BlocksClick();
    LimitAmontKeyboard.EventClick();
    LimitAmontKeyboard.Nextpayment();
    LimitAmontKeyboard.ClearNumbInput();
    Storage.getData();
    LimitAmontKeyboard.ClickInfo();
    }
    static BlocksClick(){
        var SectionInfo=document.querySelector('.infoBlocks'),
            blockinfo=SectionInfo.querySelector('.Enter_Sum'),
            buttonBlockinfo=blockinfo.querySelector('.BUT_next'),
            Comblock=SectionInfo.querySelector('.CommissionInfo'),
            buttonCom=Comblock.querySelector('.BUT_com'),
            er=SectionInfo.querySelector('.ErLim'),
            serviceSum=JSON.parse(Storage.get('service')),
            sumMin=blockinfo.querySelector('.SumMin .sum1'),
            sumMax=blockinfo.querySelector('.SumMax .sum2');

        if(serviceSum){
            if(serviceSum["max"]  && sumMax){
                sumMax.innerHTML=serviceSum["max"] + '  тг';
            }
            if(serviceSum["min"] && sumMin){
                sumMin.innerHTML=serviceSum["min"] + '  тг';
            }
        }
        if(SectionInfo && blockinfo){
            SectionInfo.style.display='block';
            blockinfo.style.display='block';
            if(buttonBlockinfo && Comblock){
                buttonBlockinfo.addEventListener('click',()=>{
                    blockinfo.style.display='none';
                    Comblock.style.display='block';
                });
                if(buttonCom){
                    buttonCom.addEventListener('click',()=>{
                        Comblock.style.display='none';
                        SectionInfo.style.display='none';
                    });
                }
            }
            if(er){
                er.addEventListener('click',()=>{
                    er.style.display='none';
                    SectionInfo.style.display='none';
                });
            }
        }

        var text=document.querySelector('textarea'),
            mas2=JSON.parse(Storage.get('commission2'));

            for(let i=0;i<mas2.length;i++){
                if(mas2[i]["type"] === 'percent'){
                    text.value += ' от ' + mas2[i]["from"] + ' до ' + mas2[i]["to"] + ' = ' + mas2[i]["commission"] + ' % ' + "\n";
                }else{
                    text.value += ' от ' + mas2[i]["from"] + ' до ' + mas2[i]["to"] + ' = ' + mas2[i]["commission"] + ' тг ' + "\n";
                }
            }
    }
    static ClickInfo(){
        var info=document.querySelector('.infoBlock');
        if(info){
            info.addEventListener('click',()=>{
                var limsec=document.querySelector('.LimitSection .infoLim');


                if(limsec){
                    limsec.style.display='block';

                    setTimeout(()=>{
                        limsec.style.display='none';
                    }, 5000);
                }
            });
        }
    }
    static inputText(){
        var input=LimitAmontKeyboard.getInput(),
        text=document.querySelector('.textPlaceholder'),
            inputVal=input.value.length,
            infoBlock=document.querySelector('.infoBlock');
        if((input.value === '' || undefined || null) || (inputVal === 0)){
            text.style.display='block';
            infoBlock.style.display='block';
        }
    }
    static backRequestSum(){
        let input=document.querySelector('.numbInput');
        if(input.value !== '' || undefined || null){
            var sum=input.value.trim();
            if(Storage.get('service') && sum){
                var service=JSON.parse(Storage.get('service'));
                if(service){
                    var min=service["min"],
                        max=service["max"];
                        Storage.set('SumMin',service["min"]);
                        Storage.set('SumMax',service["max"]);
                    if(min && max && sum){
                        if(sum >= min && sum <= max){

                                console.log(Storage.get('inputs'));
                                var adr='/api/v2/payment/block';

                                Ajax.post(TERMINAL_INDIGO24_DOMAIN + adr,{
                                    account:Storage.get('account'),
                                    terminalLogin:Storage.get('terminalLogin'),
                                    amount:sum,
                                    tokenID:Storage.get('TOK')
                                }).then((result) => {
                                    console.log(result);
                                    if(result.message){
                                        if(result.message !== 'Ok'){
                                            MessageBox.setMesssage(result.message);
                                            MessageBox.setState('error');
                                            MessageBox.show();
                                        }
                                        if(result.success === true){
                                            var inp=input.value.trim();
                                            Storage.set('lim',inp);
                                            Storage.set('blockID',result.blockID);
                                            setTimeout(()=>{
                                                window.location='/pages/payment.php';
                                            },500);
                                        }
                                    }
                                }).catch((error) => {
                                    console.error(error);
                                });

                        }else if(sum > max){
                            LimitAmontKeyboard.blockError('erMax');
                        }else if(sum < min){
                            LimitAmontKeyboard.blockError('erMin');
                        }
                    }
                }
            }
        }
    }
    static blockError(text){
        var section=document.querySelector('.infoBlocks'),
            block=section.querySelector('.ErLim'),
            text1=block.querySelector('div .text1'),
            text2=block.querySelector('div .text2');
        if(text1 && text2){
            text1.style.display='none';
            text2.style.display='none';
        }
        if(text === 'erMax'){
            text2.style.display='none';
            text1.style.display='block';
            text1.innerHTML='erMax';
        }else if(text === 'erMin'){
            text2.style.display='block';
            text1.style.display='none';
            text2.innerHTML='erMin';
        }
        if(section && block){
            section.style.display='block';
            block.style.display='block';
        }
    }
    static Nextpayment(){
        let next=document.querySelector('.button.forward.fr');
        if(next){
            next.addEventListener('click',()=>{

                let input=document.querySelector('.numbInput');
                if(input.value !== '' || undefined || null){
                    LimitAmontKeyboard.backRequestSum();
                }
            });
        }
    }

    static getInput(){
        let input=document.querySelector('.numbInput');
        if(input){
            return input;
        }
        return false;
    }
    static ClearNumbInput(){
        var input=LimitAmontKeyboard.getInput();
        if(input){
            input.value = '';
        }
    }
    static BackDel(){
        var input=LimitAmontKeyboard.getInput();
        if(input && input.value){
            var text = input.value;
            text = text.substr(0, text.length - 1);
            input.value = text;
        }
    }
    static setInput(text){
        var input=LimitAmontKeyboard.getInput();
        if(input && text){
            input.value += text;
        }
    }

    static EventClick(){
        let elm=document.querySelector('.keyboardNumber ul');
        if(elm){
            elm.addEventListener('click',(event)=>{
                var target=event.target;

                if(target.className === 'key' && target.tagName === 'LI'){
                    var input=LimitAmontKeyboard.getInput(),
                        inputLength=input.value,
                        text=document.querySelector('.textPlaceholder'),
                        infoBlock=document.querySelector('.infoBlock'),
                        limsec=document.querySelector('.LimitSection .infoLim');

                    limsec.style.display='none';
                    text.style.display='none';
                    infoBlock.style.display='none';
                    if(inputLength.length >= 21){
                        input.setAttribute('readonly',true);
                    }else{
                        input.setAttribute('readonly',false);
                        LimitAmontKeyboard.setInput(target.innerText);
                    }
                }
                if(target.className === 'backClearNum' && target.tagName === 'LI' ){
                    LimitAmontKeyboard.BackDel();
                    LimitAmontKeyboard.inputText();
                }
                if(target.className === 'clearNum' && target.tagName === 'LI' ){
                    LimitAmontKeyboard.ClearNumbInput();
                    LimitAmontKeyboard.inputText();
                }

            });
        }
    }

}
