<?php

require_once 'layouts/head.php';

?>
<body><?php

require_once 'layouts/header.services.php';

?><h1 class="infoTitle" data-lang="information_page" onclick="Info.countInfo();">information_page</h1>

<section class="infoPage">
    <div class="Info_pages_links">
        <ul>
            <li>
                <a  data-lang="about_terminal" href="/pages/about.php">about_terminal</a>
            </li>
            <li>
                <a  data-lang="about_company" href="/pages/company.php">about_company</a>
            </li>
        </ul>
        <ul>
            <li>
                <a  data-lang="limits" href="/pages/limits.php">limits</a>
            </li>
            <li>
                <a  data-lang="identification" href="/pages/identification.php">identification</a>
            </li>
        </ul>
    </div>
</section>

<div class="wrapper" id="wrapper" onclick="Info.countWrapper();"></div>

<footer class="category tac">
    <a class="button back" data-lang="back" href="/">back</a>
</footer>

<script src="/js/language.js"></script>
<script src="/js/info.js"></script>

</body>
