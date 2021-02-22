document.addEventListener('DOMContentLoaded', () => {
   loginKeyboard.init();
});
class loginKeyboard{
    static init(){
        loginKeyboard.closeKeyboard();
        loginKeyboard.ClearTextInput();
        loginKeyboard.DeleteInput();
        loginKeyboard.BlockAuthclick();
        loginKeyboard.targetKeyboard();
        loginKeyboard.inputs();
        loginKeyboard.BackDel();
        loginKeyboard.clearTextInput();
        loginKeyboard.longMouseDown();
        loginKeyboard.Uptext();
        loginKeyboard.Space();
    }

    static Space() {
        let Space = document.querySelectorAll('.keys_space3');
        for (let i = 0; i < Space.length; i++) {
            Space[i].addEventListener('click', () => {
                if (loginKeyboard.input && loginKeyboard.input.value) {
                    loginKeyboard.input.value += ' ';
                }
            });
        }
    }
    static Uptext() {
        let Uptext = document.querySelectorAll('.delete_23');
        for (let i = 0; i < Uptext.length; i++) {
            Uptext[i].addEventListener('click', () => {
                 Uptext[i].classList.toggle('delete_23U');
                let section = document.querySelector('#langs3');
                if (section) {
                    section.classList.toggle('upperCase');
                }
            });
        }
    }
    static longMouseDown() {
        let langsElement = document.querySelector('#langs3');
        let mas = [];
        if (langsElement) {
            langsElement.addEventListener('touchstart', (event) => {
                let target = event.target;
                console.log(target);
                if (target.dataset.key && target.className === 'keys' && target.tagName === "LI") {
                    target.timeOut = setTimeout(() => {
                        let mas1 = [['к', 'қ'], ['н', 'ң'], ['г', 'ғ'], ['х', 'һ'], ['ұ', 'ү'], ['ы', 'і'], ['а', 'ә'], ['о', 'ө']];
                        let mas3 = [['К', 'Қ'], ['Н', 'Ң'], ['Г', 'Ғ'], ['Х', 'Һ'], ['Ұ', 'Ү'], ['Ы', 'І'], ['А', 'Ә'], ['О', 'Ө']];
                        for (let i in mas1) {
                            if (target.innerText === mas1[i][0]) {
                                loginKeyboard.addInput(mas1[i][1]);
                                mas[0] = target.innerText;
                                target.textContent = mas1[i][1];
                                target.innerText = mas1[i][1];
                                target.id = 'keys_kz';
                            }
                            if (target.innerText === mas3[i][0]) {
                                loginKeyboard.addInput(mas3[i][1]);
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
                console.log(target);
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

    static DeleteInput(){
        let del=document.querySelectorAll('#clear3');
        for(let i=0; i<del.length;i++){
         del[i].addEventListener('click',()=>{
          loginKeyboard.clearTextInput();
         });
        }
       }
    static clearTextInput(){
        if(loginKeyboard.input && loginKeyboard.input.value !== '' || undefined || null){
            var input=loginKeyboard.input;
            input.value='';
        }
      }
  static BackDel(){
    let backdel=document.querySelectorAll('.delete3');

    for(let i=0;i <backdel.length;i++){
      backdel[i].addEventListener('click',()=>{
       
        if(loginKeyboard.input && loginKeyboard.input.value !== '' || undefined || null){
            var input=loginKeyboard.input;
        }

        if(input && input.value){
          var text = input.value;
          console.log(text);
          text = text.substr(0, text.length - 1);
          console.log(text)
          input.value = text;
          console.log(input.value)
            // input.length = input.length - 1;
        }
      });
    }
  }
    static closeKeyboard(){
        let sectionKeyboard=document.querySelector('#keyboard3');
        sectionKeyboard.style.display='none';
        sectionKeyboard.classList.add('hide');
        sectionKeyboard.hidden=true;

        sectionKeyboard.style.opacity='0';
    }
    static showKeyboard(){
        let sectionKeyboard=document.querySelector('#keyboard3');
        sectionKeyboard.style.display='block';
        sectionKeyboard.classList.remove('hide');
        sectionKeyboard.hidden=false;

        sectionKeyboard.style.opacity='1';
        loginKeyboard.ShowLang();
    }
    static BlockAuthclick(){
        let block=document.querySelector('.container');
        block.addEventListener('click',function(event){
            let target=event.target;

            if(target.tagName !== 'INPUT' && target.name !== 'uname' || target.tagName !== 'INPUT' && target.name !== 'psw'){
                loginKeyboard.closeKeyboard();
            }
        });
        block.addEventListener('touchstart',function(event){
            let target=event.target;

            if(target.tagName !== 'INPUT' && target.name !== 'uname' || target.tagName !== 'INPUT' && target.name !== 'psw'){
                loginKeyboard.closeKeyboard();
            }
        });
    }
    static inputs(){
        let block=document.querySelector('.container');
            block.addEventListener('click',(event)=>{
                let target=event.target;
                if(target.name === 'psw' && target.tagName === 'INPUT' ){
                  
                   var par=target.parentNode,
                        prev=par.previousElementSibling,
                        input=prev.childNodes[3];
                        input.setAttribute('data-foc','');
                        input.style.backgroundColor='white';
                   
                   target.setAttribute('data-foc','1');
                   target.style.backgroundColor='yellow';
                   loginKeyboard.input=target;
                   loginKeyboard.showKeyboard();
                }
                if(target.name === 'uname' && target.tagName === 'INPUT' ){
                   
                    var par=target.parentNode,
                        next=par.nextElementSibling,
                        input=next.childNodes[3];
                        input.setAttribute('data-foc','');
                        input.style.backgroundColor='white';
                
                    target.setAttribute('data-foc','1');
                    target.style.backgroundColor='yellow';
                    loginKeyboard.input=target;
                    loginKeyboard.showKeyboard();
                }
            });
    }
    static ShowLang(){
        let langs=document.querySelector('#keyboard3 #langs3');
        langs.classList.remove('hide');
        langs.hidden=false;
        let kz=document.querySelector('#langs3 #KZ3');
        kz.classList.remove('hide');
        kz.hidden=false;
      }
      static ClearTextInput(){
          let inputs=document.querySelectorAll('input');
        
          for(let i=0; i<inputs.length;i++){
            inputs[i].value = '';
            inputs[i].required=false;
          }
      }
    static targetKeyboard(){
        let sectionKeyboard=document.querySelector('#keyboard3');
        sectionKeyboard.addEventListener('click',(event)=>{
            let target=event.target,
            className=target.className;
            
             if(className.indexOf('keyboard_close3') >= 0 && target.tagName === 'SPAN' && className === 'keyboard_close3'){
                loginKeyboard.closeKeyboard();
            }
            if(className.indexOf('keys') >= 0 && target.tagName === 'LI' && className === 'keys'){
                loginKeyboard.addInput(target.innerText);
            }
            if(target.dataset.set && target.dataset.set !== undefined){
                if(target.dataset.set === 'kz'){
                  loginKeyboard.closeAndopen('kz','ru');
                }
                if(target.dataset.set === 'ru'){
                  loginKeyboard.closeAndopen('ru','en');
                }
                if(target.dataset.set === 'en'){
                  loginKeyboard.closeAndopen('en','kz');
                }
                
                if(target.dataset.set === 'keySym'){
                  loginKeyboard.closeAndopen('vvv','sym');
                }
              }
        });
    }

    static closeAndopen(langclose,langopen){
        var KZ=document.querySelector('#KZ3'),
              RU=document.querySelector('#RU3'),
              EN=document.querySelector('#EN3'),
              SYM=document.querySelector('#Symbol3'),
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
        
        static addInput(text){
            if(loginKeyboard.input && loginKeyboard.input !== undefined || null && text && text !== undefined || null || ''){
                   loginKeyboard.input.value += text;
            }
        }
    
}
loginKeyboard.input=null;