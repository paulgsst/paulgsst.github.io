<?php

if(!isset($_REQUEST['action'])){
    $_REQUEST['action'] = V_PROJET_ACCUEIL;
}

switch($_REQUEST['action']){

    case V_PROJET_ACCUEIL:
        require "Include/entete.php";
        require "Vues/v_accueil_projets.php";

        break;

    case V_PROJET1:
        require "Include/entete.php";
        require "Vues/V_PROJET_1.php";

        break;

    case V_PROJET2:
        require "Include/entete.php";
        require "Vues/V_PROJET_2.php";

        break;

}