<!DOCTYPE html>
<html>
<head>
  <title>Festember 2017</title>
  <meta charset="utf-8">
  <meta name="description" content="Festember 2017">
  <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="twitter:card" content="Festember 2017">
  <meta name="twitter:site" content="Input Output">
  <meta name="twitter:creator" content="Input Output">
  <meta name="twitter:title" content="Festember 2017">
  <meta name="twitter:description" content="Festember 2017">
  <meta property="og:title" content="Festember 2017" />
  <meta property="og:type" content="page" />
  <meta property="og:url" content="/" />
  <meta property="og:description" content="Festember 2017" />
  <meta property="og:site_name" content="Festember 2017: The annual cultural extravaganza of NIT, Trichy" />

  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/preloader.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/main-page.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/opening-screen.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/lanterns.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/trees.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/menu.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/media-queries.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/stylesheets/boiler.css">


  <script>
    var pageslug = 'home';
    var jobspage = 'careers';
  </script>

  <link rel="icon" href="<?php echo $TEMPLATEBROWSERPATH; ?>/images/f.png" type="image/x-icon">
  <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/javascripts/loader.js"></script>
</head>

<body oncontextmenu="return false;" onload="loaderChange(); menuSizeChange();">
    
    <div class="overlay ease" style="display:none;"></div>
    <div class="holder ease" style="display:none;">
     <div class='actions'>
       <?php echo $ACTIONBARMODULE; ?>
       <?php echo $ACTIONBARPAGE; ?>
     </div>
    </div>

  <div class="state-container" id="loader">
    <div id="shift"> 
      <img id="shuriken" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Shuriken.svg">
      <img id="f" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/f.svg">
    </div>
  </div>

  <div class="state-container" id="opening-screen-container">


    <nav class="circular-menu">
      <div class="circle" id="circle">
        <a href=""></a>
        <a href=""></a>
        <a href="https://festember.com/17/home/sponsors"><img border="0" alt="Sponsors" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/sponsors.svg" width="40" height="40"></a>
        <a href="https://festember.com/17/home/contacts"><img border="0" alt="Contacts" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/contacts.svg" width="40" height="40"></a>
   <a href="https://festember.com/17/home/highlights"><img border="0" alt="Highlights" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/highlights.svg" width="40" height="40"></a>
   <a href="https://festember.com/17/home/events"><img border="0" alt="Events" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/events.svg" width="40" height="40"></a>
        <a href="https://festember.com/17/home/hospitality"><img border="0" alt="Public Relations and Hospitality" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/pr.svg" width="40" height="40"></a>
        <a href=""></a>
     </div>
     <a href="" class="menu-button"><img border="0" alt="Menu" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/icons/home.svg" width="40" height="40"></a>
   </nav>


    <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Mountains2.jpg" alt="mountains" class="background" id="opening-screen-background">
    <div id="castle-container">
      <div id="lanterns-container">
        <img class="lantern lantern-top" id="lantern1" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-top" id="lantern2" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-behind" id="lantern3" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-behind" id="lantern4" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">

        <img class="lantern lantern-front" id="lantern5" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-front" id="lantern6" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-side" id="lantern7" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-side" id="lantern8" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
      </div>

      <div id="trees-container">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree1">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree2">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree3">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree4">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree5">
        <img src="images/Tree.png" alt="tree" class="tree" id="tree6">
      </div>

      <img id="castle" class="monastery" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Monastery.svg" alt="castle">
      <img id="castle-mobile" class="monastery" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Monasterymobile.svg" alt="castle">

      <div id="castle-door-container">
        <div class="door" id="door-left">
          <img class="door-img" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Door-Left.svg" alt="door">
          <div class="door-overlay"></div>
        </div><!--
     --><div class="door" id="door-right">
          <img class="door-img" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Door-Right.svg" alt="door">
          <div class="door-overlay"></div>
        </div>
      </div>

      <div id="alert">
        Click to Enter the Dojo
      </div>
      <div class= "boiler" id="boiler">
       <div class="fbtwitter">
         <div id="fb-root"></div>
          <div class="instagram"><a href="https://www.instagram.com/festember/?ref=badge"><img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" /></a></div>
         <a href="https://twitter.com/festember" class="twitter-follow-button" data-show-count="false" style="position:absolute;bottom:30px;left:20px;">Follow @festember</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
         <div class="fb-like" data-href="https://facebook.com/festember" data-width="100px" style="position:absolute;bottom:20px;left:20px;" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
       </div>
       <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored login" style="z-index:99999">
        <i class="material-icons">add</i>
      </button>
    </div>
    <footer class="footer">
      Made with <font color="red">&hearts;</font> By <a href="http://delta.nitt.edu" style="color:#ff0000" target="_blank">Delta Force</a>. Designed by <a href="http://behance.net/festember" style="color:#ff0000" target="_blank">Design Team</a>.
  </footer>

    </div>
  </div>

  <!-- MENU -->
  <div class="state-container" id="menu-background-container">
    <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Mountains.jpg" alt="mountains" class="background" id="menu-background">
  </div>
  <div class="state-container" id="menu-overlay"></div>

  <div class="state-container" id="menu-container">
    <img class="dojo" id="dojo-laptop" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Dojo.svg" alt="Dojo">
    <img class="dojo" id="dojo-mobile" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/DojoMobile.svg" alt="DojoMobile">

    <div class="svg-container" id="front-dojo-container">
      <img class="menu-svgs front-svgs" id="traindummy" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/TrainingDummy.svg" alt="Dojo" onclick="window.href="https://festember.com/17/home/events";">
      <img class="menu-svgs front-svgs" id="table" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Hospitality.svg" alt="Dojo" onclick="window.href="https://festember.com/17/home/hospitality";">
    </div>
    <div class="svg-container" id="back-dojo-container">
      <img class="menu-svgs shield" id="contacts" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Contacts.svg" alt="Dojo" onclick="onclick="window.href="https://festember.com/17/home/contacts";">
      <img class="menu-svgs shield" id="sponsors" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Sponsors.svg" alt="Dojo" onclick="window.href="https://festember.com/17/home/sponsors";">
      <img class="menu-svgs" id="ninja" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Highlights.png" alt="Dojo" onclick="window.href="https://festember.com/17/home/highlights";">
    </div>
  </div>
</body>

<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/javascripts/openingScreen.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/javascripts/menu.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/javascripts/boiler.js"></script>

</html>
