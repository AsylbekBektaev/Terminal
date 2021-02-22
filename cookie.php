<?php
$cookie_name = "lang";
$cookie_value = "qaz";
setcookie($cookie_name, $cookie_value); // 86400 = 1 day

if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

<?php
//var_dump($langArray);

function callback($buffer)
{
    if($_COOKIE["lang"] == "qaz"){
        $jsonFile = file_get_contents("qaz.json");
    } else if ($_COOKIE["lang"] == "rus") {
        $jsonFile = file_get_contents("rus.json");
    } else if($_COOKIE["lang"] == "eng") {
        $jsonFile = file_get_contents("eng.json");
    } else {
        $jsonFile = file_get_contents("qaz.json");
    }


    $langArray = json_decode($jsonFile, true);

    foreach ($langArray as $key => $value) {
        print_r($value);
        $buffer = str_replace(">" . $key. "<" , ">" .$value . "<"  , $buffer);
    }

    //$buffer = str_replace("all_service", "All Service", $buffer);
    return $buffer;
}

ob_start("callback");

?>
    <html>
    <body>
    <p>apples</p>
    <p>all_service</p>
    <p>min_payment_amount_5000</p>
    </body>
    </html>
<?php

ob_end_flush();

?>