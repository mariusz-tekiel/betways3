<?php 
$title = "2nd / 3rd FAVOURITE - Horse racing betting system #4";

$horseRacing="active";   

?>

<?php require_once( 'header.php' ); ?>


<body>
  <main>
    <article>
      <div class="container">
     <header>
          <br>

          <h1>
            <font size="5">2nd / 3rd Favourite</font>
          </h1>
          <h2>
            <font size="3">Horse racing betting system #4</font>
          </h2>
        </header>

        <p>The next system is betting on 2nd or 3rd favorite all the time. We skip the races in which the 1st favorite has odds less than 2 (fractional 1/1). In the opinion of bookmakers this is a definite favorite.</p>
      
       <ol>
         <li> First of all, we need to sort the horses ascending by odds.
           Let's assume we're playing the 2nd favorite. In our case, we bet horse number 2 Iolani with odds 3.75 (11/4). Let's put £ 10. If we win we have $ 27.50 of profit. If we lost we go to the next point.

            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-7 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-racing-favourite-board1.PNG" alt="horse 2nd and 3rd favourites" height="150" width="100%">
                  <figcaption></figcaption>
                </figure>
              </div>
            </div>
          </li>

         <li>Next race we bet on horse Balibour with no 11. It has odds 7 (6/1) so we do not need to raise the rate to be above the line. We bet again £ 10. If we win we will have £ 70 - £ 30 = £ 40 of clean profit. 
            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-7 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-racing-favourite-board2.PNG" alt="horse racing horse 2nd and 3rd favourites" height="150" width="100%">
                  <figcaption></figcaption>
                </figure>
              </div>
            </div>

          </li>
         <li>We are continuing the game in this way using appropriate progressions. Because the odds on the 2nd favorite range from 3 to 8 (2/1 to 7/1) we can apply the following rates: 1, 1, 1, 2, 2, 3, 4. After each win we return to the beginning of the sequence. If would have the black series, let's finish the game after 7 bets. 
          </li>

         <li>The game for the 3rd favorite is based on identical rules. The difference will be based on the amount and the frequency of winnings. Let's adjust our progress to expectations and financial possibilities.
           <div class="row">
             <div class="col-sm-12 col-md-8 col-xl-7 mx-auto">
               <figure>
                 <img id="ftb-fort1" class="home-pic" src="images/horse-racing-favourite-history.PNG" alt="horse racing horse 2nd and 3rd favourites" height="300" width="100%">
                 <figcaption>This table shows the game balance on 2nd and 3rd favoutite</figcaption>
               </figure>
             </div>
           </div>
      </li>
      <li>
        SUMMARY: Lay the Loser is a nice system, but how easy to guess is very sensitive to the black series. Already two defeats in a short time could spoil us all the fun. Before we get the experience, we suggest leave the game after a few wins. 
      </li>
          <div class="row" align="center">
            <div class="col-sm-12 col-md-8 col-xl-8 mx-auto">
              <aside>
                <strong>
                  If the first defeat occurs, we definitively interrupt the game.
                </strong>
              </aside>
            </div>
          </div>

        </ol>

      </div>
    </article>
  </main>

  <?php require_once( 'footer.php' ); ?>
