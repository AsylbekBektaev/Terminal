<?php

require_once 'layouts/head.php';
require_once 'helpers.php';

?>
<body class="sliders"><?php

$defaultSlider = env('DEFAULT_SLIDER', '<li data-time="10"><img src="/img/sliders/indigo24Terminal.jpg"></li>');
$fullPath = env('FULL_PATH', '/var/www/indigo24.terminal/img/sliders/sliders.config');
$path = env('PATH', '/var/www/Indigo24/indigo24.terminal/');

define('SERVER', $_SERVER['DOCUMENT_ROOT']);

$data = file_get_contents($fullPath);

$data = preg_replace('#\r|\n|\s{2,}#', '', $data);

preg_match_all('#<li.*?><img src=\"(.+?)\".*?><\/li>#', $data, $matches, PREG_SET_ORDER);

if (!$matches) {
    $data = $defaultSlider;
}

$temp = [];

foreach ($matches as $value) {
    if (!$value || !$value[0] || !$value[1]) {
        continue;
    }

    if (!file_exists($path . $value[1])) {
        continue;
    }

    $temp[] = $value[0];
}

if (!empty($temp)) {
    $temp = join('', $temp);

    echo <<<HTML
<ul>{$temp}</ul>
HTML;

}else {
    echo <<<HTML
<ul>{$defaultSlider}</ul>
HTML;

}

?>
<script src="/js/sliders.js"></script>
<script src="/js/language.js"></script>
</body>