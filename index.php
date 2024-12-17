<?php 
include 'Include/constantes.php';

if(!isset($_REQUEST['gestion'])){
    $_REQUEST['gestion'] = V_ACCUEIL;
}

switch ($_REQUEST['gestion']){
    case V_ACCUEIL :
        require "Include/entete.php";
        require "Vues/accueil.php";
        require "Include/pied.php";
        break;

    case C_PROJET:
        require "Controleurs/C_Projets.php";
        break;  
}


?>


