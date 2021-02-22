<?php

require_once 'layouts/head.php';

?><body><?php

define('SERVICE_LOGO', '%SERVICE_LOGO%');

define('SERVICE_NAME', '%SERVICE_NAME%');

define('SERVICE_MASK', '#########################');

require_once 'layouts/header.service.php';

?><section class="body service">
    <ul class="inputs fs0">
        <li>
            <div class="info" data-lang="enter_phone_number">enter_phone_number</div>
            <div class="input" data-mask="<?php echo SERVICE_MASK; ?>" data-type="number" data-length="%SERVICE_MASK_LENGTH%" style="min-width: 400px;%INPUT_WIDTH%"></div>
            <div class="infoFooter" data-lang="attention_number_entered_without_8">attention_number_entered_without_8</div>
        </li>
    </ul>
</section>

<footer class="service">
    <a class="button back" data-lang="back" href="javascript: history.back();">back</a>
    <a class="button forward fr" data-lang="next" data-href="/pages/confirm.php" onclick="check();">next</a>
</footer><?php

require_once 'components/keyboards.php';

require_once 'components/loadingPage.php';

require_once 'components/messageBox.php';

?><script src="/js/index.js"></script>
<script src="/js/language.js"></script>
<script src="/js/keyboards.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/checkAuth.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/loadingPage.js"></script>
<script src="/js/messageBox.js"></script>

<script type="text/javascript">
    Storage.setData();
    Storage.setServiceID(%SERVICE_ID%);
    Storage.set('commission', 0);

    async function check() {
        if (!CheckAuth.getAccount()) {
            return false;
        }

        Storage.getInputs();

        LoadingPage.show();

        await CheckAuth.check({
            serviceID: Storage.getServiceID(),
            account: CheckAuth.getAccount(),
        }).then((result) => {
            LoadingPage.hide();

            if (result && result.success && result.token) {
                if (result.commission) {
                    Storage.set('commission', result.commission);
                }

                if (result.data) {
                    Storage.set('data', JSON.stringify(result.data));
                }

                Storage.set('token', result.token);

                CheckAuth.forward();
            } else {
                if (result.message) {
                    MessageBox.setMesssage(result.message);
                } else {
                    MessageBox.setMesssage(Language.locale('perhaps_server_not_available'));
                }

                MessageBox.setState('error');
                MessageBox.show();
            }
        }).catch((error) => {
            console.error(error);

            LoadingPage.hide();

            MessageBox.setMesssage(Language.locale('perhaps_server_not_available'));
            MessageBox.setState('error');
            MessageBox.show();
        });
    }
</script>

<script src="/js/jquery-3.4.1.min.js"></script>
<script src="/js/jquery.mask.min.js"></script>

</body>
