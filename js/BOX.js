document.addEventListener('DOMContentLoaded', () => {
setInterval(BOX.StatusCheckBox, 1000);
});

class BOX {
    static StatusCheckBox(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3018/cashbox-status/", requestOptions)
            .then(response => response.text())
            .then(result => {
                result=JSON.parse(result);
                if(result["status"] === 'out'){
                    window.location='../pages/casete.php';
                }
            }).catch(error => console.log('error', error));
    }
}