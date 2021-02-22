<?php

$servername = '192.168.1.7';
$user = 'talgat';
$password = '@_5K#kVqr!51B';
$database = 'terminal';

$conn = new mysqli($servername, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_set_charset($conn, 'utf8');

$sql = <<<SQL
SELECT * FROM services;
SQL;

$result = mysqli_query($conn, $sql);

$temp = [];

if ($result) {
    while (($r = mysqli_fetch_assoc($result)) != false) {
        $temp[] = $r;
    }
}

$services = $temp;

unset($temp);

$sql = <<<SQL
SELECT * FROM service_masks;
SQL;

$result = mysqli_query($conn, $sql);

$temp = [];

if ($result) {
    while (($r = mysqli_fetch_assoc($result)) != false) {
        $temp[] = $r;
    }
}

$serviceMasks = $temp;

unset($temp);

define('SERVICES_FOLDER', 'services');
define('TEMP_FILE', '_service.php');

$data = file_get_contents(TEMP_FILE);

$temp = [];
foreach ($serviceMasks as $item) {
    $temp[$item['serviceID']] = $item['mask'];
}

$serviceMasks = $temp;

unset($temp);

foreach ($services as $service) {
    $serviceID = $service['id'];
    $logo = $service['logo'];

    $mask = null;

    if (isset($serviceMasks[$serviceID])) {
        $mask = $serviceMasks[$serviceID];
    }

    $folder = SERVICES_FOLDER . "/{$serviceID}";

    $indexFile = $folder . "/index.php";

    if (!file_exists($folder)) {
        mkdir($folder);
    }

    $temp = $data;

    $temp = str_replace('%SERVICE_NAME%', $service['title'], $temp);
    $temp = str_replace('%SERVICE_ID%', $serviceID, $temp);
    $temp = str_replace('%SERVICE_LOGO%', $logo, $temp);

    $inputWidth = null;

    if ($mask) {
        $temp = str_replace('#########################', $mask, $temp);

        $maskLength = strlen($mask);

        $temp = str_replace('%SERVICE_MASK_LENGTH%', $maskLength, $temp);

        $inputWidth = $maskLength * 29;
        $inputWidth .= 'px;';
    } else {
        $temp = str_replace('%SERVICE_MASK_LENGTH%', 25, $temp);
    }

    $confirmPath = $folder . '/confirm.php';

    if (file_exists($confirmPath)) {
        $temp = str_replace('"/pages/confirm.php"', '"confirm.php"', $temp);
    }

    $temp = str_replace('%INPUT_WIDTH%', $inputWidth, $temp);

    file_put_contents($indexFile, $temp);
}

echo "Success\n";
