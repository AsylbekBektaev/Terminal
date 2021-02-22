<?php

require_once 'layouts/head.php';

?>
<body><?php

require_once 'layouts/header.services.php';

?>
<section class="section_check_collection">
    <h1 class="info_text" data-lang="collection">collection</h1>
    <span class="block_info">
        <label class="count_text" data-lang="homepage">homepage</label>
        <label class="count_info" data-count="data-count"></label>
    </span>
    <div class="check_block_1">
        <label class="text_check_block_1" data-lang="Coins">Coins</label>
        <div class="conteiner_check_block_1">
        <span class="conteiner_1_check_1">
            <ul>
        <li>5 тг</li>
        <li>10 тг</li>
        <li>20 тг</li>
        <li>50 тг</li>
        <li>100 тг</li>
        <li>200 тг</li>
    </ul>
        </span>
            <span class="container_2_check_1">
            <ul>
                <li data-5_2="data-5_2"></li>
                <li data-10_2="data-10_2"></li>
                <li data-20_2="data-20_2"></li>
                <li data-50_2="data-50_2"></li>
                <li data-100_2="data-100_2"></li>
                <li data-200_2="data-200_2"></li>
    </ul>
        </span>
        </div>
        <div class="total_block_coins_1">
            <div class="total_block_coins_text_1">
                <label class="total_block_coins_text_1" data-lang="Coins">Coins</label><span data-coin-kol_2="data-coin-kol_2" class="total_block_coins_text_3"></span>
            </div>
            <div class="total_block_coins_text_1">
                <label class="total_block_coins_text_2" data-lang="The_amount">The_amount</label><span class="total_block_coins_text_4" data-coin-total_2="data-coin-total_2"></span>
            </div>
        </div>
    </div>

    <div class="check_block_2">
        <label class="text_check_block_2" data-lang="Banknotes">Banknotes</label>
        <div class="conteiner_check_block_2">
        <span class="conteiner_1_check_2">
            <ul>
        <li>200 тг</li>
        <li>500 тг</li>
        <li>1000 тг</li>
        <li>2000 тг</li>
        <li>5000 тг</li>
        <li>10 000 тг</li>
        <li>20 000 тг</li>
    </ul>
        </span>
            <span class="container_2_check_2">
            <ul>
                <li data-200-kup_2="data-200-kup_2"></li>
                <li data-500-kup_2="data-500-kup_2"></li>
                <li data-1000-kup_2="data-1000-kup_2"></li>
                <li data-2000-kup_2="data-2000-kup_2"></li>
                <li data-5000-kup_2="data-5000-kup_2"></li>
                <li data-10000-kup_2="data-10000-kup_2"></li>
                <li data-20000-kup_2="data-20000-kup_2"></li>
    </ul>
        </span>
        </div>
        <div class="total_block_coins_2">
            <div class="total_block_coins_text_2">
                <label class="total_block_coins_text_1" data-lang="Banknotes">Banknotes</label><span data-kup-kol_2="data-kup-kol_2" class="total_block_coins_text_3"></span>
            </div>
            <div class="total_block_coins_text_2">
                <label class="total_block_coins_text_2" data-lang="The_amount">The_amount</label><span data-kup-total_2="data-kup-total_2" class="total_block_coins_text_4"></span>
            </div>
        </div>
    </div>
    <div class="check_block_3">
        <div class="check_data_block_1">
            <div> 
                <label class="check_data_block_2_text_1" data-lang="Subtotal">Subtotal</label><span data-money-total_2="data-money-total_2"  class="check_data_block_2_text_2"></span>
            </div>
        </div>
        <div class="check_data_block_2">
            <div>
                <label class="check_data_block_2_text_2" data-lang="login">login</label><span class="check_data_block_2_text_5"  data-login="data-login"></span>
            </div>
            <div>
                <label class="check_data_block_2_text_3" data-lang="Last_collection">Last_collection</label><span class="check_data_block_2_text_6" data-time="data-time"></span>
            </div>
        </div>
        <div class="check_data_block_3">
            <div>
                <label class="check_data_block_2_text_1" data-lang="date">date</label><span data-date="data-date" class="check_data_block_2_text_5"></span>
            </div>
            <div>
                <label class="check_data_block_2_text_2" data-lang="IIN_BIN">IIN_BIN</label><span data-iin="data-iin" class="check_data_block_2_text_6"></span>
            </div>
            <div>
                <label class="check_data_block_2_text_3" data-lang="terminal">terminal</label><span data-terminal="data-terminal" class="check_data_block_2_text_7"></span>
            </div>
            <div>
                <label class="check_data_block_2_text_4" data-lang="address">address</label><span
                        class="check_data_block_2_text_8" data-adress="data-adress"></span>
            </div>
        </div>
        <div class="check_data_block_4">
            <div>
                <label class="check_data_block_2_text_1" data-lang="Those.support">Those.support</label><span data-phone="data-phone" class="check_data_block_2_text_2"></span>
            </div>
        </div>
    </div>
    <button class="check_collection_end_button" data-lang="to_finish">to_finish</button>
</section>


<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/collection.js"></script>
<script src="/js/loadingPage.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/check_collection.js"></script>
</body>

