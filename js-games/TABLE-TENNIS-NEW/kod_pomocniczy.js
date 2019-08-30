    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 500;
    const cw = canvas.width;
    const ch = canvas.height;
    const ballSize = 20;
    let ballX = cw / 2 - ballSize / 2
    let ballY = ch / 2 - ballSize / 2

    const paddelHeight = 100;
    const paddelWidth = 20;

    const playerX = 70;
    const aiX = 910;

    let playerY = 200;
    let aiY = 200;

    const lineWidth = 6;
    const lineHeight = 16;

    let ballSpeedX = 4;
    let ballSpeedY = 4;

    function player() {
      ctx.fillStyle = '#7FFF00';
      ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
    }

    function ai() {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
    }

    function ball() {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(ballX, ballY, ballSize, ballSize);

      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp()
      }
      if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp()
      }
    }

    function table() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, cw, ch);

      for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "gray"
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
      }

    }

    topCanvas = canvas.offsetTop;
    console.log(topCanvas)

    function playerPosition(e) {
      playerY = e.clientY - topCanvas - paddelHeight / 2;

      if (playerY >= ch - paddelHeight) {
        playerY = ch - paddelHeight
      }

      if (playerY <= 0) {
        playerY = 0;
      }
      //aiY = playerY;
    }

    function speedUp() {
      if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += .2;

      } else if (ballSpeedX < 0 && ballSpeedX > -16) {
        ballSpeedX -= .2;
      }

      if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += .2;

      } else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= .2;
      }

      console.log(ballSpeedX + ", " + ballSpeedY)
    }

    /*-----------SZTUCZNA INTELIGENCJA----------*/

    function aiPosition() {
      //Funckja wywyoływana przez funkcję game() (czyli 60 razy na sekundę w naszym wypadku) Celem funkcji jest ustalić pozycję rakietki, któr póżniej jest rysowana przez funkcję ai(). 
      // to jest tylko prosta wariacja, która korzysta z dwóch elementów: pozycji piłki oraz położenia rakietki oraz relacji między nimi. Sami mozecie sobie zaprogramować bardziej skomplikowany mechanizm który wykorzysta także np. prędkość piłki, poziom trudności, czas trwania gry (czym dłuzej tym inaczej zachowuje sie AI). Kombinujcie.
      const middlePaddel= aiY + paddelHeight / 2 ;
      //aiY + paddelHeight / 2 - zawsze oznacza współrzedne srodka wysokości rakietki. Za każdym uruchomieniem funkcji pobiera oczywiście aktualne wartości.
      const middleBall = ballY + ballSize / 2;
      //ballY + ballSize/2 - aktualne współrzędne piłki (środka wysokości) na canvas.
      
      if (ballX > 500) { //czyli piłka będzie znajdowała się po prawej stronie canvas (canvas od 0 do 1000 czyli w tym wypadku obszar większy od 500 do 1000)
        
        //Warunek 1 - środek piłki odległy o więcej niż 200px od środka rakietki
        if (middlePaddel - middleBall > 200) {
         

          aiY -= 24; //ruch rakietki w stronę piłki (wartość określa "prędkość") Zmniejszamy na osi Y odległość między piłką a rakietką.
          
          //Jeśli warunek nie jest spełniony sprawdzamy czy spełniony jest drugi określony w else if. Jesli spełniony jest pierwszy drugi nie jest wykonany.
        } else if (middlePaddel - middleBall > 50) {
          aiY -= 10;
        }
        //Bardzo podobny warunek, sprawdzamy tylko czy środek piłki nie jest bliżej srodka rakietki Jesli odległość mniejsza (równa) 50px od środka to nic nie rób. Jeśli jest większy od 50px (i w domyśle mniejsza równa 200), to dokonaj przemieszczenie o -6px czyli w stronę piłki.

        
                //TO SAMO CO WYŻEJ TYLKO W DRUGĄ STRONĘ (PIŁKA JEST POD RAKIETKĄ)
        else if (middlePaddel - middleBall < -200) {
          aiY += 24;
        } else if (middlePaddel - middleBall < -50) {
          aiY += 10;
        }
       }
      
     //GDY PIŁKI JAST w ODLEGLOŚCI WIĘKSZEJ NIZ 100 i MNIEJSZEJ RÓWNEJ 500 OD LEWEJ KRAWĘDZI (lewa strona boiska)  
      if (ballX <= 500 && ballX > 100) {
        if (middlePaddel - middleBall > 100) {
          aiY -= 3;
        } 
 if (middlePaddel - middleBall < -100) {
          aiY += 3;
        }
      }
  
      //gdy próbuje wyjachać rakietka na dole poza canvas
      if (aiY >= ch - paddelHeight) {
        aiY = ch - paddelHeight
      }

      //gdy próbuje wyjachać rakietka na górze poza canvas
      if (aiY <= 0) {
        aiY = 0;
      }
    }

    canvas.addEventListener("mousemove", playerPosition)

    function game() {
      table()
      ball()
      player()
      ai()
      aiPosition()
    }

    setInterval(game, 1000 / 60)
