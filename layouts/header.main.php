<header class="fs0">
    <div class="indigo24Terminal" data-lang="terminal">terminal</div>

    <ul class="languages">
        <li>
            <a name="qaz" href="javascript: void 0;">
                <img alt="" src="/img/languages/qazaqstan.png">
            </a>
        </li>

        <li>
            <a name="eng" href="javascript: void 0;">
                <img alt="" src="/img/languages/english.jpg">
            </a>
        </li>

        <li>
            <a name="rus" href="javascript: void 0;">
                <img alt="" src="/img/languages/russian.png">
            </a>
        </li>
    </ul>

    <ul class="callCenter">
        <li id="phoneNumber">+7 700 000 00 00</li>

        <li class="title" data-lang="customer_support_phone">customer_support_phone</li>
    </ul>

    <ul class="timeDate">
        <li class="date">
            <span class="day"><?php echo date('d'); ?></span> <span class="month" data-lang="<?php echo strtolower(date('F')); ?>"><?php echo strtolower(date('F')); ?></span>
            <br>
            <span class="color grey"><?php echo date('Y'); ?></span>
        </li>

        <li class="timeWeekday">
            <span class="time"><?php echo date('H:i'); ?></span>
            <br>
            <span class="color grey" data-lang="<?php echo strtolower(date('l')); ?>"><?php echo strtolower(date('l')); ?></span>
        </li>
    </ul>
</header>

<script src="/js/header.main.js"></script>
<script src="/js/timeDate.js"></script>
