<?php

switch($_REQUEST['action']){
    case V_PROJET1:
        require "Include/entete.php";
        echo 'oui';
        require "Include/pied.php";
        break;

}