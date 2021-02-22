<?php

require_once 'layouts/head.php';

?>
<body>
<section id="seting_info">
    <img src="/img/logo300%201.png">
    <div>
        <!-- <button class="seting_info_button" onclick="Seting_info.Auto_seting()">Автоматическая настройка</button> -->
        <button class="seting_info_button" onclick="Seting_info.Terminal_seting()" data-lang="Customization">Customization</button>
    </div>
</section>
<script src="/js/seting_info.js"></script>
<script src="/js/storage.js"></script>
<script src="/js/language.js"></script>
</body>