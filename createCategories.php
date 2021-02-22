<?php

define('TEMPLATE_FILE', 'categoryTemplate.php');
define('CATEGORY_FOLDER', 'categories');

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
SELECT * FROM services AS S LEFT JOIN synonym_services AS SS ON S.id = SS.service_id WHERE S.active = 1;
SQL;

$result = mysqli_query($conn, $sql);

$temp = [];

if ($result) {
    while (($r = mysqli_fetch_assoc($result)) != false) {
        $temp[] = $r;
    }
}

$services = $temp;

$kazakhstan_services_keys = ['Казахстан', 'Аксу', 'Атырау', 'Семей', 'Алматы', 'Павлодар', 'Актобе', 'Алгабас', 'Кокшетау', 'Астана', 'Алатау'];

foreach ($services as $key => $service) {
    foreach ($kazakhstan_services_keys as $keys) {
        if(strpos($service['title'], $keys) !== false) {
            unset($services[$key]);
            array_unshift($services, $service);
        }
    }
}

$sql = <<<SQL
SELECT * FROM categories;
SQL;

$result = mysqli_query($conn, $sql);

$temp = [];

if ($result) {
    while (($r = mysqli_fetch_assoc($result)) != false) {
        $temp[] = $r;
    }
}

$categories = $temp;

unset($temp);

$data = file_get_contents(TEMPLATE_FILE);

$terminalCategories = [
    'mobile_communications' => [1],
    'education' => [12],
    'electronic_money' => [8],
    'games_apps' => [3, 15],
    'indigo24' => [0],
    'internet_and_television' => [4, 7],
    'online_stores' => [13],
    'other_services' => [2, 6],
    'relief_funds' => [11],
    'tax_fines' => [14],
    'tickets' => [10],
    'transport' => [9],
    'utilities' => [5],
];

$list = [];

foreach ($services as $service) {
    $categoryID = $service['categoryID'];

    $list[$categoryID][] = $service;
}

/*foreach ($list as $key => $value) {
    $out = collectServices($value);

    if ($out) {
        foreach ($terminalCategories as $key2 => $value2) {
            if (in_array($key, $value2)) {
                $filename = CATEGORY_FOLDER . "/{$key2}.php";

                echo  $filename, "\n============\n";

                $temp = $data;

                $temp = str_replace('%LIST%', $out, $temp);
                $temp = str_replace('%CATEGORY%', $key2, $temp);

                file_put_contents($filename, $temp);

                break;
            }
        }
    }
}*/

foreach ($terminalCategories as $key => $value) {
    $out = [];

    if (count($value) >= 2) {
        foreach ($value as $id) {
            if (isset($list[$id])) {
                $out = array_merge($out, $list[$id]);
            }
        }
    } else {
        if (isset($list[$value[0]])) {
            $out = $list[$value[0]];
        }
    }

    $filename = CATEGORY_FOLDER . "/{$key}.php";

    echo "{$filename}\n";

    $html = collectServices($out);

    $temp = $data;

    $temp = str_replace('%LIST%', $html, $temp);
    $temp = str_replace('%CATEGORY%', $key, $temp);

    file_put_contents($filename, $temp);
}

echo "Success\n";

function collectServices($list) {
    $html = null;

    foreach ($list as $service) {
        $serviceID = $service['id'];
        $logo = $service['logo'];
        $title = $service['title'];
        $synonym = $service['synonym'];

        if ($synonym == null) {
            $synonym = $title;
        }

        $html .= <<<HTML
<li>
    <a class="service" href="/services/{$serviceID}/">
        <span class="logo">
            <img alt="" src="/img/logosV2/{$logo}">
        </span>

        <span class="caption">{$title}</span>
        <span class="synonym" style="display: none;">{$synonym}</span>
    </a>
</li>

HTML;

    }

    return $html;
}
