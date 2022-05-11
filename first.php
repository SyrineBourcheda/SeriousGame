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

	<title>Login Form </title>
</head>
<body>
<div class="container" style=" z-index: 1; width:1000px ; height:700px">
<h1 style=" margin-left:250px ">Welcome to <B style="color:#adc46e;">UniQuiz</B>!!</h1> 
            <h2 style=" margin-left:100px ">Hope you enjoy our funny game, please sign in to start </h2>
            <img src="uni.png" width="300px" style=" margin-left:320px ;margin-top:50px">
			<div class="input-group">
       
				<a href="index.php" name="submit" class="btn1">Login</a>
			</div>
            <div class="input-group">
				<a href="About.php" name="submit" style="margin-top:30px; " class="btn1">Info</a>
			</div>
			<h4 class="login-register-text " style=" margin-left:300px; margin-top:10px ">Don't have an account? <a href="register.php" style="color:#adc46e;">Register Here</a>.</h4>
		
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