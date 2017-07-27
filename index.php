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
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/main-page.css">

  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/opening-screen.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/opening-screen.css">
  <link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/preloader.css">
  <link rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/style.css">
  <link rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/material.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> 
  
  <script>
      var pageslug = 'home';
      var jobspage = 'careers';
  </script>

  <link rel="icon" href="<?php echo $TEMPLATEBROWSERPATH; ?>/images/favicon.ico" type="image/x-icon">
  <!-- <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/jquery-3.2.1.min.js"></script> -->
  <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/app/jquery-1.11.2.min.js"></script>
</head>

<body>
    <div class="overlay ease" style="display:none;">
    </div>
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

  <img id="mountains" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Mountains.jpg" alt="mountains">
  <div id="opening-screen-container" class="state-container">
    <div id="castle-container">
      <div id="castle-lanterns-container">
        <img class="lantern lantern-top lantern-left" id="lantern1" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-top lantern-right" id="lantern2" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <!-- The next 2 are supposed to be behind the castle -->
        <img class="lantern lantern-behind lantern-left" id="lantern3" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-behind lantern-right" id="lantern4" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">

        <img class="lantern lantern-front lantern-left" id="lantern5" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-front lantern-right" id="lantern6" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-side lantern-left" id="lantern7" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <img class="lantern lantern-side lantern-right" id="lantern8" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Lantern.svg">
        <!-- <img class="lantern-ground" id="lantern9" src="images/Lantern.svg"> -->
        <!-- ^ Maybe for returning to the previous screen? -->
      </div>
      <div id="castle-trees-container">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree1">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree2">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree3">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree4">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree5">
        <img src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Tree.svg" alt="tree" id="tree6">
      </div>

      <img id="castle" class="castle" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Monastery.svg" alt="castle">
      <img id="castle-m" class="castle" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Monasterymobile.svg" alt="castle">
      <div id="castle-door-container">
        <div id="door-left" class="door-div">
          <img id="castle-door-left" class="door left-door castle-door" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Door-Left.svg" alt="door">
          <div class="door-overlay"></div>
        </div><!--
     --><div id="door-right" class="door-div">
          <img id="castle-door-right" class="door right-door castle-door" src="<?php echo $TEMPLATEBROWSERPATH; ?>/images/Door-Right.svg" alt="door">
          <div class="door-overlay"></div>
        </div>
      </div>
    </div>
    <div id="alert">
      Click to Enter the Dojo
    </div>
  </div>

  <div id="headline" style="display:none; opacity:0">
    <div id="headline-container">
      <h1>FESTEMBER</h1>
      <h3>Coming Soon</h3>
    </div>
  </div>

  <div id="io_intro" class="ready waiting"></div>
  <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored login" style="z-index:99999">
      <i class="material-icons">add</i>
  </button>

</body>

<script type="text/javascript">
 $(".login").click(function()
     {
	 $("body").css({'overflow':'hidden'});
	 $(".overlay").show();
	 $(".holder").show();
	 $("#container").css({'-webkit-filter': 'blur(5px)','-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)', '-ms-filter': 'blur(5px)','filter': 'blur(5px)'});
     });
 
 $(".overlay,.holder").click(function()
     {
	 $("body").css({'overflow':'auto'});
	 $(".overlay").hide();
	 $(".holder").hide();
	 $("#container").css({'-webkit-filter': 'blur(0px)','-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)', '-ms-filter': 'blur(0px)','filter': 'blur(0px)'});
     });
</script>

<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/mainScreenTemp.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/fluid/GPUFluid-1.3.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/intro/home.0.399.94.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/app/base.0.39.js"></script>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/js/iohk/website.0.6.8191.js"></script>

</html>
