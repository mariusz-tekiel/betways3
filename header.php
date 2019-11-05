<?php require_once(dirname(__FILE__).'/functions.php'); ?>

<!DOCTYPE html>
<html lang="eng">

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129157358-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-129157358-1');
		</script>
	<title>Betways Winning Sport Betting Strategies</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">



	<meta name="description" content="Website with description of low risk betting systems. Learn how to earn money sitting in your armchair." />
	<meta name="Author" content="Mariusz Tekiel" />
	<meta name="keywords" content="bet, betting, systems, roulette, horse, racing, football, soccer, tennis, probability, cash out, hobby, gambling, win, fortune" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<link rel="stylesheet" href="styles/bootstrap.min.css" />

	<link rel="stylesheet" href="styles/main.css" type="text/css" />
	<link rel="Shortcut icon" href="images/logo.png" />

	<link href="https://fonts.googleapis.com/css?family=Lato:400,700&amp;subset=latin-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">

		<script type="text/javascript" src="js/slider.js"></script>
		
</head>

<body onload="changeSlide()">

	<div id="wrap">

		<header id="header" class="sticky-top">
			
			<nav class="navbar navbar-dark bg-jumpers navbar-expand-lg navbar-inverse" ata-spy="affix" data-offset-top="197">
				<a class="navbar-brand" href="#"><img src="images/logo.png" width="30" height="30" class="d-inline-block mr-1 align-bottom" alt="logo horse"> <span style="color:#3ed6bf">BET</span>WAYS
					<div style="clear:both"></div></a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Przelacznik aplikacji">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="mainmenu">

					<ul class="navbar-nav mr-auto">
<!--                  <li class="nav-item  active">-->
						<li class="nav-item <?php echo $home?>">
							<a class="nav-link" href="sport-roulette-betting-systems">Home</a>
						</li>

						<li class="nav-item dropdown <?php echo $football ?>">
							<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" id="submenu" aria-haspopup="true">Football</a>

							<div class="dropdown-menu" aria-labelledby="submenu">

								<a class="dropdown-item" href="football-betting-system-4matches4bets">4 matches 4 bets</a>
								<a class="dropdown-item" href="football-betting-system-half-full-time-2bets"> Half/Full Time 2 bets</a>

								<div class="dropdown-divider"></div>

								<a class="dropdown-item" href="football-betting-system-fortune"> Fortune</a>
								<a class="dropdown-item" href="football-betting-system-highest-odds">Highest Odds</a>

							</div>

						</li>

					  <li class="nav-item dropdown <?php echo $horseRacing ?>">
							<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" id="submenu" aria-haspopup="true">Horse Racing</a>

							<div class="dropdown-menu" aria-labelledby="submenu">

								<a class="dropdown-item" href="horse-racing-betting-system-fibonacci">Fibonacci</a>
								<a class="dropdown-item" href="horse-racing-betting-system-form-last-ran"> Form Last Ran</a>

								<div class="dropdown-divider"></div>

								<a class="dropdown-item" href="horse-racing-betting-system-lay-the-loser"> Lay The Loser</a>
								<a class="dropdown-item" href="horse-racing-betting-system-favourite">2nd/3rd Favourite</a>
							</div>

						</li>

					  <li class="nav-item dropdown <?php echo $roulette ?>">
							<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" id="submenu" aria-haspopup="true">Roulette</a>

							<div class="dropdown-menu" aria-labelledby="submenu">

								<a class="dropdown-item" href="roulette-strategy-martingale">Martingale</a>
								<a class="dropdown-item" href="roulette-strategy-comet"> Comet</a>

								<div class="dropdown-divider"></div>

								<a class="dropdown-item" href="roulette-strategy-domination"> Domination</a>
								<a class="dropdown-item" href="roulette-strategy-3streets">3 Streets</a>

							</div>

						</li>


					  <li class="nav-item dropdown <?php echo $tennis ?>">
							<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" id="submenu" aria-haspopup="true">Tennis</a>

							<div class="dropdown-menu" aria-labelledby="submenu">

								<a class="dropdown-item" href="tennis-betting-system-favourite">Favourite</a>
								<a class="dropdown-item" href="tennis-betting-system-fortune">Fortune for Tennis</a>

								<div class="dropdown-divider"></div>

								<a class="dropdown-item" href="tennis-betting-system-follow-the-server"> Follow the Server</a>
								<a class="dropdown-item" href="tennis-betting-system-catch-the-break-point">Catch the Break Point</a>

							</div>

						</li>
						<li class="nav-item dropdown <?php echo $jsGames ?>">
							<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" id="submenu" aria-haspopup="true">JS Games</a>

							<div class="dropdown-menu" aria-labelledby="submenu">

								<a class="dropdown-item" href="js-games\HANGMAN-GAME\hangman.html">Hangman</a>
								<a class="dropdown-item" href="js-games\MEMORY-TEST-GAME\game.html">Memory test</a>

								<div class="dropdown-divider"></div>

								<a class="dropdown-item" href="js-games\TABLE-TENNIS-NEW\tennis_index.html"> Table Tennis</a>
								<a class="dropdown-item disabled" href="">Pinguins JS+Canvas- in progress</a>

							</div>

						</li>   
					  <li class="nav-item <?php echo $aboutUs ?>">
							<a class="nav-link" href="about-us-contact">About Us</a>
						</li>

					</ul>

				</div>

			</nav>
		</header>
