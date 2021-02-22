let phoneNumber = document.getElementById('phoneNumber');

if (phoneNumber) {
    let phone = window.localStorage.getItem('phone');

    if (phone && phone.length) {
        phoneNumber.innerText = phone.trim();
    }
}
