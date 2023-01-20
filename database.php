<?php

$vt_sunucu="127.0.0.1";
$vt_kullanici="root";
$vt_sifre="";
$vt_adi="db1";

$baglan=mysqli_connect($vt_sunucu, $vt_kullanici, $vt_sifre, $vt_adi);

if(!$baglan){
    die("Baglanamiyor".mysqli_connect_error());
}
else{
    echo "baglandi";
}

?>