<?php

$input = file_get_contents('php://input');

session_name('terminal');
session_start();

//unset($_SESSION['start']); # TODO clear cache;

$amount = 0;
$commission = 0;
$total = 0;

if (!isset($_SESSION['start'])) {
    $_SESSION['start'] = 0;
} else {
    $amount = $_SESSION['start'];
}

$amount += 10;

$_SESSION['start'] = $amount;

if ($input && strlen($input)) {
    try {
        $json = json_decode($input, true);
    } catch (Exception $e) {
    }

    if ($json) {
        $cmd = $json['cmd'];

        /*if ($cmd == 'info') {
            $amount = 2000;
        }*/

        if (isset($json['cprocent'])) {
            $commissionAmount = $json['cprocent'];

            if ($commissionAmount) {
                $_SESSION['cprocent'] = $commissionAmount;
            }
        }
    }
}

if (isset($_SESSION['cprocent'])) {
    $commissionAmount = $_SESSION['cprocent'];

    $commission = ceil(($amount * $commissionAmount) / 100);
    $total = $amount - $commission;
}

echo json_encode([
    'cmd' => "info",
    'limit' => 10000,
    'sum' => 0,
    'income' => $amount,
    'income_notes' => $amount,
    'income_coins' => 0,
    'notes' => [$amount],
    'coins' => [0],
    'last_note' => $amount,
    'last_coin' => 0,
    'rep' => 'none',
    'service' => 1,
    'account' => '77758245413',
    'state' => 'ok',
    'return_note' => '123',
    'commision' => (float)$commission,
    'amount' => $total,
    'tid' => substr(strtoupper(md5(time())), 0, 12),
]);
