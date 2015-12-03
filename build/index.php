<?php
    $text = $master->getTexts();
    $sections = $text["sections"];
    $gallery = $master->getGallery();
?>

<!DOCTYPE html>
<html>
    <head>
        <?php include "head.php"?>
    </head>
    <body>
        <header>
            <?php include "header.php"; ?>
        </header>
        <div class="section" id="section1" menu_title="<?php echo $sections["section1"]["title"]; ?>">
            <div class="background desk-only"></div>
            <div class="background mobile-only"></div>
            <div class="foreground">
                <!--<canvas id="canvas_section1"></canvas>-->
                <div class="centerV">
                    <div class="centerH">
                        <div class="logo" data-sr="reset"></div>
                        <div class="flags" data-sr="reset">
                            <div class="flag flag-pt <?php echo $text["lang"] == "pt" ? "active" : "" ?>" value="pt"></div>
                            <div class="flag flag-en <?php echo $text["lang"] == "en" ? "active" : "" ?>" value="en"></div>
                            <div class="flag flag-sp <?php echo $text["lang"] == "sp" ? "active" : "" ?>" value="sp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section toLeft" id="section2" menu_title="<?php echo $sections["section2"]["title"]; ?>">
            <div class="content">
                <div class="centerV">
                    <div class="centerH">
                        <div class="text">
                            <h3 data-sr="reset">
                                <?php
                                    echo $sections["section2"]["title"];
                                ?>
                            </h3>
                            <?php foreach ($sections["section2"]["paragraph"] as $paragraph) { ?>
                                <p data-sr="reset">
                                    <?php
                                        echo $paragraph;
                                    ?>
                                </p>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image" data-sr="vF .1"></div>
        </div>
        <div class="section toRight" id="section3" menu_title="<?php echo $sections["section3"]["title"]; ?>">
            <div class="content">
                <div class="centerV">
                    <div class="centerH">
                        <div class="text">
                            <h3 data-sr="reset">
                                <?php
                                    echo $sections["section3"]["title"];
                                ?>
                            </h3>
                            <?php foreach ($sections["section3"]["paragraph"] as $paragraph) { ?>
                                <p data-sr="reset">
                                    <?php
                                        echo $paragraph;
                                    ?>
                                </p>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image" data-sr="vF .1"></div>
        </div>
        <div class="section" id="section4" menu_title="<?php echo $sections["section4"]["title"]; ?>">
            <div class="content mobile-only">
                <div class="dogs">
                    <?php
                        $i = 0;
                        foreach ($sections["section4"]["dogs"] as $dog):
                            $i++;
                    ?>
                        <div class="dog dog<?php echo $i; ?>">
                            <div class="text">
                                <h1 data-sr="vF .1 reset">
                                    <?php echo $dog["title"] ?>
                                </h1>
                                <h3 data-sr="vF .1 reset">
                                    <?php echo $dog["subtitle"] ?>
                                </h3>
                                <?php foreach ($dog["paragraph"] as $paragraph): ?>
                                    <p data-sr="vF .1 reset">
                                        <?php
                                            echo $paragraph;
                                        ?>
                                    </p>
                                <?php
                                    endforeach;
                                ?>
                            </div>
                            <div id="gallery<?php echo $i; ?>" class="gallery dragdealer" data-sr="vF .1 reset">
                                <div class="handle">
                                    <?php 
                                    $dog = $gallery["mobile"]["dog".$i];
                                    $j = 0;
                                    foreach ($dog["pictures"] as $picture):
                                    ?>
                                        <div class="slide" style="background-image: url(<?php echo ASSETS_URL . "img/". $dog["folder"]; ?>/<?php echo $picture; ?>)"></div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    <?php
                        endforeach;
                    ?>
                    </div>
                </div>
            <div class="content desk-only">
                <div class="dogs" data-sr="vF .1">
                    <?php
                        $i = 0;
                        foreach ($sections["section4"]["dogs"] as $dog):
                            $i++;
                    ?>
                        <div class="dog dog<?php echo $i; ?>">
                            <div class="background" style="background-image: url(<?php echo ASSETS_URL . "img/". $gallery["desk"]["dog" . $i]["folder"] . "/" . $gallery["desk"]["dog" . $i]["presentation"]; ?>)"></div>
                            <div class="text">
                                <div class="centerV">
                                    <div class="centerH">
                                        <h1 data-sr="vF .1 reset">
                                            <?php echo $dog["title"] ?>
                                        </h1>
                                        <h3 data-sr="vF .1 reset">
                                            <?php echo $dog["subtitle"] ?>
                                        </h3>
                                        <?php foreach ($dog["paragraph"] as $paragraph): ?>
                                            <p data-sr="vF .1 reset">
                                                <?php
                                                    echo $paragraph;
                                                ?>
                                            </p>
                                        <?php
                                            endforeach;
                                        ?>
                                        <div id="thumbnails<?php echo $i; ?>" class="thumbnails" data-sr="vF .1 reset" data-imagelightbox>
                                            <?php 
                                            $dog = $gallery["desk"]["dog".$i];
                                            $j = 0;
                                            foreach ($dog["thumbnails"] as $thumb):
                                            ?>
                                                <a data-lightbox="<?php echo $dog["folder"]; ?>" title="Imagem <?php echo ($j + 1); ?>" href="<?php echo ASSETS_URL . "img/". $dog["folder"] . "/" . $dog["pictures"][$j]; ?>">
                                                    <div class="thumbnail" style="background-image: url(<?php echo ASSETS_URL . "img/". $dog["folder"] . "/" . $thumb; ?>)"></div>
                                                </a>
                                            <?php
                                            $j++;
                                            endforeach;
                                            ?>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php
                        endforeach;
                    ?>
                </div>
            </div>
        </div>
        <div class="section" id="section5" menu_title="<?php echo $sections["section5"]["title"]; ?>">
            <div class="centerV">
                <div class="centerH">
                    <div class="content">
                        <div class="contact_intro">
                            <h3 data-sr="reset">
                                <?php
                                    echo $sections["section5"]["title"];
                                ?>
                            </h3 data-sr="reset">
                            <?php foreach ($sections["section5"]["paragraph"] as $paragraph) { ?>
                                <p data-sr="reset">
                                    <?php
                                        echo $paragraph;
                                    ?>
                                </p>
                            <?php } ?>
                        </div>
                        <div class="divisor"></div>
                        <div class="contact_detail" data-sr="reset">
                            <div class="name">
                                <?php
                                    echo $sections["section5"]["name"];
                                ?>
                            </div>
                            <div class="email">
                                <?php
                                    echo $sections["section5"]["email"];
                                ?>
                            </div>
                            <div class="phone">
                                <?php
                                    echo $sections["section5"]["phone"];
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="text">
                <?php echo $sections["footer"] ?>
            </div>
            <a href="http://www.fci.be/en/" target="_blank" title="Página da FCI"class="FCIlogo"></a>
        </footer>
    </body>
</html>