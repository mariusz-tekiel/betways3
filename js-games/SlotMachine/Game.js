class Game {
    constructor(start) {
    	this.stats = new Statistics();
    	this.wallet = new Wallet(start);
		document
		.getElementById("start")
		.addEventListener("click", this.startGame.bind(this));
		this.spanWallet = document.querySelector(".panel span.wallet");
		this.boards = [...document.querySelectorAll("div.color")];
		this.inputBid = document.getElementById("bid");
		this.spanResult = document.querySelector(".score span.result");
		this.spanGames = document.querySelector(".score span.number");
		this.spanWins = document.querySelector(".score span.win");
		this.spanLosses = document.querySelector(".score span.loss");

		this.render();
  	}
	render(
		colors = ["gray", "gray", "gray"],
		money = this.wallet.getWalletValue(),
		result = "",
		stats = [0, 0, 0],
		bid = 0,
		wonMoney = 0
	) {
		this.boards.forEach((board, i) => {
			board.style.backgroundColor = colors[i];
		});
		this.spanWallet.textContent = money;
		if (result) {
			result = `You win ${wonMoney}$. `;
		} else if (!result && result !== "") {
			result = `You lost ${bid}$. `;
		}
		this.spanResult.textContent = result;
		this.spanGames.textContent = stats[0];
		this.spanWins.textContent = stats[1];
		this.spanLosses.textContent = stats[2];
	}
	startGame() {
		if (this.inputBid.value < 1) return alert("This amount is too small!");
		const bid = Math.floor(this.inputBid.value);

		if (!this.wallet.checkCanPlay(bid)) {
			return alert("You don't have enough money or this value is invalid!");
		}
		this.wallet.changeWallet(bid, "-");
		this.draw = new Draw();

		const colors = this.draw.getDrawResult();
		const win = Result.checkWinner(colors);
		const wonMoney = Result.moneyWinInGame(win, bid);
		this.wallet.changeWallet(wonMoney);

		this.stats.addGameToStatistics(win, bid);

		this.render(
			colors,
			this.wallet.getWalletValue(),
			win,
			this.stats.showGameStatistics(),
			bid,
			wonMoney
		);
	}
}
