<?php

require_once 'components/bufferLanguage.php';

?><!doctype html>
<html lang="qz">
<head>
    <link href="/css/main.css?a=<?php echo time(); ?>" rel="stylesheet" type="text/css">
    <meta charset="utf-8">
    <title>Indigo24Terminal</title><?php

    require_once 'languages.php';

    if (isset($_LINKS) && is_array($_LINKS)) {
        foreach ($_LINKS as $line) {
            echo $line, "\n";
        }
    }

    $uname = php_uname();



    if (getenv('LOCAL_ENV')) {
        echo <<<HTML
<style type="text/css">
*,*:hover {
    cursor:initial !important;
}
</style>
HTML;

    }

    ?><script type="text/javascript">
        let TERMINAL_INDIGO24_DOMAIN = '/layouts/curl.php?address=';
    </script>
    <script src="/js/Lang.js"></script>
</head>
