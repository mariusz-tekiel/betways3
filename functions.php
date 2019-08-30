<?php

//get our config file
require_once( dirname(__FILE__ ) . '/config.php' );
//output the page title
function the_title(){
   global $title;
   
   echo $title;
}

//otput home URL
function home_url(){
   echo ABS_URL;
}

// status menu
function status(){
   global $home; 
   global $football; 
   global $horseRacing;
   global $roulette;
   global $tennis;
   global $aboutUs;   
   global $jsGames;
}

?>




