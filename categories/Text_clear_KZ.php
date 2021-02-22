<?php

define('PATH_IMG','/var/www/indigo24.terminal/img/logosV2/');
define('PATH_Categories','/var/www/indigo24.terminal/categories/');
define('PATH_Services','/var/www/indigo24.terminal/services/');
define('NOLOGO','"noLogo" || ("noLogo".".png" || ".jpg" || ".jpeg" || ".gif")');

$mas3=[];

$mas3[0]="education.php";
$mas3[1]="electronic_money.php";
$mas3[2]="games_apps.php";
$mas3[3]="indigo24.php";
$mas3[4]="internet_and_television.php";
$mas3[5]="mobile_communications.php";
$mas3[6]="online_stores.php";
$mas3[7]="other_services.php";
$mas3[8]="relief_funds.php";
$mas3[9]="tax_fines.php";
$mas3[10]="tickets.php";
$mas3[11]="transport.php";
$mas3[12]="utilities.php";

for($i=0;$i<250000;$i++)
{
    if( ! file_exists(PATH_Services . $i . "/index.php"))
    {
        continue;
    }
    if($i)
    { // Сервистин паракшасындагы Казахстан деген созди алып тастаиды

        $KZ_NAME=file_get_contents(PATH_Services . $i . "/index.php");

        $KZ_1=preg_replace("#\s[(]Казахстан[)]#","",$KZ_NAME);

        $KZ_2=preg_replace("#[|]\sКазахстан#","",$KZ_1);

        $KZ_3=preg_replace("#\sКазахстан#","",$KZ_2);

        $KZ_NAME=$KZ_3;

        file_put_contents(PATH_Services . $i ."/index.php",$KZ_NAME);

    }
    if($i)
    {// Сервистин паракшасындагы //логотип сурети папкада жок болса сосын суреттин аты noLogo  сайкес келмесе онда noLogo ауыстырады сонда логотип пустой болып турмайды сурети папкада жок болса
        preg_match_all("#define[(]'SERVICE_LOGO',(.*?)[)][;]#",$KZ_NAME,$IMG_LOGO_Services_ARRAY,PREG_SET_ORDER);

        foreach ($IMG_LOGO_Services_ARRAY as $key => $vall)
        {
            $new_value=preg_replace("#[']#","",$vall[1]);

            $vall[1]=$new_value;

            if(file_exists(PATH_IMG . $vall[1]) && $vall[1] !== NOLOGO)
            {
                continue;
            }
            if($vall[1] === NOLOGO)
            {
                continue;

            }
            if(!file_exists(PATH_IMG . $vall[1]) && $vall[1] !== NOLOGO)
            {

                $new_IMG_LOGO=preg_replace("#define[(]'SERVICE_LOGO',(.*?)[)][;]#","define('SERVICE_LOGO','noLogo.png');",$KZ_NAME);

                $KZ_NAME=$new_IMG_LOGO;

                file_put_contents(PATH_Services . $i . "/index.php", $KZ_NAME);
            }

        }
    }
}

foreach ($mas3 as $key => $val)
{

    if ($val)  //Казахстан деген созди категориядагы турган сервистин атынан алып тастау
    {
        $Category_NAME = file_get_contents($val);

        $CAT_KZ_1 = preg_replace("#\s[(]Казахстан[)]#", "", $Category_NAME);

        $CAT_KZ_2 = preg_replace("#\s[|]\sКазахстан#", "", $CAT_KZ_1);

        $CAT_KZ_3 = preg_replace("#\sКазахстан#", "", $CAT_KZ_2);

        $Category_NAME = $CAT_KZ_3;

        file_put_contents(PATH_Categories . $val, $Category_NAME);

    }


    if ($val)  //Категорияда логотип сурети папкада жок болса сосын суреттин аты noLogo  сайкес келмесе онда noLogo ауыстырады сонда логотип пустой болып турмайды сурети папкада жок болса
    {
        $IMG_CATEGO = file_get_contents($val);

        preg_match_all("#\"/img/logosV2/(.*?)\"#", $IMG_CATEGO, $mat2, PREG_SET_ORDER);

        $mas2 = [];

        foreach ($mat2 as $value_2)
        {
            $mas2[] = $value_2[1];
        }

        for ($j = 0; $j < count($mas2); $j++)
        {
            if ($mas2[$j] !== NOLOGO && !file_exists(PATH_IMG . $mas2[$j]))
            {
                $new_Services = preg_replace("#$mas2[$j]#", "noLogo.png", $IMG_CATEGO);

                $IMG_CATEGO = $new_Services;

                file_put_contents(PATH_Categories . $val, $IMG_CATEGO);

                continue;
            }
            if (file_exists(PATH_IMG . $mas2[$j]) && $mas2[$j] !== NOLOGO)
            {
                continue;
            }
        }

    }
}
