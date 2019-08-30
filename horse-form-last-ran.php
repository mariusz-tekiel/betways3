<?php 
$title = "FORM LAST RAN - Horse racing betting system #2";

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
            <font size="5">FORM LAST RAN</font>
          </h1>
          <h2>
            <font size="3">Horse racing betting system #2</font>
          </h2>
        </header>

        <p>The next system is based on the evaluation of the horse's form based on its results from previous races. We find all the necessary information on the <a href="https://mrfixitstips.co.uk/masterclass/masterclass-how-to-reading-a-horse-racing-racecard/" target="_blank">race card.</a></p>
        <ol>
          <li>In the column Form Last Ran we have a string of a few digits (sometimes other characters), which describe the horse's results in previous races. Last digit is a place of horse in last race, last 2nd one is a place in the 2nd last race etc.

            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-8 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-form-last-ran1.PNG" alt="horse form last ran bosrd" height="480" width="100%">
                  <figcaption></figcaption>
                </figure>
              </div>
            </div>
          </li>

          <li>If there is a bet in the race with a rate less than 1/1
            (2.0 in decimal system), I propose to skip such a race and go to the next one.</li>
          <li>Sometimes, the race card does not have quite long history of racing (form). In this case, I would also jump to the next race. Remember signs “-” and “/” separate years and seasons. We are interested in only freshest data.
          </li>
          <li>We only choose horses with at least one number 1 in Form Last Ran sequence.</li>

          <li> <strong>EXAMPLE: </strong>We choose only horses with at least one number 1 in Form Last. In our case, we take into consideration the following horses:
            <ul>
              <li>#1 Motahassen - 091425 </li>
              <li>#7 Whatwouldyouknow - 211042</li>
              <li>#10 Dream Free - 374531</li>
              <li>#2 Exlusive Waters - 316285</li>
            </ul>
          </li>

          <li>
            After analyzing I would bet on horse #10, because he won the last race, and none of his rivals won in the last 3 races.
            My 2nd favourite is #7. He won two times in the last 6 races and twice was the second.
          </li>
          
          <li>
            SUMMARY: There are many ways to analyze. Experienced players can choose their favorite in a matter of seconds using this method. We place only one horse each time. We match the choice of the rate to your possibilities.

          </li>
          <div class="row" align="center">
            <div class="col-sm-12 col-md-8 col-xl-8 mx-auto">
              <aside>
                <strong>
                  Please do not play too often and do not spend too much time playing!
                </strong>
              </aside>
            </div>
          </div>

        </ol>

      </div>
    </article>
  </main>

  <?php require_once( 'footer.php' ); ?>
