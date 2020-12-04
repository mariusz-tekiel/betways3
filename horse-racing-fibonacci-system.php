<?php 
  $title = "FIBONACCI - HORSE RACING SYSTEM #1";
  $horseRacing="active";   
  require_once( 'header.php' );
?>
<main>
  <article>
    <div class="container">
      <header>
        <br>
        <h1>
          <font size="5">fibonacci</font>
        </h1>
        <h2>
          <font size="3">Horse racing betting system #1</font>
        </h2>
      </header>
        <p>This is one of the simplest and most effective horse racing betting systems . It doesn't require any knowledge about horses. All we need we can find on race card provided by online bookmaker.</p>
        <ol>
          <li>We click on the list of horses starting in the race and we sort odds increasing. We choose the lowest one, that is, we bet on 1st favorite. When the odd of 1st Favourite is less then 2 (1/1) there is no sense to play. Please jump to the next race. 
           <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-6 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-racing-fibonacci-board.PNG" alt="horse racing fibonacci board" height="360px" width="100%">
                  <figcaption>Every racing card contains abbreviations not very clear for begginers. We can check them clicking on  <a href="https://mrfixitstips.co.uk/masterclass/masterclass-how-to-reading-a-horse-racing-racecard/" target="_blank">horse racing - race card</a> or watch very professional and friendly video named <a href="https://www.youtube.com/watch?v=JDneOyXOrSY" target="_blank">How to Read a Race Card</a></figcaption>
                </figure>
              </div>
           </div>
          </li>
          <li>Please choose a short race (maximum 1 mile) for this system. As you can see our race has 5f8y - 5 furlongs and 8 yards which is less then 1 mile (1 mile = 8 furlongs).
          </li>
          <li>The way to bet is based on few expressions of the Fibonacci sequence. For our purposes we use the following expressions - 1, 1, 2, 3, 5, 8, 13. 
          </li>
          <li> <strong>EXAMPLE: </strong>Our example includes 4 consecutive days of sports betting. We have £ 100 of capital and we start the game from the first bet, that is 1. Because we want to make game more exciting, we multiply stakes by 10. 
            <ul>
              <li><strong>1st DAY:</strong> <br> 1st RACE:  We bet £ 10 on the horse Dr Doro with number 6. <br>We lost.</li>
              <li>2nd RACE: We go to the second element of Fibonacci  sequence = 1. We bet £10 on next race. <br>We are losing again.</li>
              <li>3rd RACE:  The next element of the Fibonacci sequence is 2. We bet £20 on next race. <br> We lose. Looks like it is unliky day for us. We stop playing. </li>

              <li><strong>2nd DAY:</strong><br>1st RACE:  Today we continue our sequence. Following number is 3. We bet £30 on 1st favourite. <br>We loose. </li>
              <li>2nd RACE:  Next race we bet is £50. <br>This time we win. The win is £ 112.5, which covers part of our losses.</li>

              <li>3rd RACE: Now we start from beginning of sequence. We bet £10 on next race. <br>We lose.</li>
              <li>4th RACE: Next race we bet £10 as well. <br>We lose again. </li>
              <li>5th RACE: So we bet £20. <br>Win! We collect £110, what covers our losses and gives us £52.5 clean profit.</li>
              <li>6th RACE: We start from £10 on next race. 
                <br> Lose. We spent to much time for betting today so we stop playing.</li>
            </ul>
            
            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-6 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-racing-fibonacci-history.PNG" alt="horse racing fibonacci chart" height="340px" width="100%">
                  <figcaption>...</figcaption>
                </figure>
              </div>
            </div>
            
          </li>
          <li>As you can see in the table the next two days are going well for us. In total, we manage to win £257.5 with quite average risk.
            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-6 mx-auto">
                <figure>
                  <img id="ftb-fort1" class="home-pic" src="images/horse-racing-fibonacci-chart.PNG" alt="horse racing fibonacci chart" height="220px" width="100%">
                  <figcaption>...</figcaption>
                </figure>
              </div>
            </div>            
          </li>          
          <li>
            SUMMARY: Personally, I was a great enthusiast of this system. It's simplicity, short time of betting and regular profits cause that we quickly become dependent on him. Once I managed to get a monthly profit of more than 2,000%. I had the impression that I had discovered a gold mine.
           Unfortunately, the reality was very brutal with me. Although the good trend was reversed, I continued the game. It is not difficult to guess that I quickly lost my profit. 
            If I can advise you. Use this system for not more than 4, 5 days in row by placing up to 6 races a day. Then make a minimum weekly break or longer. It will save you many unnecessary troubles.               
          </li>
          <div class="row" align="center">
            <div class="col-sm-12 col-md-8 col-xl-8 mx-auto">
              <aside>
                <strong>
                  Remember that playing too often can lead to addiction!
                </strong>
              </aside>
            </div>
          </div>
        </ol>
      </div>
    </article>
</main>

<?php require_once( 'footer.php' ); ?>
