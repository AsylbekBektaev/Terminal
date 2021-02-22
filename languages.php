<?php

function trimJSON($text) {
    $text = preg_replace('#\r|\n|\t#', '', $text);
    $text = preg_replace('#\s{2,}#', ' ', $text);
//    $text = preg_replace('#\s{2,}#', '', $text);
    $text = trim($text);

    return $text;
}

$eng = file_get_contents('eng.json', true);
$qaz = file_get_contents('qaz.json', true);
$rus = file_get_contents('rus.json', true);

$eng = trimJSON($eng);
$qaz = trimJSON($qaz);
$rus = trimJSON($rus);

if (isset($_SERVER['LOCAL_ENV'])) {
    echo <<<HTML
<script type="text/javascript">
    const LOCAL_ENV = 1;
</script>
HTML;

}

echo <<<HTML
<script type="text/javascript">
let ENG = {$eng};
let QAZ = {$qaz};
let RUS = {$rus};
</script>
HTML;

unset($eng, $qaz, $rus);