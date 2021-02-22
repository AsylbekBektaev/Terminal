document.addEventListener('DOMContentLoaded', () => {
    Keyboards.init();
});

class Keyboards {
    static init() {
        let inputCount = Keyboards.getInputsCount();//длина введенных слов в инпуте

        let inputs = Keyboards.getInputs();//введенные слова  в инпуте

        if (inputCount === 1) {//если длина значени равен 1
            let type = Keyboards.getInputType(inputs[0]);

            Keyboards.showKeyboard(type);

            Keyboards.hideFooter();
        } else {//иначе
            let length = inputs.length;

            for (let i = 0; i < length; i++) {
                let input = inputs[i];

                input.addEventListener('click', (event) => {
                    Keyboards.inputFieldSelected = i;

                    Keyboards.showSelectedKeyboard();

                    event.preventDefault();

                    return false;
                });
            }

            Keyboards.hideFooter(false);
        }

        Keyboards.setEvent();
    }

    static hideFooter(hide = true) {
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            if (hide) {
                section.classList.add('footerHide');
            } else {
                section.classList.remove('footerHide');
            }
        }
    }

    static showSelectedKeyboard() {
        Keyboards.hideKeyboards();

        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            let target = inputs[Keyboards.inputFieldSelected];

            target.classList.add('active');

            Keyboards.changeInputsHiddenAttribute(true, target);

            let type = Keyboards.getInputType(target);

            Keyboards.showKeyboard(type);
        }
    }

    static changeInputsHiddenAttribute(hide = false, inputField = false) {//??
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            for (let i = 0; i < inputs.length; i++) {
                let input = inputs[i];

                if (input === inputField) {
                    continue;
                }

                input.parentNode.hidden = hide;
            }
        }
    }

    static setEvent() {//??
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            section.addEventListener('click', (event) => {
                Keyboards.writeInputField(event);

                event.preventDefault();

                return false;
            });
        }
    }

    static changeKeyboard(next = false) {//??
        if (next) {
            next = 1;
        } else {
            next = -1;
        }

        Keyboards.inputFieldSelected += next;

        let selected = Keyboards.inputFieldSelected;

        if (selected < 0) {
            Keyboards.hideKeyboards();

            Keyboards.inputFieldSelected = 0;

            return true;
        }

        if (selected >= Keyboards.getInputs().length) {
            Keyboards.hideKeyboards();

            Keyboards.inputFieldSelected = 0;

            return true;
        }

        Keyboards.showSelectedKeyboard();
    }

    static writeInputField(event) {//передали чтото
        let target = event.target;//отслежка событий

        let className = target.className;//класс нажатого тега

        if (className.indexOf('backSpace') >= 0) {
            Keyboards.backSpaceKey();

            return false;
        }

        if (className.indexOf('back') >= 0) {
            Keyboards.changeKeyboard();

            return false;
        }

        if (className.indexOf('next') >= 0) {
            Keyboards.changeKeyboard(true);

            return false;
        }

        if (className.indexOf('clearText') >= 0) {
            Keyboards.clearText();

            return false;
        }

        if (className.indexOf('shift') >= 0) {
            target.classList.toggle('active');

            Keyboards.shiftKey();

            return false;
        }

        if (className.indexOf('russianKeyboard') >= 0) {
            Keyboards.russianKeyboard();

            return false;
        }

        if (className.indexOf('englishKeyboard') >= 0) {
            Keyboards.englishKeyboard();

            return false;
        }

        if (className.indexOf('symbolsKeyboard') >= 0) {
            Keyboards.symbolsKeyboard();

            return false;
        }

        if (className.indexOf('closeKeyboard') >= 0) {
            Keyboards.hideKeyboards();

            return false;
        }

        if (className.indexOf('key') >= 0 && target.tagName === 'LI') {
            let text = target.innerText.trim();

            Keyboards.setInputFieldValue(text);//передает текст нажаты на инпут

            return false;
        }
    }

    //выборка секций по языкам
    static symbolsKeyboard() {//открывает символы
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            Keyboards.hideKeyboard('.keyboard.russian', true);
            Keyboards.hideKeyboard('.keyboard.english', true);
            Keyboards.hideKeyboard('.keyboard.symbols');
        }
    }

    static russianKeyboard() {//откр клаву русский
        Keyboards.hideKeyboard('.keyboard.russian');
        Keyboards.hideKeyboard('.keyboard.english', true);
        Keyboards.hideKeyboard('.keyboard.symbols', true);
    }

    static englishKeyboard() {//открывает клаву англиский
        Keyboards.hideKeyboard('.keyboard.russian', true);
        Keyboards.hideKeyboard('.keyboard.english');
        Keyboards.hideKeyboard('.keyboard.symbols', true);
    }

    static hideKeyboard(className, hide = false) {//скрывает клавиатуру которую нужно спрятать
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            let keyboard = section.querySelector(className);

            if (keyboard) {
                let parent = keyboard.parentNode;

                parent.hidden = hide;
            }
        }
    }

    static clearText() {// инпуттагы текстты толык кетиирип тастау
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            let inputField = inputs[Keyboards.inputFieldSelected];

            inputField.innerText = '';

            Keyboards.setMask(inputField);
        }
    }

    static backSpaceKey() {//инпуттагы создердин кетиру бир бирден
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            let inputField = inputs[Keyboards.inputFieldSelected];

            let text = inputField.innerText;

            text = text.substr(0, text.length - 1);

            inputField.innerText = text;
        }
    }

    static shiftKey() {//шрифт улкен и кишкентай кылады
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            let keyboards = section.querySelectorAll('.keyboard');

            if (keyboards && keyboards.length) {
                let length = keyboards.length;

                for (let i = 0; i < length; i++) {
                    let keyboard = keyboards[i];

                    keyboard.classList.toggle('upperCase');
                }
            }
        }
    }

    static setInputFieldValue(value) {//инпутка салады значенияны осы
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            let inputField = inputs[Keyboards.inputFieldSelected];

            let text = inputField.innerText;

            if (text.length < Keyboards.getLength(inputField)) {
                inputField.innerText += value;
            }

            Keyboards.setMask(inputField);
        }
    }

    static getLength(inputField) {//??
        if (inputField.dataset && inputField.dataset.length) {
            return inputField.dataset.length.trim();
        } else {
            return 50;
        }
    }

    static setMask(inputField) {//??
        let mask = Keyboards.checkInputMask(inputField);

        if (mask) {
            let text = inputField.innerText;
            let input = $(inputField);

            if (!text) {
                text = ' ';
            }

            input.mask(mask);

            inputField.innerText = input.masked(text);
        }
    }

    static getKeyboardsSection() {//возврашает секцию кеиборда
        let section = document.querySelector('#keyboards');

        if (section) {
            return section;
        }

        return false;
    }

    static getInputsCount() {//длина возврашаемого слово
        return Keyboards.getInputs().length;
    }

    static getInputs() {//возврашаемое слово
        let inputs = document.querySelectorAll('.input');

        if (inputs && inputs.length) {
            return inputs;
        } else {
            return [];
        }
    }

    static getInputType(inputField) {//??
        if (!inputField) {
            throw new Error('Input not set');
        }

        if (!inputField.dataset.type) {
            throw new Error('Input not has type');
        }

        return inputField.dataset.type;
    }

    static showKeyboard(type) {
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            section.classList.remove('hide');
        }

        switch (type) {
            case 'number':
                Keyboards.showDigitalKeyboard(section);
                break;

            case 'keyboard':
                Keyboards.showDefaultKeyboard(section);
                break;

            case 'email':
                Keyboards.showEnglishKeyboard(section);
                break;
        }
    }

    static hideKeyboards() {//  спрятать клавиатуру
        let section = Keyboards.getKeyboardsSection();

        if (section) {
            section.classList.add('hide');

            let list = section.querySelectorAll('li');

            if (list && list.length) {
                let length = list.length;

                for (let i = 0; i < length; i++) {
                    let li = list[i];

                    li.hidden = true;
                }
            }

            let service = document.querySelector('.body.service');

            if (service) {
                let inputs = document.querySelector('#keyboards .inputs');

                if (inputs) {
                    service.prepend(inputs);
                }

                Keyboards.changeInputsHiddenAttribute(false);

                Keyboards.clearActiveInputs();
            }
        }
    }

    static clearActiveInputs() {//??
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            for (let i = 0; i < inputs.length; i++) {
                let input = inputs[i];

                input.classList.remove('active');
            }
        }
    }

    static showDigitalKeyboard(section) {//открывает первый цифры в самом начале
        let digital = section.querySelector('.digital');

        if (digital) {
            digital.parentNode.hidden = false;

            Keyboards.initInputField();
        }
    }

    static showDefaultKeyboard(section){//открывает клавиатуру
        let keyboard = section.querySelector('.keyboard');

        if (keyboard) {
            keyboard.parentNode.hidden = false;

            Keyboards.initInputField();
        }
    }

    static showEnglishKeyboard(section) {//открывает клавиатуру на англиском
        let keyboard = section.querySelector('.keyboard.english');

        if (keyboard) {
            keyboard.parentNode.hidden = false;

            Keyboards.initInputField();
        }
    }

    static initInputField() {//??
        let inputs = Keyboards.getInputs();

        if (inputs && inputs.length) {
            let inputField = inputs[Keyboards.inputFieldSelected];

            inputField.classList.add('active');

            let mask = Keyboards.checkInputMask(inputField);

            if (mask) {
                Keyboards.setMask(inputField);
            }

            let parent = inputField.parentNode;

            while (parent && parent.tagName !== 'UL') {
                parent = parent.parentNode;
            }

            let section = Keyboards.getKeyboardsSection();

            section.prepend(parent);
        }
    }

    static checkInputMask(inputField) {//??
        let dataset = inputField.dataset;

        if (dataset && dataset.mask) {
            return dataset.mask;
        }

        return false;
    }
}

Keyboards.inputFieldSelected = 0;//??
