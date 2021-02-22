<?php

$lang = 'qaz';

if (isset($_COOKIE["lang"])) {
    $lang = $_COOKIE['lang'];
} else {
    setcookie('lang', 'qaz', 0, "/");
}

switch ($lang) {
    case 'qaz':
    case 'rus':
    case 'eng':
        $jsonFile = file_get_contents("{$lang}.json", true);

        break;
}

if ($jsonFile && strlen($jsonFile)) {
    $langArray = json_decode($jsonFile, true);

    unset($jsonFile, $lang);
}

function callback($buffer) {
    global $langArray;

    foreach ($langArray as $key => $value) {
        $buffer = str_replace(">{$key}<", ">{$value}<", $buffer);
    }

    return $buffer;
}

ob_start("callback");
