<?php

require_once 'layouts/head.php';

?>
<body>
<section>
    <label class="name_blocks" data-lang="Bill_acceptors">Bill_acceptors</label>
    <div class="kup_model">
        <label for="kup_model_block" class="kup_model_block">
            <span class="block_flex">
                <p>CashCode MFl</p>
                <input id="kup_model_block" data-key="0" type="radio" name="kup_model" value="mfl">
                <!--            <span id="radio_cheked"><div></div></span>-->
            </span>
        </label>
        <div class="blocks_model_number_1">
            <label for="model" class="test">
                600
                <input id="model" type="radio" value="600" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_2" class="test">
                900
                <input id="model_2" type="radio" value="900" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_3" class="test">
                1200
                <input id="model_3" type="radio" value="1200" data-key="0" name="model_number" hidden disabled>
            </label>
        </div>
        <label for="kup_model_block_2" class="kup_model_block_2">
            <span class="block_flex">
                <p>Mei Advance</p>
            <input id="kup_model_block_2" type="radio" data-key="0" name="kup_model" value="mei">
            <span id="radio_cheked"><div></div></span>
            </span>
        </label>
        <div class="blocks_model_number_2">
            <label for="model_4">
                600
                <input id="model_4" type="radio" value="600" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_5">
                900
                <input id="model_5" type="radio" value="900" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_6">
                1200
                <input id="model_6" type="radio" value="1200" data-key="0" name="model_number" hidden disabled>
            </label>
        </div>
        <label for="kup_model_block_3" class="kup_model_block_3">
            <span class="block_flex">
                <p>NV10</p>

                <input id="kup_model_block_3" type="radio" data-key="0" name="kup_model" value="nv10">
            <span id="radio_cheked"><div></div></span>
            </span>
        </label>
        <div class="blocks_model_number_3">
            <label for="model_7">
                600
                <input id="model_7" type="radio" value="600" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_8">
                900
                <input id="model_8" type="radio" value="900" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_9">
                1200
                <input id="model_9" type="radio" value="1200" data-key="0" name="model_number" hidden disabled>
            </label>
        </div>
        <label for="kup_model_block_4" class="kup_model_block_4">
            <span class="block_flex">
                <p>ICT</p>
            <input id="kup_model_block_4" type="radio" data-key="0" name="kup_model" value="ict">
            <span id="radio_cheked"><div></div></span>
            </span>
        </label>
        <div class="blocks_model_number_4">
            <label for="model_10">
                600
                <input id="model_10" type="radio" value="600" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_11">
                900
                <input id="model_11" type="radio" value="900" data-key="0" name="model_number" hidden disabled>
            </label>
            <label for="model_12">
                1200
                <input id="model_12" type="radio" value="1200" data-key="0" name="model_number" hidden disabled>
            </label>
        </div>
    </div>
    <label class="name_blocks" data-lang="Printers">Printers</label>
    <div class="print_model">
        <label for="print_model_block" class="print_model_block">
            <span class="block_flex">
                <p>CUSTOM VKP 80</p>
            <input id="print_model_block" data-key="0" type="radio" name="print_model" value="vkp80">

            <span id="radio_cheked_2"><div></div></span>
            </span>
        </label>
        <label for="print_model_block_2" class="print_model_block_2">
            <span class="block_flex">
                <p>VKP 80II</p>
            <input id="print_model_block_2" data-key="0" type="radio" name="print_model" value="vkp80II">
            <span id="radio_cheked_2"><div></div></span>
            </span>
        </label>
        <label for="print_model_block_3" class="print_model_block_3">
            <span class="block_flex">
                <p>TG 2480-H</p>
            <input id="print_model_block_3" data-key="0" type="radio" name="print_model" value="tg2480-h">
            <span id="radio_cheked_2"><div></div></span>
            </span>
        </label>
        <label for="print_model_block_4" class="print_model_block_4">
            <span class="block_flex">
                <p>W80</p>
            <input id="print_model_block_4" data-key="0" type="radio" name="print_model" value="w80">
            <span id="radio_cheked_2"><div></div></span>
            </span>
        </label>
    </div>
    <label class="name_blocks" data-lang="Coin_acceptor">Coin_acceptor</label>
    <div class="coins_model">
        <label for="coins_model_block" class="coins_model_block">
            <span class="block_flex">
                <p>ICT SCA1</p>
            <input id="coins_model_block" data-key="0" type="radio" name="coins_model" value="sca1">
            <span id="radio_cheked_3"><div></div></span>
            </span>
        </label>
        <label for="coins_model_block_2" class="coins_model_block_2">
            <span class="block_flex">
                <p>NRI G-13</p>
            <input id="coins_model_block_2" data-key="0" type="radio" name="coins_model" value="nrig-13">
            <span id="radio_cheked_3"><div></div></span>
            </span>
        </label>
        <label for="coins_model_block_3" class="coins_model_block_3">
            <span class="block_flex">
                <p>Без монетоприемника</p>
            <input id="coins_model_block_3" data-key="0" type="radio" name="coins_model" value="none">
            <span id="radio_cheked_3"><div></div></span>
            </span>
        </label>
    </div>
    <label class="name_blocks" data-lang="resolution">resolution</label>
    <div class="window_model">
        <label for="window_model_block" class="window_model_block">
            <span class="block_flex">
                <p>1024 x 768</p>
            <input id="window_model_block" data-key="0" type="radio" name="window_model" value="1024x768">
            <span id="radio_cheked_4"><div></div></span>
            </span>
        </label>
        <label for="window_model_block_2" class="window_model_block_2">
            <span class="block_flex">
                <p>1280 x 1024</p>
            <input id="window_model_block_2" data-key="0" type="radio" name="window_model" value="1280x1024">
            <span id="radio_cheked_4"><div></div></span>
            </span>
        </label>
    </div>
    <label class="name_blocks"></label>
    <div class="buttons_block">
    <span class="vpn_block" >

    </span>
        <button class="button_got" data-lang="done" onclick="Seting.Ready_data()">done</button>
        <button class="button_sbor" data-lang="clear" onclick="Seting.Restart()">clear</button>
        <button class="button_izm" data-lang="exit" onclick="Seting.exit()">exit</button>
    </div>
</section>
<?php
require_once 'components/block_pro.php';
require_once 'components/LoadingPage.php';
require_once 'components/loadingPage.php';
?>
<script src="/js/ajax.js"></script>
<script src="/js/seting.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/loadingPage.js"></script>
<script src="/js/language.js"></script>
<script src="/js/LoadingPage.js"></script>
</body>
