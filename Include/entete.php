<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Portfolio Gresset Paul</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="./js/jquery-3.7.1.js"></script>   
  <script src="./js/jquery-plugin.js"></script>   
  <script src="./js/jquery.animate-colors.js"></script>
  <script src="js/script.js"></script>
 
</head>
<body>
 <!-- Section d'accueil -->
  <div id="accueil">
 <section id="accueil2" style="height : 236.804px">
  <h1>Bienvenue sur mon Portfolio</h1>
  <p>Je m'appelle Paul Gresset, et je suis un développeur passionné.</p>
  <input type='button' id='menuSelection' value = "Menu"></input></br>
  <ul>
    <a href="index.php?gestion=<?php echo C_PROJET?>" class="sousMenu">Mes projets</a>
  </ul>
  <ul>
    <a href="index.php?gestion=<?php echo V_CV?>" class="sousMenu">Mon CV</a>
  </ul>
  <ul>
    <a href="index.php?gestion=<?php echo V_MOI?>" class="sousMenu">A propos de moi</a>
  </ul>
  </select>
  </div>
  <!--<input type = "button" value="Menu" id="menuDeroulant"></input>-->
        
    </section>

    <script src="./js/three.min.js"></script>
  <script src="./js/vanta.birds.min.js"></script>
  <script src="./js/vanta.clouds.min.js"></script>
  <script>
    VANTA.CLOUDS({
  el: "#accueil",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0xcf5454,
  cloudColor: 0x9cb9e6,
  speed: 0.70
    })
  </script>
