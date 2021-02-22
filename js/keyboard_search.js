document.addEventListener('DOMContentLoaded', () => {
    Keyboards.init();
});

class Keyboards {
  static init(){
    Keyboards.noShow();
    Keyboards.ClickInputShow();
    Keyboards.CloseBlockKeyboard();
    Keyboards.TargetLangs();
    Keyboards.DeleteInput();
    Keyboards.BackDel();
    Keyboards.Probel();
    Keyboards.clearTextInput();
    Keyboards.longMouseDown();  
    Keyboards.Uptext();
  }
  static clearTextInput(){
    let input=Keyboards.IPUT();
    input.value='';
  }
  static IPUT(){
    let input=document.querySelector('#search_input');
    if(input){
        Keyboards.Input=input;
        return Keyboards.Input;
    }else{
      return false;
    }
  }
  static noShow(){
      var SectionKeyboard=document.querySelector('#keyboard2');
      SectionKeyboard.classList.add('hide');
      SectionKeyboard.hidden=true;
      SectionKeyboard.style.display='none';
      let sectionSearchItems=document.querySelector('#SearchItemsLiBlock');
      sectionSearchItems.style.display='none';
      sectionSearchItems.hidden=true;
      let back=document.querySelector('.seaBack'),
      next=document.querySelector('.seaNext');
      back.classList.add('hide');
      next.classList.add('hide');
  }
  static CloseBlockKeyboard(){
  let BlockKeyboardClose=document.querySelector('.keyboard_close');
  BlockKeyboardClose.addEventListener('click',()=>{
    Keyboards.noShow();
    Keyboards.backStyleShowBlock();
    searchPag.SearchLi=16;
    let next=document.querySelector('.seaNext');
    next.disabled=false;
    next.style.opacity='1';
      let next2=document.querySelector('.next_check');
      next2.disabled=false;
      next2.style.opacity='1';
      let back=document.querySelector('.back_check');
      back.disabled=true;
      back.style.opacity='0.5';

        let itemBlock=document.querySelector('#SearchItemsLiBlock');
        itemBlock.style.bottom='1.7%';
        itemBlock.style.right='-17%';
        itemBlock.style.backgroundColor='#eee';
        itemBlock.style.height='40px';

        setTimeout(()=>{
            let list=itemBlock.querySelectorAll('li');

            for(let i=0;i <list.length;i++){
                list[i].style.width='26px';
                list[i].style.height='26px';
            }
        },30);
  });
  }
  static yesShow(){
    var SectionKeyboard=document.querySelector('#keyboard2');
    SectionKeyboard.classList.remove('hide');
    SectionKeyboard.hidden=false;
    SectionKeyboard.style.display='block';
    Keyboards.ShowLang();
  }

  static ShowBlock(){
    let sectionKeyboard=document.querySelector('#keyboard2'),
    sectionServices=document.querySelector('.services_block'),
    pBlock=document.querySelector('.Search_pagination_items'),
    nextBlock=document.querySelector('.next_check img'),
    backBlock=document.querySelector('.back_check img');
    sectionKeyboard.style.marginTop="410px";
    sectionKeyboard.style.height="449px";
    sectionServices.style.height='21%';
    sectionServices.style.minHeight='329px';

    pBlock.style.width="95%";
    pBlock.style.float='none';
    pBlock.style.flexWrap='wrap';
    searchPag.CountService=8;
    Keyboards.lis='yes';
    let  pnLi=document.querySelectorAll('.Search_pagination_items li');
    nextBlock.style.top='11%';
    backBlock.style.top='11%';
    pBlock.style.bottom='42.5%';
    pBlock.style.right='1%';
    for(let i=0; i<pnLi.length;i++){
        pnLi[i].style.width='15px';
        pnLi[i].style.height='15px';
    }
  }
  static backStyleShowBlock(){
      let sectionKey=document.querySelector('#keyboard2');
      sectionKey.style.marginTop="410px";
      sectionKey.style.height="449px";

      let sectionServices=document.querySelector('.services_block');
         sectionServices.style.height='66%';
         sectionServices.style.minHeight='329px';
       let  pBlock=document.querySelector('.Search_pagination_items');
      let pnLi=document.querySelectorAll('.Search_pagination_items li');
         searchPag.CountService=16;
         searchPag.showLiPages();
      pBlock.style.bottom='10px';
      pBlock.style.right='72px';
      pBlock.style.width='71%';
      for(let i=0; i<pnLi.length;i++){
          pnLi[i].style.width='26px';
          pnLi[i].style.height='26px';
      }


   let nextBlock=document.querySelector('.next_check img'),
    backBlock=document.querySelector('.back_check img');
    nextBlock.style.top='40%';
    backBlock.style.top='40%';




  }

  static ShowLang(){
    let langs=document.querySelector('#keyboard2 #langs2');
    langs.classList.remove('hide');
    langs.hidden=false;
    let kz=document.querySelector('#langs2 #KZ2');
    kz.classList.remove('hide');
    kz.hidden=false;
  }
  static InputAdd(text,input){
    if(text && input){
      input.value += text;
    }
  }
  static DeleteInput(){
   let del=document.querySelectorAll('#clear2');
   for(let i=0; i<del.length;i++){
    del[i].addEventListener('click',()=>{
      let input=Keyboards.IPUT();
      input.value = '';
        if(input.value === ''){
            Keyboards.delSearchItemsPages();
        }
    });
   }
  }

  static Probel(){
    let Space = document.querySelectorAll('.keys_space2');
    for (let i = 0; i < Space.length; i++) {
        Space[i].addEventListener('click', () => {
            if (Keyboards.IPUT()) {
                Keyboards.IPUT().value += ' ';
            }
        });
    }
  }

  static longMouseDown() {
    let langsElement = document.querySelector('#langs2');
    let mas = [];
    if (langsElement) {
        langsElement.addEventListener('touchstart', (event) => {
            let target = event.target;
            if (target.dataset.key && target.className === 'keys' && target.tagName === "LI") {
                target.timeOut = setTimeout(() => {
                    let mas1 = [['к', 'қ'], ['н', 'ң'], ['г', 'ғ'], ['х', 'һ'], ['ұ', 'ү'], ['ы', 'і'], ['а', 'ә'], ['о', 'ө']];
                    let mas3 = [['К', 'Қ'], ['Н', 'Ң'], ['Г', 'Ғ'], ['Х', 'Һ'], ['Ұ', 'Ү'], ['Ы', 'І'], ['А', 'Ә'], ['О', 'Ө']];
                    for (let i in mas1) {
                        if (target.innerText === mas1[i][0]) {
                            // if (this.array[0].getAttribute('data-focused') == 1) {
                            //     Keyboard_a.setInput(this.array[0], mas1[i][1]);
                            // }
                            let input=Keyboards.IPUT();
                            Keyboards.InputAdd(mas1[i][1]);
                            mas[0] = target.innerText;
                            target.textContent = mas1[i][1];
                            target.innerText = mas1[i][1];
                            target.id = 'keys_kz';
                        }
                        if (target.innerText === mas3[i][0]) {
                            // if (this.array[0].getAttribute('data-focused') == 1) {
                            //     Keyboard_a.setInput(this.array[0], mas3[i][1]);
                            // }
                            let input=Keyboards.IPUT();
                            Keyboards.InputAdd(mas3[i][1]);
                            mas[0] = target.innerText;
                            target.textContent = mas1[i][1];
                            target.innerText = mas1[i][1];
                            target.id = 'keys_kz';
                        }
                    }
                }, 500);
            }
        });

        langsElement.addEventListener('touchend', (event) => {
            let target = event.target;
            if (target.timeOut) {
                clearTimeout(target.timeOut);
            }

            if (target.dataset.key && target.id === 'keys_kz' && target.tagName === "LI") {
                setTimeout(() => {
                    let mas2 = [['қ', 'к'], ['ң', 'н'], ['ғ', 'г'], ['һ', 'х'], ['ү', 'ұ'], ['і', 'ы'], ['ә', 'а'], ['ө', 'о']];
                    let mas4 = [['Қ', 'К'], ['Ң', 'Н'], ['Ғ', 'Г'], ['Һ', 'Х'], ['Ү', 'Ұ'], ['І', 'Ы'], ['Ә', 'А'], ['Ө', 'О']];
                    for (let k in mas2) {
                        if (target.innerText === mas2[k][0]) {
                            target.id = '';
                            target.innerText = mas2[k][1];
                            target.textContent = mas2[k][1];
                        }
                        if (target.innerText === mas4[k][0]) {
                            target.id = '';
                            target.innerText = mas2[k][1];
                            target.textContent = mas2[k][1];
                        }
                    }
                }, 200);
            }
        });
    }
}

static delSearchItemsPages(){
      let blockli=document.querySelector('#SearchItemsLiBlock');
      blockli.classList.add('hide');
      blockli.innerHTML='';
    let back=document.querySelector('.seaBack'),
        next=document.querySelector('.seaNext');
    back.classList.add('hide');
    next.classList.add('hide');

}


  static BackDel(){
    let backdel=document.querySelectorAll('.delete2');
    for(let i=0;i <backdel.length;i++){
      backdel[i].addEventListener('click',()=>{
       
        var input=Keyboards.IPUT();

        if(input && input.value){
          var text = input.value;
          text = text.substr(0, text.length - 1);
          input.value = text;
        }
        if(input.value === ''){
        Keyboards.delSearchItemsPages();
        }
      });
    }
  }
  static TargetLangs(){
    let langs=document.querySelector('#langs2');
    langs.addEventListener('click',(event)=>{
        let target=event.target,
        className=target.className;
          
        if(className.indexOf('keys') >= 0 && target.tagName === 'LI' && className === 'keys'){
       
         let input=Keyboards.IPUT();
      
          Keyboards.InputAdd(target.innerText,input);
        }
        if(target.dataset.set && target.dataset.set !== undefined){
          if(target.dataset.set === 'kz'){
            Keyboards.closeAndopen('kz','ru');
          }
          if(target.dataset.set === 'ru'){
            Keyboards.closeAndopen('ru','en');
          }
          if(target.dataset.set === 'en'){
            Keyboards.closeAndopen('en','kz');
          }
          
          if(target.dataset.set === 'keySym'){
            Keyboards.closeAndopen('vvv','sym');
          }
        }
    });
  }
  static closeAndopen(langclose,langopen){
  var KZ=document.querySelector('#KZ2'),
        RU=document.querySelector('#RU2'),
        EN=document.querySelector('#EN2'),
        SYM=document.querySelector('#Symbol2'),
        close,open,closed=[];
      if(langclose === 'kz' && langopen === 'ru'){
        close=KZ;
        open=RU;
      }
      if(langclose === 'ru' && langopen === 'en'){
        close=RU;
        open=EN;
      }
      if(langclose === 'en' && langopen === 'kz'){
        closed[0]=EN;
        closed[1]=SYM;
        open=KZ;
      }
      if(langclose === 'vvv' && langopen === 'sym'){
          closed[0]=KZ;
          closed[1]=RU;
          closed[2]=EN;

          open=SYM;
      }
      if(closed && closed.length && open){

        for(let i=0;i<closed.length;i++){
          closed[i].classList.add('hide');
          closed[i].style.display='none';
          closed[i].style.opacity='0';
        }
        open.classList.remove('hide');
        open.style.display='block';
        open.style.opacity='1';
      }

      if(close && open){
        close.classList.add('hide');
        close.style.display='none';
        close.style.opacity='0';

        open.classList.remove('hide');
        open.style.display='block';
        open.style.opacity='1';
      }
  }

  static ClickInputShow(){
    let inputSearch=document.querySelector('#search_input');
    inputSearch.addEventListener('click',()=>{
        let next=document.querySelector('.seaNext');
        next.disabled=false;
        next.style.opacity='1';
        let next2=document.querySelector('.next_check');
        next2.disabled=false;
        next2.style.opacity='1';
        let back=document.querySelector('.back_check');
        back.disabled=true;
        back.style.opacity='0.5';

        Keyboards.yesShow();
        Keyboards.ShowBlock();
        setTimeout( searchPag.show8LiPages);
        let blockItem=document.querySelector('#SearchItemsLiBlock');
        blockItem.style.bottom='44%';
        blockItem.style.height='30px';
        blockItem.style.right='1%';
        blockItem.style.backgroundColor='#eee';
        let list=document.querySelectorAll('#SearchItemsLiBlock li');
        searchPag.SearchLi=8;
        if(list){
            searchPag.SearchItemLI();
        }
        if(inputSearch.value !== '' ){
            searchPag.SearchLi=8;
        }
    });
  }

    static Uptext() {
        let Uptext = document.querySelectorAll('.delete_22');
        for (let i = 0; i < Uptext.length; i++) {
            Uptext[i].addEventListener('click', () => {
                Uptext[i].classList.toggle('delete_22U');
                let section = document.querySelector('#langs2');
                if (section) {
                    section.classList.toggle('upperCase');
                }
            });
        }
    }
}
Keyboards.Input=null;
Keyboards.lis=null;