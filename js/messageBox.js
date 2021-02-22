document.addEventListener('DOMContentLoaded', () => {
    MessageBox.init();
});

class MessageBox {
    static init() {
        MessageBox.setEvent();
    }

    static setEvent() {
        let messageBox = MessageBox.get();

        if (messageBox) {
            let button = messageBox.querySelector('button.button');

            if (button) {
                button.onclick = () => {
                    MessageBox.hide();
                };
            }
        }
    }

    static setButtonText(text, f) {
        let messageBox = MessageBox.get();

        if (messageBox) {
            let button = messageBox.querySelector('button.button');

            if (button) {
                button.innerText = text.trim();

                if (f) {
                    button.onclick = f;
                }
            }
        }
    }

    static addButton(text, f) {
        let messageBox = MessageBox.get();

        if (messageBox) {
            let submit = messageBox.querySelector('button.button');

            if (submit) {
                let button = document.createElement('button');

                button.classList.add('button', 'cancel');
                button.innerText = text;

                submit.insertAdjacentElement('afterend', button);

                if (f) {
                    button.onclick = f;
                }
            }
        }
    }

    static show() {
        let messageBox = MessageBox.get();

        if (messageBox) {
            messageBox.classList.remove('hide');
        }
    }

    static hide() {
        let messageBox = MessageBox.get();

        if (messageBox) {
            messageBox.classList.add('hide');

            let image = messageBox.querySelector('.image');

            if (image) {
                image.className = 'image';
            }
        }
    }

    static get() {
        let messageBox = document.querySelector('#messageBox');

        if (messageBox) {
            return messageBox;
        }

        return false;
    }

    static setMesssage(text) {
        let messageBox = MessageBox.get();

        if (messageBox) {
            let message = messageBox.querySelector('.message');

            if (message) {
                message.innerHTML = text;
            }
        }
    }

    static setState(state) {
        let messageBox = MessageBox.get();

        if (messageBox) {
            let image = messageBox.querySelector('.image');

            if (image) {
                switch (state) {
                    case 'info':
                    case 'error':
                    case 'question':
                    case 'warning':
                        image.classList.add(state);

                        break;
                }
            }
        }
    }
}
