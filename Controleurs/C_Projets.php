<?php

if(!isset($_REQUEST['action'])){
    $_REQUEST['action'] = V_PROJET_ACCUEIL;
}

switch($_REQUEST['action']){

    case V_PROJET_ACCUEIL:
        require "Include/entete.php";
        require "Vues/v_accueil_projets.php";
        require "Include/pied.php";
        break;

    case V_PROJET1:
        require "Include/entete.php";
        echo 'oui';
        require "Include/pied.php";
        break;

}