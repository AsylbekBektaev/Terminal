<?php

require_once 'layouts/head.php';

?>

<body>

<?php

require_once 'layouts/header.service.php';

?>

<section id="payment">
    <h1 class="account" data-account="">+7 707 765 59 90</h1>
    <img  class="image_info_limit" src="/img/info.png" width="25" height="25">
    <ul class="list">
        <li>
            <span class="title" data-lang="money_deposited">money_deposited</span>
            <span class="fr">
                <span id="amount">0</span>
                <span class="symbols tenge color greyWhite"></span>
            </span>
        </li>
        <li>
            <span class="title color yellow b" data-lang="limit">limit</span>
            <span class="color yellow b fr">
                <span id="limit">0</span>
                <span class="symbols tenge color greyWhite"></span>
            </span>
        </li>

        <li>
            <span class="title" data-lang="commission">commission</span>
            <span class="commission hide"></span>
            <span class="fr">
                <span id="commission">0</span>
                <span class="symbols tenge color greyWhite"></span>
            </span>
        </li>

        <li>
            <span class="title color yellow b" data-lang="to_enrollment">to_enrollment</span>
            <span class="color yellow b fr">
                <span id="total">0</span>
                <span class="symbols tenge color greyWhite"></span>
            </span>
        </li>
    </ul>
    <p class="fs0 tac">
        <img class="infoImage" src="/img/info.png" width="40" height="40">
        <span class="text color yellow" data-lang="make_notes_in_the_bill_acceptor">make_notes_in_the_bill_acceptor</span>
        <span class="new_text_color" data-lang="info_limits">info_limits</span>
    </p>
    <span class="login_terminal_style" >
      <span class="login_text_style1"  data-lang="login_ter">login_ter</span>
      <h1  class="login_text_style2" id="login_terminal" data-info="data-info"></h1>
    </span>
    <span class="info_img_block" data-lang="sum_limit">
        sum_limit
    </span>
</section>
<section class="timer_payment">
    <div class="blockTimer">
        <label class="timerAmount"></label>
        <label data-lang="go_ahead" class="timerText">
            go_ahead
        </label>
        <div>
            <button data-lang="no" class="timer_no">no</button>
            <button data-lang="yes" class="timer_yes">yes</button>
        </div>
    </div>
</section>

<footer class="service">
    <a class="button back" data-lang="back" href="javascript: void 0;" onclick="return Payment.back();">back</a>
    <a class="button forward fr hide" data-lang="next" data-href="/pages/print.php" onclick="return Payment.next();">next</a>
</footer>

<?php

require_once 'components/loadingPage.php';
require_once 'components/messageBox.php';

?>

<script src="/js/language.js"></script>
<script src="/js/loadingPage.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/helper.js"></script>
<script src="/js/cashDriver.js"></script>
<script src="/js/messageBox.js"></script>
<script src="/js/payment.js"></script>
<script src="/js/timeDate.js"></script>
</body>
