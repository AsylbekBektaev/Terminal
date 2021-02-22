<header class="service fs0">
    <span hidden data-lang="Indigo24 әмиян" class="test_lang">Indigo24 әмиян</span>
    <div class="serviceInfo">
        <img alt="" class="fl" data-logo="" src="/img/logosV2/<?php

        if (defined('SERVICE_LOGO')) {
            echo SERVICE_LOGO;
        }

        ?>">

        <span class="pay color grey" data-lang="payment_for_services">payment_for_services</span>
        <span class="caption" data-lang="<?php

        if(defined('_CHECK_')){
            echo _CHECK_;
        }else if(defined('CHECK_PRINT')){
            echo CHECK_PRINT;
        }else if(defined('PAYMENT')){
            echo PAYMENT;
        }else if(defined('LIMIT')){
            echo LIMIT;
        }else if(defined('CONFIRM')){
            echo CONFIRM;
        }else if(defined('SERVICE_NAME')){
            echo SERVICE_NAME;
        }else{
            echo 'SERVICE_NAME';
        }


        ?>" data-service=""><?php

            if(defined('_CHECK_')){
                echo _CHECK_;
            }else if(defined('CHECK_PRINT')){
                echo CHECK_PRINT;
            }else  if(defined('PAYMENT')){
                echo PAYMENT;
            }else if(defined('LIMIT')){
                echo LIMIT;
            }else if(defined('CONFIRM')){
                echo CONFIRM;
            }else if(defined('SERVICE_NAME')){
                echo SERVICE_NAME;
            }else{
                echo 'SERVICE_NAME';
            }
            ?></span>
    </div>

    <ul class="language_2">
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

    <ul class="timeDate" id="timeDate">
        <li class="date" id="date">
            <span class="day"><?php echo date('d'); ?></span> <span class="month" data-lang="<?php echo strtolower(date('F')); ?>"><?php echo strtolower(date('F')); ?></span>
            <br>
            <span class="color grey"><?php echo date('Y'); ?></span>
        </li>

        <li class="timeWeekday" id="timeWeekday">
            <span class="time"><?php echo date('H:i'); ?></span>
            <br>
            <span class="color grey" data-lang="<?php echo strtolower(date('l')); ?>"><?php echo strtolower(date('l')); ?></span>
        </li>
    </ul>
</header>
<script src="/js/timeDate.js"></script>
<script type="text/javascript">
    let LANG_INDIGO24=document.querySelector('.test_lang');
    setInterval( ()=>{
        Storage.setData();
    let cap=document.querySelector('.caption');
    cap.setAttribute('data-service',LANG_INDIGO24.innerText);
    },200);
</script>



