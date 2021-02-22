document.addEventListener('DOMContentLoaded', () => {
setInterval(this.Lang,200);
});

function Lang(){
    var store=localStorage.getItem('lang');
    if(store) {
            Language.setLanguage(store);
    }else{
        Language.setLanguage('qaz');
    }

}