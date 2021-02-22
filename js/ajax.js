class Ajax {
    static get(URL, data) {
        return Ajax._send('GET', URL, data);
    }

    static post(URL, data, options) {
        return Ajax._send('POST', URL, data, options);
    }

    static _send(method, URL, data, options = {}) {
        return new Promise((resolve, reject) => {
            let x = new XMLHttpRequest();

            x.timeout = 120 * 1000;

            x.ontimeout = () => {
                reject('Error');
            };

            let temp = '';
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    if (temp) {
                        temp += '&';
                    }

                    temp += `${key}=${data[key]}`;
                }
            }

            if (method === 'GET') {
                URL += '?' + temp;

                temp = null;
            }

            x.open(method, URL, true);

            if (method === 'POST') {
                x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                if (options.coin) {
                    temp = JSON.stringify(data);
                } else {
                    x.setRequestHeader('Accept', 'application/json');
                }
            }

            if (options.timeOut) {
                x.timeout = options.timeOut;
            }

            x.send(temp);

            x.onreadystatechange = () => {
                if (x.readyState === 4 && x.status === 200) {
                    let json = null;
                    try {
                        json = JSON.parse(x.response);
                    } catch (e) {
                    }

                    if (json) {
                        resolve(json);
                    } else {
                        resolve({});
                    }
                }
            };
        });
    }
}

Ajax.URL_3='http://localhost:3018/info-collection/';
Ajax.URL_5='http://localhost:3018/message-collection/';
Ajax.URL_2='http://127.0.0.1:3018/config/init/?status=update';
Ajax.URL_4='http://127.0.0.1:3018/config/init/';
Ajax.URL = 'http://localhost:3018/session/message/'; // TODO check;
