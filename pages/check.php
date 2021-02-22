<?php

require_once 'layouts/head.php';

?><body><?php
define('_CHECK_','Indigo24 әмиян');
require_once 'layouts/header.service.php';

?><section id="check">
    <div class="preloader_block"></div>
    <h3 class="info" data-lang="payment_completed_successfully">payment_completed_successfully</h3>

    <ul class="list fs0">
        <li>
            <span data-lang="cr_check">cr_check</span>
            <span class="b fr" data-transaction="">0</span>
        </li>

        <li>
            <span data-lang="subscriber">subscriber</span>
            <span class="b fr" data-account="">0</span>
        </li>

        <li>
            <span data-lang="amount">amount</span>
            <span class="fr">
                <span class="b" data-amount="">0</span>
                <span class="color greyWhite symbols tenge"></span>
            </span>
        </li>

        <li>
            <span data-lang="commission">commission</span>
            <span class="fr">
                <span class="b" data-commission="">0</span>
                <span class="color greyWhite symbols tenge"></span>
            </span>
        </li>

        <li>
            <span data-lang="to_translation">to_translation</span>
            <span class="fr">
                <span class="b" data-total="">0</span>
                <span class="color greyWhite symbols tenge"></span>
            </span>
        </li>

        <li>

            <span data-lang="date">date</span>
            <span class="b fr" data-date=""><?php echo date('d.m.Y H:i:s'); ?></span>
        </li>
        <li>
            <span data-lang="IIN_BIN">IIN_BIN</span>
            <span class="b fr" data-bin="">000</span>
        </li>

        <li>
            <span data-lang="terminal">terminal</span>
            <span class="b fr" data-terminal="">000</span>
        </li>

        <li>
            <span data-lang="address">address</span>
            <span class="b fr" data-address="">ADDRESS</span>
        </li>
    </ul>

    <p class="text">
        <img src="/img/Component.png" class="warningSymbol" width="100" height="100">
        <span class="text_warning_simbol" data-lang="keep_receipt_before_crediting">keep_receipt_before_crediting</span>
    </p>
</section>

<footer class="check">
    <a class="button back" data-lang="home" href="/index.php" onclick="return Storage.clearData()">home</a>
</footer>
<span class="block_collection_buttons5">
        <span id="counter_seconds" data-counter="data-counter">

        </span>
        <h1 data-lang="home">home</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no5" data-lang="no">no</button>
            <button class="block_button_yes5" data-lang="yes">yes</button>
        </div>
    </span>
<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/helper.js"></script>
<script src="/js/timeOut.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/check.js"></script>

</body>
