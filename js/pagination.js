document.addEventListener('DOMContentLoaded', () => {
    Pagination.init();
});

class Pagination {
    static init() {
        Pagination.setEvent();

        if (Pagination.calcPages()) {
            Pagination.show();

            Pagination.addDots();
        }
    }

    static get() {
        let pagination = document.querySelector('#pagination');

        if (pagination) {
            return pagination;
        } else {
            return false;
        }
    }

    static setEvent() {
        let pagination = Pagination.get();

        if (pagination) {
            pagination.addEventListener('click', (event) => {
                let target = event.target;

                let className = target.className;

                if (className.indexOf('back') >= 0) {
                    Pagination.update(-1);
                }

                if (className.indexOf('next') >= 0) {
                    Pagination.update(1);
                }

                event.preventDefault();

                return false;
            });
        }
    }

    static update(index) {
        Pagination.selectedIndex += index;

        if (Pagination.selectedIndex >= Pagination.calcPages()) {
            Pagination.selectedIndex = Pagination.calcPages();
        }

        if (Pagination.selectedIndex < 0) {
            Pagination.selectedIndex = 0;
        }

        Pagination.updateButtonsDots();
    }

    static updateButtonsDots() {
        let pagination = Pagination.get(),
            back = pagination.querySelector('.back'),
            next = pagination.querySelector('.next');

        if (Pagination.selectedIndex) {
            if (back) {
                back.classList.remove('disable');
            }
        } else {
            if (back) {
                back.classList.add('disable');
            }
        }

        if (Pagination.calcPages() === Pagination.selectedIndex) {
            if (next) {
                next.classList.add('disable');
            }
        } else {
            if (next) {
                next.classList.remove('disable');
            }
        }

        let activeDot = pagination.querySelector('.dots li.active');

        if (activeDot) {
            activeDot.classList.remove('active');
        }

        let dots = pagination.querySelectorAll('.dots li');

        if (dots && dots.length && dots[Pagination.selectedIndex]) {
            dots[Pagination.selectedIndex].classList.add('active');
        }

        let category = document.querySelector('.category');

        if (category) {
            category.style.top = -(750 * Pagination.selectedIndex) + 'px';
        }
    }

    static getCount() {
        let li = document.querySelectorAll('.category li');

        if (li && li.length) {
            return li.length;
        }

        return 0;
    }

    static calcPages() {
        let count = Pagination.getCount();

        if (count) {
            return Math.ceil(count / Pagination.SERVICES_COUNT_TO_SHOW) - 1;
        }

        return 0;
    }

    static show() {
        let pagination = Pagination.get();

        if (pagination) {
            pagination.classList.remove('hide');

            return pagination;
        } else {
            return false;
        }
    }

    static addDots() {
        let pagination = Pagination.get();

        if (pagination) {
            let pages = Pagination.calcPages();

            let dots = pagination.querySelector('.dots');

            for (let i = 0; i < pages; i++) {
                let li = document.createElement('li');

                dots.append(li);
            }
        }
    }
}

Pagination.SERVICES_COUNT_TO_SHOW = 15;
Pagination.selectedIndex = 0;
