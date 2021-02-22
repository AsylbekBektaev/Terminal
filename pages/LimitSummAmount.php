<?php

require_once 'layouts/head.php';

?><body><?php

require_once 'layouts/header.service.php';

?>
<section class="LimitSection">
    <label class="infoBlock"><img src="/img/info.png"></label>
    <label class="textPlaceholder" data-lang="enter_sum">enter_sum</label>
    <input class="numbInput" style="min-width:587px;" maxlength="15">
    <?php
    require_once '../components/keyboardNumber.php';
    require_once '../components/messageBox.php';
    ?>
    <div class="infoLim"><label data-lang="infoLim">infoLim</label></div>
</section>
<section class="infoBlocks">
    <div class="Enter_Sum">
        <img src="/img/money.png">
        <label data-lang="sum_enter">sum_enter</label>
        <label class="SumMin"><label data-lang="sumMin"></label><span class="sum1"></span></label>
        <label class="SumMax"><label data-lang="sumMax"></label><span class="sum2"></span></label>
        <div>
            <button class="BUT_next" data-lang="next">next</button>
        </div>
    </div>
    <div class="CommissionInfo">
        <label data-lang="infoCom">infoCom</label>
        <textarea readonly></textarea>
        <div>
            <button class="BUT_com" data-lang="next">next</button>
        </div>
    </div>
    <div class="ErLim">
        <img src="/img/liners.png">
        <div>
            <label class="text1" data-lang="erMax">ttt</label>
            <label class="text2" data-lang="erMin">ttt</label>
            <button>ok</button>
        </div>
    </div>
</section>
<footer class="service">
    <a class="button back" data-lang="back" href="javascript: history.back();">back</a>
    <a class="button forward fr" data-lang="go_to_payment">go_to_payment</a>
</footer>

<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/LimitAmontKeyboard.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/Lang.js"></script>
<script src="/js/timeDate.js"></script>
<script src="/js/messageBox.js"></script>
</body>