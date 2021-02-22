document.addEventListener('DOMContentLoaded', () => {
    Keyboard_a.init();
});

class Keyboard_a {
    static init(){
        Keyboard_a.longMouseDown();
        Keyboard_a.setInputEvent();
        Keyboard_a.clearAllInputs();
        Keyboard_a.KeyboardaddHide();
        Keyboard_a.closeKeyboardBody();


        Keyboard_a.clearText();
        Keyboard_a.Uptext();
        Keyboard_a.backdeleteText();
        Keyboard_a.symbolclickandSymbol_open();
        Keyboard_a.Space();
        Keyboard_a.Keyboardclick();
    }

    static setInputEvent() {
        let inputs = document.querySelectorAll('input');
        if (inputs) {
            inputs[0].addEventListener('click', (event) => {
                let target = event.target;
                if (target.id === inputs[0].id) {
                    let target = event.target;
                    inputs[1].setAttribute('data-focused', 0);
                    inputs[0].setAttribute('data-focused', 1);
                    if (target.getAttribute('data-focused') == 1) {
                        this.array[0] = target;
                        Keyboard_a.KeyboardremoveHide();
                    }
                }
            }, {passive: true, capture: false, once: false});

            inputs[1].addEventListener('click', (event) => {
                let target = event.target;
                if (target.id === inputs[1].id) {
                    let target = event.target;
                    inputs[0].setAttribute('data-focused', 0);
                    inputs[1].setAttribute('data-focused', 1);
                    if (target.getAttribute('data-focused') == 1) {
                        this.array[0] = target;
                        Keyboard_a.KeyboardremoveHide();
                    }
                }
            }, {passive: true, capture: false, once: false});
        }
    }

    static Uptext() {//ok
        let Uptext = document.querySelectorAll('.delete_2');
        for (let i = 0; i < Uptext.length; i++) {
            Uptext[i].addEventListener('click', () => {
                Uptext[i].classList.toggle('delete_3');
                let section = document.querySelector('#langs');
                if (section) {
                    section.classList.toggle('upperCase');
                }
            });
        }
    }

    static setInput(input, text) {//ok
        if (input && text) {
            let inputLength=input.value;
            if(inputLength.length >= 20){
                input.setAttribute('readonly',true);
            }else{
                input.value+=text;
            }
        }
    }

    static clearText() {//ok
        let cleartext = document.querySelectorAll('.keys_clear');
        for (let i = 0; i < cleartext.length; i++) {
            cleartext[i].addEventListener('click', () => {
                if (this.array[0] != undefined) {
                    this.array[0].value = '';
                }
            });
        }
    }

    static Space() {
        let Space = document.querySelectorAll('.keys_space');
        for (let i = 0; i < Space.length; i++) {
            Space[i].addEventListener('click', () => {
                if (this.array[0] != undefined) {
                    this.array[0].value += ' ';
                }
            });
        }
    }

    static backdeleteText() {//ok
        let backdelete = document.querySelectorAll('.delete');
        for (let i = 0; i < backdelete.length; i++) {
            backdelete[i].addEventListener('click', () => {
                if (this.array[0] != undefined) {
                    let text = this.array[0].value;
                    text = text.substr(0, text.length - 1);
                    this.array[0].value = text;
                }
            }, false);
        }
    }

    static Keyboardclick() {//ok
        let section = document.querySelector('#keyboard');
        section.addEventListener('click', (event) => {
            let target = event.target;
            let className = target.className;

            if (className.indexOf('keys') >= 0 && target.tagName === 'LI') {
                if (this.array[0].getAttribute('data-focused') == 1) {
                    Keyboard_a.setInput(this.array[0], target.innerText);
                }
            }
        }, false);
    }

    static closeKeyboardBody() {
        let section = document.querySelector('body');
        section.addEventListener('click', (event) => {
            let target = event.target;
            let className = target.className;
            if (className.indexOf('collection_auth_section') >= 0) {
                Keyboard_a.KeyboardaddHide();
            }
        });
    }

    static longMouseDown() {
        let langsElement = document.querySelector('#langs');
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
                                if (this.array[0].getAttribute('data-focused') == 1) {
                                    Keyboard_a.setInput(this.array[0], mas1[i][1]);
                                }
                                mas[0] = target.innerText;
                                target.textContent = mas1[i][1];
                                target.innerText = mas1[i][1];
                                target.id = 'keys_kz';
                            }
                            if (target.innerText === mas3[i][0]) {
                                if (this.array[0].getAttribute('data-focused') == 1) {
                                    Keyboard_a.setInput(this.array[0], mas3[i][1]);
                                }
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


    static symbolclickandSymbol_open() {
        let symbol = document.querySelectorAll('.symbol_keyboard');
        for (let i = 0; i < symbol.length; i++) {
            symbol[i].addEventListener('click', () => {
                Keyboard_a.test_kz_close();
                Keyboard_a.test_ru_close();
                Keyboard_a.test_en_close();
                Keyboard_a.test_symbol_open();
            });
        }
    }


    static KeyboardremoveHide() {
        let hide = document.querySelector('#keyboard');
        hide.classList.remove('hide');
        Keyboard_a.test_kz_open();
    }

    static KeyboardaddHide() {
        let hide = document.querySelector('#keyboard');
        hide.classList.add('hide');
    }


    static test_symbol_open() {
        Keyboard_a.close_langs();
        let symbol = document.querySelector('#Symbol');
        symbol.hidden = false;
    }

    static close_langs() {
        let kz = document.querySelector('#KZ');
        kz.hidden = true;
        let ru = document.querySelector('#RU');
        ru.hidden = true;
        let en = document.querySelector('#EN');
        en.hidden = true;
    }

    static test_symbol_close() {
        let symbol = document.querySelector('#Symbol');
        symbol.hidden = true;
    }

    static test_kz_open() {
        let ru = document.querySelector('#KZ');
        ru.hidden = false;
        Keyboard_a.test_symbol_close();
    }

    static test_kz_close() {
        let kz = document.querySelector('#KZ');
        kz.hidden = true;
        Keyboard_a.test_ru_open();
    }

    static test_ru_open() {
        let ru = document.querySelector('#RU');
        ru.hidden = false;
        Keyboard_a.test_symbol_close();
    }

    static test_ru_close() {
        let ru = document.querySelector('#RU');
        ru.hidden = true;
        Keyboard_a.test_en_open();
    }

    static test_en_open() {
        let en = document.querySelector('#EN');
        en.hidden = false;
        Keyboard_a.test_symbol_close();
    }

    static test_en_close() {
        let en = document.querySelector('#EN');
        en.hidden = true;
        Keyboard_a.test_kz_open();
    }


    static clearAllInputs() {
        let inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }
}

Keyboard_a.selectedInput = null;
Keyboard_a.array = [];