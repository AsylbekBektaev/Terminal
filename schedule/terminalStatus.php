<?php
require_once '../helpers.php';
$login=null;
// request postgreSQL DB terminalID
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost:3018/terminal/info/',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_POSTFIELDS =>'{}
',
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
));
$response = curl_exec($curl);
curl_close($curl);
$Res=json_decode($response);

//end request terminalID

//Redis DB
//$redis = new Redis;
//$redis->connect('localhost', 6379);
//else if(!empty($redis->get('terminal:id'))) {
//    $login=$redis->get('terminal:id');
//}
//end redis

if(!empty($Res->data->terminal_id)) {
    $login = $Res->data->terminal_id;
}else if(env('login') !== false){
    if(env('login')){
        $login=env('login');
    }
}

$address = env('TERMINAL_DOMAIN_ADDRESS', 'https://terminal.indigo24.xyz/') . 'api/v2/status/update';

$curl = curl_init();
if(!empty($login)){
    $dt='{"login":'.$login.'}';
}else{
    $dt='{"login":""}';
}
curl_setopt_array($curl, array(
    CURLOPT_URL => $address,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>$dt,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

