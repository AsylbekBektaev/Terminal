<?php

require_once 'layouts/head.php';

?><body><?php

define('SERVICE_LOGO','noLogo.png');

define('SERVICE_NAME', 'RiotZone');

define('SERVICE_MASK', '#########################');

require_once 'layouts/header.service.php';

?><section class="body service">
    <ul class="inputs fs0">
        <li>
            <!--<div class="info"\sdata-lang="enter_phone_number">enter_phone_number</div>-->
            <div class="input" data-mask="<?php echo SERVICE_MASK; ?>" data-type="number" data-length="25" style="min-width: 517px;"></div>
            <!-- <div class="infoFooter" data-lang="attention_number_entered_without_8">attention_number_entered_without_8</div>-->
        </li>
    </ul>
</section>

<footer class="service">
    <a class="button back" data-lang="back" href="javascript: history.back();">back</a>
    <a class="button forward fr" data-lang="next" data-href="/pages/confirm.php" onclick="check();">next</a>
</footer><?php

require_once 'components/keyboards.php';

require_once 'components/LoadingPage.php';

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
    Storage.setServiceID(100061);
    Storage.set('commission', 0);

    async function check() {
        if (!CheckAuth.getAccount()) {
            return false;
        }

        Storage.getInputs();

        Load.Show();let blockShow=document.querySelector('.block_LoadingPage'), blockShowIMG=document.querySelector('.block_LoadingPage .block_animation_Loading');blockShow.style.background='rgba(252, 252, 252, 0.9)';blockShowIMG.style.opacity='1';Load.Anim2();

        await CheckAuth.check({
            serviceID: Storage.getServiceID(),
            account: CheckAuth.getAccount(),
        }).then((result) => {
            Load.noShow();

                if (result && result.success && result.token) {
if(result.service){
Storage.SaveObLocal('service',result.service);
}
Storage.set('TOK', result.tokenID);

                if (result.commission) {
                    Storage.SaveObLocal('commission2', result.commission);
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

            Load.noShow();

            MessageBox.setMesssage(Language.locale('perhaps_server_not_available'));
            MessageBox.setState('error');
            MessageBox.show();
        });
    }
</script>

<script src="/js/jquery-3.4.1.min.js"></script>
<script src="/js/jquery.mask.min.js"></script><script src="/js/LoadingPage.js"></script>

</body>
