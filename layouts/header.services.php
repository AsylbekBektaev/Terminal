<header class="fs0">
    <div class="indigo24Terminal" data-lang="terminal">terminal</div>

    <ul class="languages">
        <li>
            <a name="qaz" href="#">
                <img alt="" src="/img/languages/qazaqstan.png">
            </a>
        </li>

        <li>
            <a name="eng" href="#">
                <img alt="" src="/img/languages/english.jpg">
            </a>
        </li>

        <li>
            <a name="rus" href="#">
                <img alt="" src="/img/languages/russian.png">
            </a>
        </li>
    </ul>

    <?php

    $URI = $_SERVER['REQUEST_URI'];
    echo $URI, "\n";

    switch ($URI) {
        case '/pages/about.php':
        case '/pages/company.php':
        case '/pages/limits.php':
        case '/pages/info.php':
        case '/pages/collection.php':
        case '/pages/collectINFO.php':
        case '/pages/check_collection.php':
        case '/pages/identification.php':
            break;

        default:
            echo <<<HTML
<a id="search" href="/search"></a>
HTML;
    }

    ?>
</header>
