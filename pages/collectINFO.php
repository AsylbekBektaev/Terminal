<?php

require_once 'layouts/head.php';
require_once 'api/index.php';
?>
<body><?php
require_once 'layouts/header.services.php';
?>
<section class="class_1">


    <div class="class_2">
        <div class="class_3" data-lang="Coins">Coins</div>
        <div class="class_4">
            <span class="class_5">
                <label class="class_7" data-lang="Par">Par</label>
                <ul class="class_6">
                    <li>5 тг</li>
                    <li>10 тг</li>
                    <li>20 тг</li>
                    <li>50 тг</li>
                    <li>100 тг</li>
                    <li>200 тг</li>
                </ul>
            </span>

            <span class="class_5">
                <label class="class_7" data-lang="Quantity">Quantity</label>
                <ul class="class_6">
                    <li data-5="data-5"></li>
                    <li data-10="data-10"></li>
                    <li data-20="data-20"></li>
                    <li data-50="data-50"></li>
                    <li data-100="data-100"></li>
                    <li data-200="data-200"></li>
                </ul>
            </span>
        </div>
        <div class="class_8">
            <span class="class_10">
                <span class="class_15">
                   <label class="class_17" data-lang="Coins">Coins</label>
                   <label data-coin-kol="data-coin-kol" class="class_11"></label>
                 </span>
            </span>
            <span class="class_10">
                <span class="class_14">
                    <label class="class_17" data-lang="The_amount">The_amount</label> 
                    <label data-coin-total="data-coin-total" class="class_11"></label>
                </span>
            </span>
        </div>
        <div class="class_9">
            <span class="class_14">
            <label class="class_17" data-lang="Subtotal">Subtotal</label>
            <label data-money-total="data-money-total" class="class_11"></label>
            </span>
        </div>
    </div>
    <div class="class_2_2">
        <div class="class_3" data-lang="Banknotes">Banknotes</div>
        <div class="class_4">
            <span class="class_5">
                <label class="class_7" data-lang="Par">Par</label>
                <ul class="class_6_2">
                    <li>200 тг</li>
                    <li>500 тг</li>
                    <li>1000 тг</li>
                    <li>2000 тг</li>
                    <li>5000 тг</li> 
                    <li>10 000 тг</li>
                    <li>20 000 тг</li>
                </ul>
            </span>

            <span class="class_5">
                <label class="class_7" data-lang="Quantity">Quantity</label>
                <ul class="class_6_2">
                    <li data-200-kup="data-200-kup"></li>
                    <li data-500-kup="data-500-kup"></li>
                    <li data-1000-kup="data-1000-kup"></li>
                    <li data-2000-kup="data-2000-kup"></li>
                    <li data-5000-kup="data-5000-kup"></li>
                    <li data-10000-kup="data-10000-kup"></li>
                    <li data-20000-kup="data-20000-kup"></li>
                </ul>
            </span>
        </div>
        <div class="class_8">
            <span class="class_10">
                <span class="class_15">
                    <label class="class_17" data-lang="Banknotes">Banknotes</label>
                    <label data-kup-kol="data-kup-kol" class="class_11"></label>
                </span>
            </span>
            <span class="class_10">
                <span class="class_14">
                   <label class="class_17" data-lang="The_amount">The_amount</label>
                   <label data-kup-total="data-kup-total" class="class_11"></label>
                </span>
            </span>
        </div>
        <button class="class_16" data-lang="collection">collection</button>
    </div>
    <div class="class_2_4">
        <div class="termial_text_block" data-lang="terminal">terminal</div>
    <div class="model_info_KUP_block">
        <label class="model_info_kup_text" data-lang="bill_acceptor">bill_acceptor</label>
        <div class="block_kup">
            <div class="block_kup_2">
            <div class="block_kup_name" data-kupmod="data-kupmod"></div>
                <img src="/img/v_white.png">
                <div class="statusColor"></div>
            </div>
            <div class="block_kup_number" data-kupnumber="data-kupnumber"></div>
        </div>
    </div>
    <div class="model_info_print_block">
    <label class="model_info_kup_text" data-lang="Printer">Printer</label>
    <div class="block_print">
    <div class="block_text" data-printmod="data-printmod"></div><img src="/img/v_white.png">
        <div class="statusColor2"></div>
    </div>
    </div>
    <div class="model_info_print_block">
    <label class="model_info_kup_text" data-lang="coin_acceptor">coin_acceptor</label>
    <div class="block_print">
    <div class="block_text" data-coinmod="data-coinmod"></div><img src="/img/v_white.png">
        <div class="statusColor3"></div>
    </div>
    </div>
    <div class="model_info_print_block">
    <label class="model_info_kup_text" data-lang="resolution">resolution</label>
    <div class="block_print">
    <div class="block_text" data-resolmod="data-resolmod"></div><img src="/img/v_white.png">
    </div>
    </div>
    <div class="model_info_print_block">
    <label class="model_info_kup_text">VPN</label>
    <div class="block_print">
    <div class="block_text" data-vpnmod="data-vpnmod"></div><img src="/img/v_white.png">
    </div>
    </div>
    <button class="button_seting" data-lang="To_change">To_change</button>
</div>
    <span class="class_2_3">
        <button class="button_rebooting" data-lang="rebooting">rebooting</button>
        <button class="driver_rebooting" data-lang="driver_restart">driver_restart</button>
        <button class="driver_off" data-lang="driver_off">driver_off</button>
        <button class="driver_on" data-lang="driver_on">driver_on</button>
        <button class="reboot_computer" data-lang="reboot_computer">reboot_computer</button>
        <button class="ter_log_delete" data-lang="delete_login_terminal">delete_login_terminal</button>
        <button data-lang="exit" class="button_exit" onclick="Collection.back()">Выйти</button>
    </span>

    <span class="block_collection_buttons">
        <img src="/img/money.png" width="200" height="200">
        <h1 data-lang="Collect-yes-no">Collect-yes-no</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no" data-lang="no">no</button>
            <button class="block_button_yes" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons2">
        <img src="/img/seting.png" width="200" height="200">
        <h1 data-lang="to_change">to_change</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no2" data-lang="no">no</button>
            <button class="block_button_yes2" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons3">
        <img src="/img/reboot.png" width="200" height="200">
        <h1 data-lang="to_rebooting">to_rebooting</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no3" data-lang="no">no</button>
            <button class="block_button_yes3" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons4">
        <img src="/img/reboot.png" width="200" height="200">
        <h1 data-lang="driver_restart">driver_restart</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no4" data-lang="no">no</button>
            <button class="block_button_yes4" data-lang="yes">yes</button>
        </div>
    </span>

    <span class="block_collection_buttons6">
        <img src="/img/off_driver.png" width="200" height="200">
        <h1 data-lang="driver_off">driver_off</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no6" data-lang="no">no</button>
            <button class="block_button_yes6" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons7">
        <img src="/img/on_driver.png" width="200" height="200">
        <h1 data-lang="driver_on">driver_on</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no7" data-lang="no">no</button>
            <button class="block_button_yes7" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons8">
        <img src="/img/reboot.png" width="200" height="200">
        <h1 data-lang="reboot_computer">reboot_computer</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no8" data-lang="no">no</button>
            <button class="block_button_yes8" data-lang="yes">yes</button>
        </div>
    </span>
    <span class="block_collection_buttons9">
        <img src="/img/delete_login.png" width="200" height="200">
        <h1 data-lang="delete_login_terminal">delete_login_terminal</h1>
        <div class="block_button_yes_and_no">
            <button class="block_button_no9" data-lang="no">no</button>
            <button class="block_button_yes9" data-lang="yes">yes</button>
        </div>
    </span>

<?php
 require_once 'components/block_pro.php';
 require_once 'components/LoadingPage.php';
 ?>
</section>
<script src="/js/collectionINFO.js"></script>
<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/collection.js"></script>
<script src="/js/loadingPage.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/helper.js"></script>
<script src="/js/LoadingPage.js"></script>
</body>

