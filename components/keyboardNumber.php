<section id="keyboardNumber" class="keyboardNumber">
    <ul>
        <li class="key">1</li>
        <li class="key">2</li>
        <li class="key">3</li>
        <li class="key">4</li>
        <li class="key">5</li>
        <li class="key">6</li>
        <li class="key">7</li>
        <li class="key">8</li>
        <li class="key">9</li>
        <li class="clearNum"></li>
        <li class="key">0</li>
        <li class="backClearNum"></li>
    </ul>
</section>
<style>
    .keyboardNumber ul{
        margin: 45px auto 0;
        text-align: center;
        width: 550px;
    }
    .keyboardNumber ul li{
        background: #fff;
        border-radius: 5px;
        display: inline-block;
        font: 900 50px/100px RR, serif;
        margin: 10px;
        text-align: center;
        width: 150px;
    }

    .backClearNum{
        background: #fff;
        border-radius: 5px;
        display: inline-block;
        font: 900 50px/100px RR, serif;
        margin: 10px;
        text-align: center;
        width: 150px;
    }
    .keyboardNumber ul .clearNum{
        background: #E16978;
        border-radius: 5px;
        display: inline-block;
        font: 900 50px/100px RR, serif;
        margin: 10px;
        text-align: center;
        width: 150px;
        color:white;
    }
    .keyboardNumber ul .clearNum:after{
        font: 900 70px/100px FA, serif;
        vertical-align: top;
        content: '\f00d';
    }
    .keyboardNumber ul .backClearNum{
        background: #BEBEBE;
        border-radius: 5px;
        display: inline-block;
        font: 900 50px/100px RR, serif;
        margin: 10px;
        text-align: center;
        width: 150px;
        color:white;
    }
    .keyboardNumber ul .backClearNum:after{
        font: 900 70px/100px FA, serif;
        vertical-align: top;
        content: '\f060';
        color: rgba(0, 29, 82, 1);

    }

</style>