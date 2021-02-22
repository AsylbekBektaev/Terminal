<?php

$servicesStarted = false;
$services = [];

$categories = [
    'electronic_money.php',
    'games_apps.php',
    'internet_and_television.php',
    'mobile_communications.php',
    'online_stores.php',
    'other_services.php',
    'tickets.php',
    'transport.php',
    'utilities.php'
];

foreach ($categories as $category) {
    $handle = fopen("categories/" . $category, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {

            if(strpos($line, 'pagination') == true && $servicesStarted ) {
                break;
            }

            if($servicesStarted) {
                if(strpos($line, 'href="/services')) {
                    // service_src
                    $str = trim(substr($line,strpos($line, 'href="/services'), strlen($line) - 3));

                    $service_src = '/' . substr($str, strpos($str, 'services') + 9, strlen($str) - 19) . '/';
                }
                if(strpos($line, '/img/logosV2')) {
                    // service_logo
                    $str2 = trim($line);
                    $service_logo = substr($str2, strpos($str2, 'logosV2/'), strlen($str2) - 24);
                }
                if(strpos($line, 'caption')) {
                    // service_name
                    $service_name = trim(substr($line, strpos($line, 'caption') + 9, strlen(trim($line)) - 29));
                }
                if(strpos($line, 'synonym')) {
                    $str3 = trim(substr($line, strpos($line, 'synonym') + 32, strlen($line) - 61));

                    $service_synonym = $str3;

                    $service = [
                        "service_name" => $service_name,
                        "service_logo" => $service_logo,
                        "service_src"  => $service_src,
                        "service_synonym" => $service_synonym,
                    ];

                    $services[count($services)] = $service;
                }
            }

            if(strpos($line, 'body services') == true) {
                $servicesStarted = true;
            }
        }

        fclose($handle);
    } else {
        // error opening the file.
        echo "Error opening the file";
    }
}

file_put_contents('search/services.json', json_encode($services, JSON_FORCE_OBJECT | JSON_UNESCAPED_UNICODE));

echo "Successfully added services to search\n";