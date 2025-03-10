<?php 

function monAge($jour,$mois,$annee){
    $anneeAjd = date('Y');
    $moisAjd = date('m');
    $jourAjd = date('d');
    $ageActuel = $anneeAjd - $annee;
    if(($moisAjd-$mois)>0){
        return $ageActuel;
    }
    elseif(($moisAjd-$mois)==0 && ($jourAjd-$jour)>=0){
        return $ageActuel;
    }
    else{
        return $ageActuel-1;

    }
}