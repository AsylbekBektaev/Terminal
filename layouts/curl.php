<?php

require_once '../helpers.php';
 #define('TERMINAL_DOMAIN_ADDRESS', 'https://terminal.indigo24.xyz/');

$address = env('TERMINAL_DOMAIN_ADDRESS', 'https://terminal.indigo24.xyz/');

if (isset($_GET['address'])) {
    $address = $address . trim($_GET['address']);
}

$curl = curl_init($address);

$postData = http_build_query($_POST);

curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Content-Length: ' . strlen($postData),
    ],
]);

curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
