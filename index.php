<?php

require_once 'layouts/head.php';

?>
<body class="main" onmousedown="return false;"><?php

require_once 'layouts/header.main.php';

?>
<section class="body">
    <div id="infoPage">
        <a class="infoIcon" href="/pages/info.php"></a>
    </div>
    <div id="searchButton">
        <a class="searchIcon" href="/search"></a>
    </div>

    <ul class="categories fs0">
        <li class="blockSize2">
            <a href="/categories/mobile_communications.php">
                <span class="image fl">
                    <img alt="" class="" src="/img/categories/mobileCategory.png">
                </span>
                <span class="title" data-lang="mobile_communications">mobile_communications</span>
            </a>
        </li>

        <li class="tickets">
            <a href="categories/tickets.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/tickets.png">
                </span>
                <span class="title" data-lang="tickets">tickets</span>
            </a>
        </li>

        <li class="tv">
            <a href="categories/internet_and_television.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/tv.png">
                </span>
                <span class="title" data-lang="internet_and_television">internet_and_television</span>
            </a>
        </li>

        <li class="assist">
            <a href="#">
                <span class="image">
                    <img alt="" class="" src="/img/categories/assist.png">
                </span>
                <span class="title" data-lang="relief_funds">relief_funds</span>
            </a>
        </li>

        <li class="blockSize2">
            <a href="/categories/other_services.php">
                <span class="image fl">
                    <img alt="" class="" src="/img/categories/others.png">
                </span>
                <span class="title" data-lang="other_services">other_services</span>
            </a>
        </li>

        <li class="education">
            <a href="#">
                <span class="image">
                    <img alt="" class="" src="/img/categories/education.png">
                </span>
                <span class="title" data-lang="education">education</span>
            </a>
        </li>

        <li class="transport">
            <a href="/categories/transport.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/transport.png">
                </span>
                <span class="title" data-lang="transport_services">transport_services</span>
            </a>
        </li>

        <li class="internetShop">
            <a href="categories/online_stores.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/internetShop.png">
                </span>
                <span class="title" data-lang="online_stores">online_stores</span>
            </a>
        </li>

        <li class="electron_money_block">
            <a href="categories/electronic_money.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/electronicMoney.png">
                </span>
                <span class="title" data-lang="electronic_money">electronic_money</span>
            </a>
        </li>

        <li class="utilites_block">
            <a href="categories/utilities.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/communalServices.png">
                </span>
                <span class="title" data-lang="utilities">utilities</span>
            </a>
        </li>

        <li>
            <a href="#">
                <span class="image">
                    <img alt="" class="" src="/img/categories/fines.png">
                </span>
                <span class="title" data-lang="tax_fines">tax_fines</span>
            </a>
        </li>

        <li class="indigo24Wallet">
            <a href="/services/200001">AMin
                <span class="image">
                    <img alt="" class="" src="/img/categories/indigo24Wallet.png">
                </span>
                <span class="title" data-lang="indigo24_academy">indigo24_academy</span>
            </a>
        </li>

        <li class="games">
            <a href="categories/games_apps.php">
                <span class="image">
                    <img alt="" class="" src="/img/categories/games.png">
                </span>
                <span class="title" data-lang="games_apps">games_apps</span>
            </a>
        </li>
    </ul>
</section>

<section class="bottomButtons">

</section>

<footer class="index fs0">
    <span class="version">2.0.0</span>
</footer>

<script src="/js/cashDriver.js"></script>
<script src="/js/timeDate.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/index.js"></script>

</body>
