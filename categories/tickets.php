<?php

require_once 'layouts/head.php';

?><body class="main"><?php

require_once 'layouts/header.services.php';

?><h1 class="categoryTitle" data-lang="tickets">tickets</h1>

<section class="body services">
    <ul class="category fs0"><li>
    <a class="service" href="/services/63/">
        <span class="logo">
            <img alt="" src="/img/logosV2/noLogo.png">
        </span>

        <span class="caption">TICKETS.KZ</span>
        <span class="synonym" style="display: none;">TICKETS.KZ</span>
    </a>
</li>
<li>
    <a class="service" href="/services/159/">
        <span class="logo">
            <img alt="" src="/img/logosV2/noLogo.png">
        </span>

        <span class="caption">Тикетон</span>
        <span class="synonym" style="display: none;">Тикетон</span>
    </a>
</li>
</ul>
</section>

<section>
    <ul id="pagination" class="fs0 hide">
        <li>
            <button class="back disable"></button>
        </li>

        <li>
            <ul class="dots">
                <li class="active"></li>
            </ul>
        </li>

        <li>
            <button class="next"></button>
        </li>
    </ul>
</section>

<footer class="category tac">
    <a class="button back" data-lang="back" href="/">back</a>
</footer>

<script src="/js/language.js"></script>
<script src="/js/pagination.js"></script>

</body>
