document.addEventListener('DOMContentLoaded', () => {
    Storage.getData();

    Storage.setAccount();

    Storage.setInfoCheckPage();
    Check.closePages_check_php();

    Timeout.clear();
});

document.addEventListener('click', () => {
    Timeout.clear();
});

class Check{
static  closePages_check_php(){
     function Interval(){
         setInterval(()=>{
            Check.time++;
            if(Check.time === 25){
                Check.timer=10;
               let test= setInterval(()=>{
                    Check.time2--;
                    let count=document.querySelector('[data-counter]');
                   if(Check.time2 < 1){
                       Check.time2=10-1;
                       clearInterval(test);
                   }
                    count.innerText=Check.time2;

                },1000);

                let block=document.querySelector('#check');
                let check_button=document.querySelector('.check');
                check_button.style.display="none";
                block.style.display="none";

                let block_home=document.querySelector('.block_collection_buttons5');
                block_home.style.display="block";

                let block_yes=document.querySelector('.block_button_yes5');
                block_yes.addEventListener('click',()=>{
                    Storage.clearData();
                    window.location='/';
                });

                Check.times = setTimeout(() => {
                        Storage.clearData();
                        window.location = '/';
                }, 1000 * Check.timer);

                let block_no=document.querySelector('.block_button_no5');
                block_no.addEventListener('click',()=>{
                    block_home.style.display="none";
                    check_button.style.display="";
                    block.style.display="";
                    Check.time=0;
                    Check.time2=10;
                    Check.timer=10;
                    clearInterval();
                    clearInterval(Check.times);
                });
             }
         },1000);
     }
     function win_doc_click(doc_win,text){
        doc_win.addEventListener(text,()=>{
        let pre=document.querySelector('.preloader_block');

        if(window.getComputedStyle(pre).animationName === 'shadow'){
            pre.style.animationName='shadow2';
            pre.style.animationDuration='25s';
            pre.style.animationTimingFunction='linear';
            pre.style.animationIterationCount='infinite';


        }else if( window.getComputedStyle(pre).animationName ===  'shadow2'){
            pre.style.animationName='shadow';
            pre.style.animationDuration='25s';
            pre.style.animationTimingFunction='linear';
            pre.style.animationIterationCount='infinite';

        }
        let block_home=document.querySelector('.block_collection_buttons5');
        block_home.style.display="none";
            let block=document.querySelector('#check');
            let check_button=document.querySelector('.check');
            check_button.style.display="block";
            block.style.display="block";
        Check.time=0;
        Check.time2=10;
        Check.timer=10;
        clearInterval();
        clearInterval(Check.times);
        console.log(Check.time2);
            console.log(Check.time);
            console.log(Check.timer);
        });
    }
    let check=document.querySelector('#check');
     win_doc_click(check,'click');
     win_doc_click(check,'click');
     win_doc_click(check,'touchstart');
     win_doc_click(check,'touchstart');
     win_doc_click(check,'touchmove');
     win_doc_click(check,'touchmove');
     Interval(Check.time);

}
}
Check.time=0;
Check.time2=10;
Check.times=undefined;
Check.timer=undefined;
