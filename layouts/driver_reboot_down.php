<?php
if(isset($_GET['down']) && !empty($_GET['down'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/down.sh") ;
    echo json_encode('driver_reboot_ok');
}


if(isset($_GET['driver_off']) && !empty($_GET['driver_off'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/driver_off.sh") ;
    echo json_encode('driver_off_ok');
}


if(isset($_GET['driver_on']) && !empty($_GET['driver_on'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/up.sh") ;
    echo json_encode('driver_on_ok');
}



if(isset($_GET['reboot_computer']) && !empty($_GET['reboot_computer'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/reboot_computer.sh") ;
    echo json_encode('reboot_computer_ok');
}

if(isset($_GET['noCoin']) && !empty($_GET['noCoin'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/noCoinReboot.sh") ;
    echo json_encode('reboot_noCoin_ok');
}

if(isset($_GET['noCoinUP']) && !empty($_GET['noCoinUP'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/upNoCoin.sh") ;
    echo json_encode('noCoinUP_ok');
}

if(isset($_GET['noCoinNV10']) && !empty($_GET['noCoinNV10'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/NV10Nocoin.sh") ;
    echo json_encode('noCoinNV10_OK');
}

if(isset($_GET['CoinNV10']) && !empty($_GET['CoinNV10'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/COINNV10.sh") ;
    echo json_encode('CoinNV10_OK');
}
if(isset($_GET['rebNV10Coin']) && !empty($_GET['rebNV10Coin'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/coinRebootNV10.sh") ;
    echo json_encode('CoinNV10reboot_OK');
}
if(isset($_GET['rebNV10noCoin']) && !empty($_GET['rebNV10noCoin'])){
    exec("sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/nocoinRebootNV10.sh") ;
    echo json_encode('rebNV10noCoin_ok');
}

