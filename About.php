<?php 

include 'config.php';

session_start();

error_reporting(0);

if (isset($_SESSION['username'])) {
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="style.css">

	<title>About </title>
</head>
<body>
<div class="container" style=" z-index: 1; width:900px ; height:700px">
	  <div class="about" >
      <img src="wel.png" width="200px" style=" margin-left:300px; margin-top:50px; margin-bottom:50px" >
			<p> This game is a part of the module project (Serious Game) , level II1 at ENSI ,</p>
      <ul>  prepared by :
          <li> Sirine Bourcheda </li>
          <li> Ikbel Temtem </li>
          <li> Aya Jouini </li>
</ul>
     <ul> prepared for :
       <li> Yemna Sayeb </li>
     </ul>              
     </div>
	</div>

<!-- background animation -->
	<div class="triangle-container">
    <div class="triangle">
      <div class="inner-triangle"></div>
    </div>
   </div>
  
    <div class="square-container">
    <div class="square">
    </div>
   </div>
  
    <div class="circle-container">
    <div class="circle">
    </div>
   </div>
</body>
</html>