document.addEventListener('DOMContentLoaded', () => {
    setInterval(Casete.StatusCheckBox, 1000);
});
class Casete{
    static StatusCheckBox(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3018/cashbox-status/", requestOptions)
            .then(response => response.text())
            .then(result => {
                result=JSON.parse(result);
                if(result["status"] === 'in'){
                    var data = {};
                    if (Storage.get('collection_login')) {
                        data = {
                            "cmd": "collection",
                            "rep": "",
                            "pin": '0000',
                            "login": Storage.get('collection_login'),
                            "lang":Storage.get('lang')
                        };
                    }

                    Ajax.post(Ajax.URL,data, {
                        coin: true,
                        timeOut: 4000,
                    }).then((result) => {
                        console.log(result);
                        if(result.cmd === 'report' && result.rep === 'ACK'){
                                window.location='../pages/check_collection.php';
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }).catch(error => console.log('error', error));
    }
}