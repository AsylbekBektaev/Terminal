<?php

require_once 'layouts/head.php';

?><body class="main"><?php

require_once 'layouts/header.services.php';

?><h1 class="categoryTitle" data-lang="relief_funds">relief_funds</h1>

<section class="body services">
    <ul class="category fs0"></ul>
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
