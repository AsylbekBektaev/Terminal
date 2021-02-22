<?php

require_once 'layouts/head.php';
require_once 'layouts/header.main.php';
?>

<body class="main">
<div class="search_container_page">
    <div class="search-container">
        <a href="javascript: history.back();"><div class="button back_page" data-lang="back" >Back</div></a>
        <input type="text"  autocomplete="off" name="search" placeholder="Search.." id="search_input">
        <p data-lang="search" id="input_text" style="display: none">input_text</p>
    </div>


    <button class="back_check">
        <img src="/img/str_back.png">
    </button>
    <button class="next_check">
        <img src="/img/str_next.png">
    </button>
    <div class="close_keyboards">

    </div>
<ul class="services_block">
<?php
$strServicesJsonFileContent = file_get_contents("/var/www/indigo24.terminal/search/services.json");
$array = json_decode($strServicesJsonFileContent);
foreach ($array as $key => $value){
    ?>
    <li class="hide">
        <a class="services_links" href="/services<?php echo $value->service_src;?>">
            <img src="/img/<?php echo $value->service_logo;?>">
            <div>
                    <?php echo $value->service_name;?>
            </div>
            <span class="synonym hide"><?php echo $value->service_synonym;?></span>
        </a>
    </li>
<?php
}
?>
</ul>
</div>
<ul  class="Search_pagination_items">
</ul>
<ul class="hide" id="SearchItemsLiBlock" hidden>
<li>1</li>
</ul>
<button class="seaBack">
    <img src="/img/str_back.png">
</button>
<button class="seaNext">
    <img src="/img/str_next.png">
</button>
<?php
require_once 'components/keyboard_search.php';
?>

<script src="/js/language.js"></script>
<script src="/js/keyboard_search.js"></script>
<script src="/js/Search_pagination.js"></script>

<script>

    Language.setLanguage();
    document.addEventListener("DOMContentLoaded", function(){
        var placeholder_string = document.getElementById('input_text').innerText;
        document.getElementById('search_input').placeholder = placeholder_string;
    });

</script>

</body>