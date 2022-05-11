

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Land Pollution</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="external.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Tempo - v4.7.0
  * Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html" style="color:rgb(81, 179, 42);"><img style="width:50px;" src="../../uni.png"> | UniQuiz</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul >
          <li><a class="nav-link scrollto active" href="../../welcome.php" style="color:rgb(81, 179, 42); " >Home</a></li>         
           <li><a class="nav-link scrollto " href="../../welcome.php" style="color:rgb(81, 179, 42);" >About</a></li>

          <li class="dropdown"><a href="#"  style="color:rgb(81, 179, 42);"><span>Categories</span> <i class="bi bi-chevron-down"></i></a>
            <ul style="background-color:white;">
  
              <li><a href=""><img style="width: 35px" src="../../envi.png">Environnement</a></li>
              <li><a href="#"><img style="width: 35px" src="https://cdn-icons-png.flaticon.com/512/547/547415.png">Astronomy</a></li>
              <li><a href="#"><img style="width: 35px" src="https://cdn-icons-png.flaticon.com/512/2076/2076783.png">Weather</a></li>
            </ul>
          </li>
         
          <li><a class="nav-link scrollto" href="#contact"  style="color:rgb(81, 179, 42);">Contact</a></li>
        
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
<body onload="NextQuestion(0)">
    <main>
        <!-- creating a modal for when quiz ends -->
        <div class="modal-container" id="score-modal">

            <div class="modal-content-container">

                <h1>Congratulations, Quiz Completed.</h1>

                <div class="grade-details">
               <!-- <img src="../../cong.png" width="160px" > -->
                    <p>Grade : <span id="grade-percentage"></span>%</p>
                    <p ><span id="remarks"></span></p> 
                    <p>Move to the next level</p>
                </div>

                <div class="modal-button-container">
                    <button onclick="closeScoreModal()"> <a href="air.html">continue</a> </button>
                    
                </div>

            </div>
        </div>
<!-- end of modal of quiz details-->
     <div id="block_container">
        <div class="game-quiz-container" id="block1">

            <div class="game-details-container">
              <div style="align-items: baseline; ">
                <img src="https://cdn-icons-png.flaticon.com/512/571/571685.png" width="40" style="margin-left:28px;" >
                <h1>Score : <span id="player-score" ></span> </h1> 
              </div>
              <div >
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828833.png" width="32" style="margin-left:28px;">
                <h1> Question : <span id="question-number" ></span> / 9</h1>

              </div>  
            </div>
          
            <div class="game-question-container">
              <img src="assets/img/quest.png" width="50" style="margin-bottom: 30px;">
                <h1 id="display-question"></h1>
            </div>
             
            <div class="game-options-container" >

               <div class="modal-container" id="option-modal" >

                    <div class="modal-content-container">
                         <h1>Please Pick An Option</h1>
                         <img src="https://cdn-icons-png.flaticon.com/512/3997/3997910.png" width="250"> 
                         <div class="modal-button-container">
                            <button onclick="closeOptionModal()">Continue</button>
                        </div>

                    </div>

               </div>
               <div class="modal-container" id="doc-modal"style=" z-index: 1;">

                  <div class="modal-content-container" >
                       <h1 id ="1"></h1>

                         <div class="modal-button-container">
                           <button onclick="closeDocModal()">Continue</button>
                         </div>

                  </div>
               </div>
               <div class="modal-container" id="reanswer-modal">

                    <div class="modal-content-container">
                         <h1>Please try  again</h1>
                         <img src="https://cdn-icons-png.flaticon.com/512/3997/3997910.png" width="250"> 
                         <div class="modal-button-container">
                            <button onclick="closeReanswerModal()">Continue</button>
                        </div>
    
                    </div>
                </div>
           
           
            
          
                 
          
                <span>
                    <input type="radio" id="option-one" name="option" class="radio" value="optionA" />
                    <label for="option-one" class="option" id="option-one-label"></label>
                </span>
            
                <span>
                    <input type="radio" id="option-two" name="option" class="radio" value="optionB" />
                    <label for="option-two" class="option" id="option-two-label"></label>
                </span>


                <span>
                    <input type="radio" id="option-three" name="option" class="radio" value="optionC" />
                    <label for="option-three" class="option" id="option-three-label"></label>
                </span>


                <span>
                    <input type="radio" id="option-four" name="option" class="radio" value="optionD" />
                    <label for="option-four" class="option" id="option-four-label"></label>
                </span>

            </div>
            

            <div class="next-button-container">
                <button onclick="handleNextQuestion()">Next Question</button>
            </div>

            <div class="submit-button-container">
                <button onclick="handleSubmitQuestion()">Submit</button>
            </div>
        </div>
        <div class="image-container" id="block2">
            
            <div id="Layer1" style="position:absolute;  " ><img name="xxx" src="assets/img/landimg/land.jpg" class="im" width="650" height="555"  alt=""></div>
            <div id="Layer2" style="position:absolute;  ;margin-left: 570px;margin-top:350px;"><img id="Image1" name="yyy" src="assets/img/landimg/food1.png" width="44" height="44" alt=""></div>
             <div id="Layer2" style="position:absolute;margin-top: 390px;margin-right:300px ;"><img id="Image2" name="yyy" src="assets/img/landimg/trash.png" width="72"  alt=""></div>
             <div id="Layer2" style="position:absolute; margin-top:260px;margin-right: 60px;"><img id="Image3" name="yyy" src="assets/img/landimg/cut3.png" width="95" height="110"  alt=""></div>
             <div id="Layer2" style="position:absolute;  margin-top: 230px;margin-left: 190px"><img id="Image4" name="yyy" src="assets/img/landimg/cut3.png" width="100" height="120" alt=""></div>
             <div id="Layer2" style="position:absolute;  ;margin-right: 570px;margin-top:350px;"><img id="Image5" name="yyy" src="assets/img/landimg/food1.png" width="44" height="44" alt=""></div>
             <div id="Layer2" style="position:absolute;  margin-top:360px;margin-left: 350px;"><img id="Image6" name="yyy" src="assets/img/landimg/trash.png" width="80" alt=""></div>
            
             <div id="Layer2" style="position:absolute;  margin-top:460px;margin-right: 460px;"><img id="Image8" name="yyy" src="assets/img/landimg/trash2.png" width="60"  alt=""></div>
             <div id="Layer2" style="position:absolute;  margin-bottom:120px;margin-right: 300px;"><img id="Image9" name="yyy" src="assets/img/landimg/smoke1.png" width="90" height="80" alt=""></div>
             <div id="Layer2" style="position:absolute;  margin-bottom:220px;margin-left: 300px;"><img id="Image10" name="yyy" src="assets/img/landimg/smoke1.png" width="100" height="80" alt=""></div>
         
            </div>
    </div>    
    </main>
    <script src="assets/script.js"></script>

  </body>
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>EcoQuiz</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About</a></li>
              
            
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Categories</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Environnement</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Astronomy</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Weather</a></li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>EcoQuiz</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/ -->
          Designed by <a href="https://bootstrapmade.com/" style="color:rgb(81, 179, 42) ;">BootstrapMade</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>

  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
 

</body>

    

</html>