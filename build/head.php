<?php
    $meta = $master->getMeta();
?>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="<?php echo $meta["description"]; ?>">
<meta name="keywords" content="<?php echo $meta["keywords"]; ?>">

<meta itemtype="http://www.schema.org/PetStore"/>
<meta itemprop="name" content="<?php echo $meta["title"]; ?>"/>
<meta itemprop="image" content="<?php echo ASSETS_URL . "img/" . $meta["image"]; ?>"/>

<meta property="og:title" content="<?php echo $meta["title"]; ?>"/>
<!-- meta(property="og:url" content="#{siteUrl}")-->
<meta property="og:locale" content="pt_BR"/>
<meta property="og:image" content="<?php echo ASSETS_URL . "img/" . $meta["image"]; ?>"/>
<meta property="og:description" content="<?php echo $meta["description"]; ?>"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="<?php echo $meta["site"]; ?>"/>
<meta name="twitter:creator" content="<?php echo $meta["twitter"]; ?>"/>
<meta name="twitter:image" content="<?php echo ASSETS_URL . "img/" . $meta["image"]; ?>"/>
<meta name="twitter:title" content="<?php echo $meta["title"]; ?>"/>
<meta name="twitter:description" content="<?php echo $meta["description"]; ?>"/>
<link rel="icon" type="image/png" href="<?php echo ASSETS_URL; ?>img/favicon.png">
<title><?php echo $meta["title"]; ?></title>

<script type="text/javascript">
    var BASE_URL = "<?php echo BASE_URL; ?>";
</script>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<!--<script type="text/javascript" src="<?php echo ASSETS_URL . "js/libraries/lightbox.js"; ?>"></script>-->
<script type="text/javascript" src="<?php echo ASSETS_URL;?>js/bundle.min.js"></script>

<link href='https://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<?php echo ASSETS_URL;?>css/main.min.css" type="text/css" />

<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70996754-1', 'auto');
ga('send', 'pageview');

</script>
<!-- End Google Analytics -->