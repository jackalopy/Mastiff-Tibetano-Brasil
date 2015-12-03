<?php
    define('ENV', 'DEV');
    
    if(ENV == 'DEV') {
        define('BASE_URL', '//mastifftibetanobrasil.esy.es/');
    } elseif(ENV == 'PROD') {
        define('BASE_URL', '//mastifftibetanobrasil.com.br/');
    }
    
    define('ASSETS_URL', BASE_URL . 'build/assets/');
    
?>