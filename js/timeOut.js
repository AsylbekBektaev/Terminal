class Timeout {
    static _setTimeout(func) {
        Timeout.timeOut = setTimeout(() => {
            if (func) {
                func();
            } else {
                window.location = '/';
            }
        }, Timeout.interval);
    }

    static clear(func) {
        if (Timeout.timeOut) {
            clearTimeout(Timeout.timeOut);

            Timeout._setTimeout(func);
        }
    }
}

Timeout.timeOut = 0;
Timeout.interval = 20 * 60 * 1000;
