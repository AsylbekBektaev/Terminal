class Seting_info {
    static Terminal_seting() {
        window.location = '/pages/seting.php';
    }

    static URL_adres() {
        let referrer_url = document.referrer;

        if (referrer_url === 'http://indigo24.terminal/pages/auth.php' || referrer_url === 'http://indigo24.terminal:33080/pages/auth.php') {
            localStorage.removeItem('PUT');
            Storage.delete('PUT');
        }
        if (referrer_url === 'http://indigo24.terminal/pages/collectINFO.php' || referrer_url === 'http://indigo24.terminal:33080/pages/collectINFO.php'  ) {

            Storage.set('PUT', 'update');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Seting_info.URL_adres();
});
