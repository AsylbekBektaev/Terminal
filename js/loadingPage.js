class LoadingPage {
    static show() {
        let loading = LoadingPage.get();

        if (loading) {
            loading.classList.remove('hide');

            setTimeout(() => {
                LoadingPage.showTimeout = true;
            }, 1000);

            LoadingPage.hideTimeout = setTimeout(() => {
                LoadingPage.hide();
            }, 30 * 1000);
        }
    }

    static hide(func) {
        let loading = LoadingPage.get();

        if (loading) {
            if (LoadingPage.showTimeout) {
                loading.classList.add('hide');

                delete LoadingPage.showTimeout;

                clearTimeout(LoadingPage.hideTimeout);

                if (func) {
                    func();
                }
            } else {
                setTimeout(LoadingPage.hide, 1000, func);
            }
        }
    }

    static get() {
        let loading = document.querySelector('#loadingPage');

        if (loading) {
            return loading;
        } else {
            return false;
        }
    }
}
