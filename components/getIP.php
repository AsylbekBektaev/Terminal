<?php

exec('ip addr', $output);

$output = join(' ', $output);

preg_match_all('#\s+\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\s+#', $output, $matches);

$found = false;

if ($matches && $matches[0] && is_array($matches[0])) {
    $list = $matches[0];

    foreach ($list as $IP) {
        $IP = trim($IP);

        if (strpos($IP, '10.') === 0) {
            $found = $IP;
        }
    }
}

if ($found) {
    echo <<<HTML
<script type="text/javascript">
let IPAddress = '{$found}';
</script>
HTML;

}
