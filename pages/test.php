<?php

define('PATH_Services','/var/www/indigo24.terminal/services/');


for($i=0;$i<0;$i++)
{
if( ! file_exists(PATH_Services . $i . "/index.php"))
{
continue;
}
if($i)
{ // Сервистин паракшасындагы Казахстан деген созди алып тастаиды

//$index=file_get_contents(PATH_Services . $i . "/index.php");
//$index2=preg_replace("#Storage[.]set[(][']commission['][,] result[.]commission[)][;]#","Storage.SaveObLocal('commission2', result.commission);",$index);
//$index3=preg_replace("#\sif\s[(]result\s&&\sresult[.]success\s&&\sresult[.]token[)]\s[{]#","     if (result && result.success && result.token) {\nif(result.service){\nStorage.SaveObLocal('service',result.service);\n}\nStorage.set('TOK', result.tokenID);\n",$index2);
//file_put_contents(PATH_Services . $i ."/index.php",$index3);
}
}