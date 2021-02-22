document.addEventListener('DOMContentLoaded', () => {
    if (window.hasOwnProperty('Storage')) {
        let login = Storage.get('terminalLogin');

        if (!login && window.location.pathname !== '/pages/auth.php') {
            window.location = '/pages/auth.php';
        }

        Storage.delete('data');
    }

    if (typeof CashDriver != "undefined") {
        CashDriver.checkLastOperation();
    }

    document.addEventListener('click', () => {
        Index.clear();
    });

    Index.setSlider()
});

class Index {
    static setSlider() {
        let TIME = 65;

        if (typeof LOCAL_ENV != "undefined") {
            TIME = 10;
        }

        Index.sliderTimeout = setTimeout(() => {
            window.location = '/pages/sliders.php';
        }, TIME * 1000);
    }

    static clear() {
        clearTimeout(Index.sliderTimeout);

        Index.setSlider();
    }
}

Index.sliderTimeout = 0;
