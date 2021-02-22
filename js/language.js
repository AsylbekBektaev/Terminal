class Language {
    static init() {
        Language.readFiles();

        Language.checkLang();
        Language.setLanguage();
        Language.setEvent();
    }

    static getLang() {
        return window.localStorage.getItem('lang') || false;
    }

    static setLang(lang = 'qaz') {
        Language.currentLang = lang;

        return window.localStorage.setItem('lang', lang);
    }

    static checkLang() {
        let lang = Language.getLang();

        if (!lang) {
            Language.setLang();
        } else {
            switch (lang) {
                case 'eng':
                case 'rus':
                case 'qaz':
                    Language.currentLang = lang;

                    break;
            }
        }
    }

    static setLanguage(text1) {
        if(text1){
            Language.currentLang=text1;
        }
        let langs = document.querySelectorAll('[data-lang]');

        if (langs && langs.length) {
            let length = langs.length;

            for (let i = 0; i < length; i++) {
                let item = langs[i];

                let lang = item.dataset.lang;

                if (lang && Language.list[Language.currentLang] && lang in Language.list[Language.currentLang]) {
                    item.innerHTML = Language.list[Language.currentLang][lang];
                }
            }
        }
    }

    static setEvent() {
        let languages_2 = document.querySelector('.language_2');

        if (languages_2) {
            languages_2.addEventListener('click', (event) => {
                event.preventDefault();

                let target = event.target;

                target = target.closest('A');

                let lang = target.getAttribute('name');

                switch (lang) {
                    case 'eng':
                    case 'rus':
                    case 'qaz':
                        Language.currentLang = lang;

                        Language.setLang(lang);

                        document.cookie = "lang=" + lang + ";path=/";

                        Language.setLanguage();

                        break;
                }
            });
        }

        let languages = document.querySelector('.languages');

        if (languages) {
            languages.addEventListener('click', (event) => {
                event.preventDefault();

                let target = event.target;

                target = target.closest('A');

                let lang = target.getAttribute('name');

                switch (lang) {
                    case 'eng':
                    case 'rus':
                    case 'qaz':
                        Language.currentLang = lang;

                        Language.setLang(lang);

                        document.cookie = "lang=" + lang + ";path=/";

                        Language.setLanguage();

                        break;
                }
            });
        }
        return false;
    }

    static readFiles() {
        Language.list = {
            eng: ENG,
            rus: RUS,
            qaz: QAZ,
        };
    }

    static locale(key) {
        let lang = Language.getLang();

        if (key in Language.list[lang]) {
            return Language.list[lang][key];
        } else {
            return 'LOCALE';
        }
    }
}

Language.currentLang = 'qaz';
Language.list = {};
Language.init();