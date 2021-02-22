<?php

require_once "loggingConfig.php";

function escape($data) {
    global $db;

    return mysqli_escape_string($db, $data);
}

$serviceName = $amount = $data = false;

if (isset($_POST['serviceName'])) {
    $serviceName = trim($_POST['serviceName']);
}

if (isset($_POST['amount'])) {
    $amount = trim($_POST['amount']);
}

if (isset($_POST['data'])) {
    $data = trim($_POST['data']);
}

if ($serviceName && $amount && $data) {
    $data = preg_replace('#\s+#', '', $data);

    $date = date('Y-m-d H:i:s');

    $db = new mysqli($servername, $username, $password, $dbname);

    if ($db->connect_error) {
        die("Error: {$db->connect_error}");
    }

    $serviceName = escape($serviceName);
    $amount = escape($amount);
    $data = escape($data);

    $sql = <<<SQL
INSERT INTO logging(serviceName, amount, data, date)
VALUE("{$serviceName}", "{$amount}", "{$data}", "{$date}");
SQL;

    $query = $db->query($sql);

    if (!$query) {
        die("Error: {$db->error}");
    }

    $db->close();
}
