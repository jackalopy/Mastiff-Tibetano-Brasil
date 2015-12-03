<?php
    require_once('app/master.php');
    $master = Master::getInstance();
    
    if (isset($_GET["lang"]) && in_array($_GET["lang"], array('en', 'sp', 'pt'))) {
        $lang = $_GET["lang"];
        
        $master->setLanguage($lang);
    }
    
    include('index.php');
?>