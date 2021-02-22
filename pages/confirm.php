<?php

require_once 'layouts/head.php';

?><body><?php

require_once 'layouts/header.service.php';

?><section id="confirm">
    <div class="icon_confirm"></div>
    <h2 class="text" data-lang="confirmation">confirmation</h2>

    <h3 class="text" data-lang="check_correctness_entered_data">check_correctness_entered_data</h3>

    <h1 class="account" data-account="">ACCOUNT</h1>
</section>

<footer class="service">
    <a class="button back" data-lang="back" href="javascript: history.back();">back</a>
<!--    <a class="button forward fr" data-lang="next" href="/pages/payment.php">next</a>-->
    <a class="button forward fr" data-lang="next" href="/pages/LimitSummAmount.php">next</a>
</footer>

<script src="/js/language.js"></script>
<script src="/js/storage.js"></script>
<script type="text/javascript">
    Storage.getData();

    Storage.setAccount();

    Storage.delete('lastOperation');
</script>

</body>
