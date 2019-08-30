var pass = "";

var pass1 = "";
var attemptCounter = 0;

var yes = new Audio("audio/yes.wav");
var no = new Audio("audio/no.wav");
var winner = new Audio("audio/winner.wav");
var loser = new Audio("audio/loser.wav");

//Array of 30 passwords to guess

var passRandom = new Array(30);

passRandom[0] = "a drowning man will catch at a straw";
passRandom[1] = "tomorrow is another day";
passRandom[2] = "little things please little minds";
passRandom[3] = "love is blind";
passRandom[4] = "first come first served";
passRandom[5] = "slow and steady wins the race";
passRandom[6] = "The nearest the church the farther from God";
passRandom[7] = "Silence gives consent";
passRandom[8] = "better late then never";
passRandom[9] = "he plays best that wins";
passRandom[10] = "better be alone then in ill company";
//animals
passRandom[11] = "care killed the cat";
passRandom[12] = "dog does not eat dog";
passRandom[13] = "every dog has his day";
passRandom[14] = "his bark is worse then his bite";
passRandom[15] = "the early bird catches the worm";
passRandom[16] = "The leopard cannot change its spots";
passRandom[17] = "birds  of a feather flock together";
passRandom[18] = "the old cow thinks she was never a calf";
passRandom[19] = "Harry Potter";
passRandom[20] = "Old birds are not caught with chaff";
//money
passRandom[21] = "best is cheapest";
passRandom[22] = "content is better then riches";
passRandom[23] = "gold will not buy everything";
passRandom[24] = "money breeds money";
passRandom[25] = "money talks";
passRandom[26] = "he who pays the piper calls the tune";
passRandom[27] = "money is round and rolls away";
passRandom[28] = "charity begins at home";
passRandom[29] = "every little helps";
passRandom[30] = "Forrest Gump";


//Draw a password
pass = passRandom[Math.floor((Math.random() * 30) + 1)];	
	

pass = pass.toUpperCase();

var dlugosc = pass.length;
	

for (i = 0; i < dlugosc; i++)
{
	if(pass.charAt(i) == " ") pass1 = pass1 + " ";
	else pass1 = pass1 + "-";
}

function displayPass()
{
	document.getElementById("board").innerHTML = pass1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

// Function to display all letters
function start() 
{
	 //Variable divContent will contain internal HTML code of div alfabet, so in our case 35 divs with one letter each   
	
	var divContent = "";
	
	for (i=0;i<=25;i++)
	{
		var element = "lit" + i;
		
		divContent = divContent + '<div class="letter" onclick="sprawdz('+i+')" id="' +element+'">'+letters[i]+'</div>';
		
		if((i+1) % 6 == 0) divContent = divContent + '<div style="clear:both;"></div>';
		
	document.getElementById("alfabet").innerHTML = divContent;
		
		
		// We want to arrange 7 letters in a row, so we use operator modulo %7  	
	}
	
	displayPass();
}

String.prototype.setCharacter = function(place,character)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0,place) +character+ this.substr(place+1);
} 

function sprawdz(nr)
{
	//alert(nr);
	
	var correctLetter = false;
	
	for (i=0; i<dlugosc; i++)
	{
		if (pass.charAt(i) == letters[nr])
		{
			//alert(i); we test which position in password has clicked letter
			pass1 = pass1.setCharacter(i,letters[nr]);
			correctLetter = true;		
		}
	}		
	if (correctLetter == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		displayPass();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
       
       
       
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
		//dissarm onclick
		
       
       
		//Missed attempt
		attemptCounter++;
       
       
       var picture = "img/s" +attemptCounter+ ".jpg";
       document.getElementById("tree").innerHTML = '<img src="'+picture+'"alt="" />';
          
       
       
			
	}
	//Win
	if (pass == pass1)
	{	
		document.getElementById("alfabet").innerHTML = "That's it! You gave the right password: " +pass+ '</br></br><span class="reset" onclick="location.reload()">PLAY AGAING</span>';        
		winner.play();
        document.getElementById("tree").innerHTML = '<img src="img/s10.jpg" alt="" />';
		
	}		
		
	//Loss
	if (attemptCounter>=9)
	{	
		document.getElementById("alfabet").innerHTML = "You lost!  The right password was: " +pass+ '</br></br><span class="reset" onclick="location.reload()">PLAY AGAING</span>';
		loser.play();
	}
	
	
	displayPass();
}