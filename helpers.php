<?php

$env = parse_ini_file('.env.example');

if (!empty($env)) {
    foreach ($env as $key => $value) {
        define($key, $value);
    }
}
unset($path, $env, $key, $value);

function env($constant, $defaultValue = false)
{
    if($constant && !$defaultValue){
        if (defined($constant)) {
            return constant($constant);
        }else{
            return false;
        }
    }
    if (!defined($constant) && $defaultValue) {
        define($constant, $defaultValue);

        return constant($constant);
    }

    if (defined($constant) && !empty($constant)) {
        return constant($constant);
    }

    return null;
}
