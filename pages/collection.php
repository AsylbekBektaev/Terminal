<?php

require_once 'layouts/head.php';

?>
<body><?php

require_once 'layouts/header.services.php';

?>
<section class="collection_auth_section">
    <div class="collection_auth_block">
        <h1 data-lang="collection">collection</h1>
        <div class="collection_block">
            <span data-test="data-test" class="error_text_login_password_collection">text</span>
            <label class="collection_block_login" data-lang="login">login</label>
            <input class="input-class" data-focused=0 size="20" maxlength="20"  data-length="20"  autocomplete="off"  data-input="data-input"
                   id="login_collection_block_input"
                   type="text">
            <label class="collection_block_password" data-lang="password">password</label>
            <input class="input-class" data-focused=0 size="20" maxlength="20" data-length="20"  autocomplete="off" id="password_collection_block_input_2"
                   type="password">
            <button class="collection_block_button" data-lang="next">next</button>
        </div>
    </div>
    <?php
    include_once 'components/Key_A.php';
    ?>
    <button class="login_password_collection_back_button" id="exit_button" onclick="history.back()" data-lang="back">back</button>
</section>
<?php

include_once 'components/LoadingPage.php';
include_once 'components/messageBox.php';

?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="/js/language.js"></script>
<script src="/js/ajax.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/LoadingPage.js"></script>
<script src="/js/collection.js"></script>
<script src="/js/Key_a.js"></script>
<script src="/js/messageBox.js"></script>

</body>
