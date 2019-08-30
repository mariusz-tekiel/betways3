// We create Array of possible pairs
var cards = [
  "roman1.png",
  "roman2.png",
  "roman3.png",
  "roman1.png",
  "roman2.png",
  "roman3.png",
  "monk.png",
  "guard.png",
  "cesar.png",
  "monk.png",
  "guard.png",
  "cesar.png"
];

var para = false;
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

var pairFound = new Audio("sound/yes.wav");
var win1 = new Audio("sound/win1.wav");

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

cards = shuffle(cards);
//console.log(cards);

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

c0.addEventListener("click", function() {
  revealCard(0);
});
c1.addEventListener("click", function() {
  revealCard(1);
});
c2.addEventListener("click", function() {
  revealCard(2);
});
c3.addEventListener("click", function() {
  revealCard(3);
});

c4.addEventListener("click", function() {
  revealCard(4);
});
c5.addEventListener("click", function() {
  revealCard(5);
});
c6.addEventListener("click", function() {
  revealCard(6);
});
c7.addEventListener("click", function() {
  revealCard(7);
});

c8.addEventListener("click", function() {
  revealCard(8);
});
c9.addEventListener("click", function() {
  revealCard(9);
});
c10.addEventListener("click", function() {
  revealCard(10);
});
c11.addEventListener("click", function() {
  revealCard(11);
});

function revealCard(nr) {
  var opacityValue = $("#c" + nr).css("opacity");

  if (opacityValue != 0 && lock == false) {
    lock = true;
    var obraz = "url(img/" + cards[nr] + ")";

    $("#c" + nr).css("background-image", obraz);
    $("#c" + nr).addClass("cardA");
    $("#c" + nr).removeClass("card");
    //$('#c'+nr).toggleClass('cardA');

    if (oneVisible == false) {
      //first card
      oneVisible = true;
      visible_nr = nr;
      lock = false;
    } else {
      //second card
      if (cards[visible_nr] == cards[nr] && visible_nr != nr) {
        //alert("pair found");
        setTimeout(function() {
          hide2Cards(nr, visible_nr);
        }, 750);
        pairFound.play();
      } else {
        //alert("missed");
        setTimeout(function() {
          restore2Cards(nr, visible_nr);
        }, 750);
      }
      turnCounter++;
      $(".score").html("Turn counter: " + turnCounter);
      oneVisible = false;
    }
  }
}

//Function checking if revealed cards are pair
//If we have 2 last cards taken out from the table we display final message
function hide2Cards(nr1, nr2) {
  $("#c" + nr1).css("opacity", "0");
  $("#c" + nr2).css("opacity", "0");
  pairsLeft--;

  if (pairsLeft == 0) {
    $(".board").html(
      "<h1> is finished.<br> Done in " + turnCounter + " turns</h1>"
    );
    if (turnCounter <= 12) {
      $(".banner").html("<h2>Your memory is in great condition!</h2>");
      win1.play();
    } else if (turnCounter <= 20)
      $(".banner").html(
        "<h2>Your memory is in average condition! <br>Better limit drinking strong liquors!</h2>"
      );
    else
      $(".banner").html(
        "<h2>Your memory is in terrible condition! 		<br>Repeat the test or stop drinking immediately!</h2>"
      );

    $(".banner2").html(
      '<input type="submit" class="button1" value="Repeat test" align="right" onClick="document.location.reload(true)">'
    );
  }
  lock = false;
}

function restore2Cards(nr1, nr2) {
  $("#c" + nr1).css("background-image", "url(img/karta2.png)");
  $("#c" + nr1).addClass("card");
  $("#c" + nr1).removeClass("cardA");

  $("#c" + nr2).css("background-image", "url(img/karta2.png)");
  $("#c" + nr2).addClass("card");
  $("#c" + nr2).removeClass("cardA");
  lock = false;
}
