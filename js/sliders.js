document.addEventListener('DOMContentLoaded', () => {
    Sliders.init();

    let ul = document.querySelector('.sliders > ul');

    if (ul) {
        ul.addEventListener('click', (event) => {
            let target = event.target,
                tagName = target.tagName;

            if (tagName === 'IMG') {
                window.location = '/';
            }
        });
    }
});

class Sliders {
    static get() {
        let list = document.querySelectorAll('ul > li');

        if (!list || !list.length) {
            return false;
        }

        return list;
    }

    static count() {
        let list = Sliders.get();

        if (list && list.length) {
            return list.length;
        }

        return 0;
    }

    static init() {
        let list = Sliders.get();

        if (!list) {
            return false;
        }

        if (Sliders.count() === 1) {
            return false;
        }

        let time = list[Sliders.INDEX].dataset.time;

        setTimeout(Sliders.next, time * 1000);
    }

    static next() {
        Sliders.INDEX++;

        if (Sliders.INDEX >= Sliders.count()) {
            Sliders.INDEX = 0;
        }

        Sliders.show();
    }

    static hide() {
        let list = Sliders.get();

        if (!list) {
            return false;
        }

        let previous = Sliders.INDEX - 1;

        if (previous < 0) {
            previous = Sliders.count() - 1;
        }

        list[previous].classList.add('hide');

        Sliders.init();
    }

    static show() {
        let list = Sliders.get();

        if (!list) {
            return false;
        }

        list[Sliders.INDEX].removeAttribute('class');

        Sliders.hide();
    }
}

Sliders.MIN_TIME = 5;
Sliders.INDEX = 0;
