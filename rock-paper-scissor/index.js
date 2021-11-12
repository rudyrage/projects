let turn = "player";
let playerAttack = "0", computerAttack="1";
let playerScore = computerScore = tieScore = 0;
let winner = null;

let playerTurn = document.getElementById("player-turn");
let computerTurn = document.getElementById("computer-turn");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let playerPoint = document.getElementById("player-score")
let computerPoint = document.getElementById("computer-score")
let tiePoint = document.getElementById("tie-score")

function random(max) {
	return Math.floor(Math.random() * (max));
}


function computer() {
	let weapon = ["rock", "paper", "scissor"];
	return weapon[random(weapon.length)];
}

function toggleTurn() {
	if (turn == "player")
		turn = "computer";
	else turn = "player"
}

function displayBotAction(choice) {
	let action = {
		"rock": 0,
		"paper": 1,
		scissor: 2
	}
	if (choice == "rock") {
		document.getElementsByTagName("img")[0].style.transform = "rotate(45deg)";
		setTimeout(function(){ document.getElementsByTagName("img")[0].style.transform = "rotate(0deg)" }, 1000)
	}
	else if (choice == "paper") {
		document.getElementsByTagName("img")[1].style.transform = "rotate(45deg)";
		setTimeout(function(){ document.getElementsByTagName("img")[1].style.transform = "rotate(0deg)" }, 1000)
	}

	else if (choice == "scissor") {
		document.getElementsByTagName("img")[2].style.transform = "rotate(45deg)";
		setTimeout(function(){ document.getElementsByTagName("img")[2].style.transform = "rotate(0deg)" }, 1000)
	}
	let display = document.getElementById("display").children[0];
	display.style.visibility = "visible";
	display.textContent = `Computer hit ${choice}, ${winner} won`;
}

function game() {
	if (playerAttack === computerAttack) {
		tieScore += 1;
		tiePoint.textContent = tieScore;
		winner = "no one"
	}

	else if (playerAttack == "rock")  {
		if (computerAttack == "paper"){
		computerScore += 1;
		computerPoint.textContent = computerScore; 
		winner = "computer"		}

		else if (computerAttack == "scissor"){
			playerScore += 1;
			playerPoint.textContent = playerScore;
			winner = "player"
		}
	}

	else if (playerAttack == "paper")  {
		if (computerAttack == "scissor"){
		computerScore += 1;
		computerPoint.textContent = computerScore; 
		winner = "computer"		}

		else if (computerAttack == "rock"){
			playerScore += 1;
			playerPoint.textContent = playerScore;
			winner = "player"
		}
	}

	else if (playerAttack == "scissor")  {
		if (computerAttack == "rock"){
		computerScore += 1;
		computerPoint.textContent = computerScore; 
		winner = "computer"
		}

		else if (computerAttack == "paper"){
			playerScore += 1;
			playerPoint.textContent = playerScore;
			winner = "player"
		}
	}

}

rock.addEventListener('click', () => {
	playerAttack = "rock";
	computerAttack = computer();
	game()
	toggleTurn();
	displayBotAction(computerAttack)
	
	document.getElementsByTagName("img")[0].style.transform = "rotate(45deg)";
	setTimeout(function(){ document.getElementsByTagName("img")[0].style.transform = "rotate(0deg)" }, 1000)
})

paper.addEventListener('click', () => {
	playerAttack = "paper";
	computerAttack = computer();
	game()
	toggleTurn()
	displayBotAction(computerAttack)
	document.getElementsByTagName("img")[1].style.transform = "rotate(45deg)";
	setTimeout(function(){ document.getElementsByTagName("img")[1].style.transform = "rotate(0deg)" }, 1000)

})

scissor.addEventListener('click', () => {
	playerAttack = "scissor";
	computerAttack = computer();
	game()
	toggleTurn()
	displayBotAction(computerAttack)
	document.getElementsByTagName("img")[2].style.transform = "rotate(45deg)";
	setTimeout(function(){ document.getElementsByTagName("img")[2].style.transform = "rotate(0deg)" }, 1000)

})