<?php

require_once 'layouts/head.php';

?><body><?php
define('CHECK_PRINT','Indigo24 әмиян');
require_once 'layouts/header.service.php';

?>
<span class="block_collection_buttons10">
        <img src="/img/print.png" width="200" height="200">
        <h1 data-lang="print_check">print_check</h1>
        <div class="block_button_yes_and_no">
            <a class="block_button_no10" data-lang="no" href="/pages/check.php">no</a>
            <a class="block_button_yes10" data-lang="yes" data-href="/pages/check.php" onclick="return Print.yes();">yes</a>
        </div>
</span>

<!--<section id="print">-->
<!--    <h1 class="text" data-lang="print_check">print_check</h1>-->
<!---->
<!--    <p class="fs0">-->
<!--        <a class="button forward print" data-lang="yes" data-href="/pages/check.php" onclick="return Print.yes();">yes</a>-->
<!--        <a class="button back print" data-lang="no" href="/pages/check.php">no</a>-->
<!--    </p>-->
<!--</section>-->

<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/print.js"></script>

</body>
