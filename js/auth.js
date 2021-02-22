document.addEventListener('DOMContentLoaded', () => {
    if (typeof IPAddress === 'string') {
        let address = document.getElementById('VPNAddress');

        if (address) {
            let ip = address.querySelector('.IP');

            if (ip) {
                ip.innerText = IPAddress;
            }
        }
    }
});

let currentID = 0;
let inputs = ["uname", "psw"];
let type_of_keyboard_to_input = ["num", "eng"];

//result.data.terminalID = undefined;

async function checkAuth() {
    let user = document.querySelector('input[name=uname]').value;
    let password = document.querySelector('input[name=psw]').value;
    
    user = user.trim();

    if (!user.length || password.trim() === '') {
        MessageBox.setMesssage('Enter login or password');
        MessageBox.setState('error');
        MessageBox.show();

        return false;
    }

    if (typeof IPAddress === 'undefined') {
        MessageBox.setMesssage('VPN IP address not set');
        MessageBox.setState('error');
        MessageBox.show();

        return false;
    }

    let _token = "Q!42p#Rdb@O_5";

    let data = {
        login: user,
        password: password,
        _token: _token,
        IP: IPAddress,
    };

    Load.Anim2();
    Load.Show();
    Ajax.post(TERMINAL_INDIGO24_DOMAIN + 'api/v2/operator/terminal/auth', data).then((result) => {
        if (result.success && result.phone) {
                Load.Anim();


            if (result.phone && result.phone.length) {
                Storage.set('phone', result.phone);
            }

            var operatorID, terminalAddress,terminalID;

            if (result.data && result.data.operatorID && result.data.terminalAddress && result.data.terminalID) {
                operatorID = result.data.operatorID;
                terminalAddress = result.data.terminalAddress;
                terminalID = result.data.terminalID;
                Storage.set('terminalID',result.data.terminalID);
                Storage.set('terminalLogin', user);
            }


                if (operatorID && terminalAddress && terminalID) {
                     Load.noShow();
                     window.location = `/pages/authData.php?operatorID=${operatorID}&terminalAddress=${terminalAddress}&terminalLogin=${user}&terminalID=${terminalID}`;
                }

        } else {
            MessageBox.setState('error');
            MessageBox.setMesssage('Error ' + result.code);
            MessageBox.show();
            Load.noShow();
            Load.Anim2();
        }
    }).catch((error) => {
        Load.noShow();
        Load.Anim2();
        console.error(error);
    });
}

function setFocus(event) {
    let target = event.target;
    if(inputs.includes(target.id)) {
        let idInput = target.id;
        currentID = inputs.indexOf(idInput);
        document.getElementById(idInput).focus();
    }
}
