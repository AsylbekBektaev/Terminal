<?php

$operatorID = $terminalAddress = $terminalLogin = $terminalID =false;

if (isset($_GET['operatorID'])) {
    $operatorID = trim($_GET['operatorID']);
}

if (isset($_GET['terminalLogin'])) {
    $terminalLogin = trim($_GET['terminalLogin']);
}

if (isset($_GET['terminalAddress'])) {
    $terminalAddress = trim($_GET['terminalAddress']);
}

if(isset($_GET['terminalID'])){
    $terminalID = trim($_GET['terminalID']);
}

if ($operatorID && $terminalAddress && $terminalLogin && $terminalID) {

    $command = <<<COMMAND
curl -d '{"cmd":"registration","id":"{$terminalLogin}","bin":"{$operatorID}","address":"{$terminalAddress}","index":"{$terminalID}"}' -H "Content-Type: application/json" -X POST http://localhost:3018/terminal/info/
COMMAND;

    exec($command, $output, $returVar);

    if ($returVar == 0) {
        require_once '../helpers.php';
        env('login',$terminalLogin);
        header('Location: /pages/seting_info.php');
    } else {
        print_r(get_defined_vars());
    }
} else {
    echo "Error";
}
