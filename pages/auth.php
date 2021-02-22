<?php

require_once 'layouts/head.php';

?><body class="main authorization" onmousedown="return false;"><?php

require_once 'layouts/header.main.php';

?><div id="VPNAddress">
    <span>VPN Address</span>
    <span class="IP">0.0.0.0</span>
</div>

<!-- <div class="container" onclick="setFocus(event);"> -->
<div class="container">
    <h2 data-lang="terminal_registration">terminal_registration</h2>

    <p>
        <label>
            <b data-lang="terminal_login">terminal_login</b>
        </label>

        <input aria-autocomplete="none" autocomplete="off" id="uname" name="uname" type="text" pattern="\d*" required maxlength="20">
    </p>

    <p>
        <label >
            <b data-lang="password">password</b>
        </label>

        <input aria-autocomplete="none" autocomplete="off" id="psw" maxlength="20" name="psw" required type="password">
    </p>

    <button onclick="checkAuth()" data-lang="To_come_in">To_come_in</button>
</div><?php

include 'components/login_keyboard.php';
include 'components/messageBox.php';
include 'components/LoadingPage.php';
include 'components/getIP.php';

?><script src="/js/messageBox.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/LoadingPage.js"></script>
<script src="/js/cashDriver.js"></script>
<script src="/js/timeDate.js"></script>
<script src="/js/language.js"></script>
<script src="/js/auth.js"></script>
<script src="/js/login_keyboard.js"></script>

</body>
